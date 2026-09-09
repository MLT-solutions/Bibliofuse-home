import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Book, Plus, Trash2, ArrowUp, ArrowDown, Loader2, Settings2, Sparkles, RefreshCcw } from "lucide-react";
import { clsx } from "clsx";
import { downloadBlob } from "../lib/download";
import { startToolJob } from "../lib/analytics";
import ToolDisclaimer from "../components/ToolDisclaimer";
import { getVips } from "../lib/vips";
import { BlobReader, BlobWriter, ZipReader, ZipWriter, TextReader, TextWriter } from "@zip.js/zip.js";
const RESOLUTIONS = [
  { label: "800p", value: 800 },
  { label: "960p", value: 960 },
  { label: "1080p", value: 1080 },
  { label: "1440p", value: 1440 },
  { label: "1600p", value: 1600 }
];
function EPUBReducer({ dict = {} }) {
  const t = dict.tools?.epub_reducer || {
    title: "EPUB Reducer",
    description: "Compress or Merge EPUB files. Images are converted to optimized JPEGs to reduce size.",
    upload_label: "Upload EPUB Files",
    upload_hint: "Drag & drop your EPUBs here",
    files_ready: "Files Ready",
    processing: "Processing...",
    process_btn: "Process & Download",
    settings: "Reduction Settings",
    max_size: "Max Image Dimension",
    grayscale: "Grayscale Images",
    merge_label: "Merge into one book"
  };
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [settings, setSettings] = useState({
    maxSize: 1080,
    grayscale: false,
    merge: false,
    outputFileName: ""
  });
  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prev) => {
      const newFiles = [...prev, ...acceptedFiles];
      if (newFiles.length > 0 && !settings.outputFileName) {
        const firstLabel = newFiles[0].name.replace(/\.[^/.]+$/, "");
        setSettings((s) => ({ ...s, outputFileName: firstLabel }));
      }
      return newFiles;
    });
  }, [settings.outputFileName]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/epub+zip": [".epub"] }
  });
  const removeFile = (index) => {
    setFiles((prev) => {
      const nextFiles = prev.filter((_, i) => i !== index);
      if (nextFiles.length === 0) {
        setSettings((s) => ({ ...s, outputFileName: "" }));
      } else if (index === 0) {
        const firstLabel = nextFiles[0].name.replace(/\.[^/.]+$/, "");
        setSettings((s) => ({ ...s, outputFileName: firstLabel }));
      }
      return nextFiles;
    });
  };
  const refreshOutputName = () => {
    if (files.length > 0) {
      const firstLabel = files[0].name.replace(/\.[^/.]+$/, "");
      setSettings((s) => ({ ...s, outputFileName: firstLabel }));
    }
  };
  const moveFile = (index, direction) => {
    const newFiles = [...files];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newFiles.length) return;
    [newFiles[index], newFiles[targetIndex]] = [newFiles[targetIndex], newFiles[index]];
    setFiles(newFiles);
  };
  const processFiles = async () => {
    if (files.length === 0) return;
    const analyticsJob = startToolJob("epub-reducer", "process");
    setIsProcessing(true);
    setProgress(0);
    try {
      const vips = await getVips();
      let resultBlob;
      if (settings.merge && files.length > 1) {
        resultBlob = await processMergeEPUB(files, settings, vips, setProgress);
        const finalName = settings.outputFileName || "merged_compressed";
        downloadBlob(resultBlob, `${finalName}.epub`);
      } else {
        if (files.length === 1) {
          resultBlob = await processBatchEPUB(files[0], settings, vips, setProgress);
          downloadBlob(resultBlob, `compressed_${files[0].name}`);
        } else {
          for (let i = 0; i < files.length; i++) {
            const blob = await processBatchEPUB(files[i], settings, vips, (p) => setProgress((i + p / 100) / files.length * 100));
            downloadBlob(blob, `compressed_${files[i].name}`);
          }
        }
      }
      analyticsJob.success("epub");
    } catch (error) {
      console.error("Error processing EPUB:", error);
      analyticsJob.error(error);
      alert("An error occurred while processing your EPUB.");
    } finally {
      setIsProcessing(false);
      setProgress(0);
    }
  };
  return <div className="max-w-4xl mx-auto p-6 space-y-8"><div className="text-center space-y-2"><h1 className="text-3xl font-bold tracking-tight">{t.title}</h1><p className="text-muted-foreground">{t.description}</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="md:col-span-2 space-y-6"><div
    {...getRootProps()}
    className={clsx(
      "relative group cursor-pointer border-2 border-dashed rounded-3xl p-12 transition-all duration-300 ease-out",
      isDragActive ? "border-primary bg-primary/10" : "border-border hover:border-primary hover:bg-muted/50"
    )}
  ><input {...getInputProps()} /><div className="flex flex-col items-center justify-center space-y-4"><div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"><Plus className="w-8 h-8 text-primary" /></div><div className="text-center"><p className="text-lg font-medium">{t.upload_label}</p><p className="text-sm text-muted-foreground">{t.upload_hint}</p></div></div></div>{files.length > 0 && <div className="space-y-4"><div className="flex items-center justify-between"><h2 className="text-lg font-semibold">{t.files_ready}</h2><span className="text-sm text-muted-foreground">{files.length} files selected</span></div><div className="bg-card rounded-3xl border border-border overflow-hidden divide-y divide-border shadow-sm transition-all duration-300">{files.map((file, index) => <div key={`${file.name}-${index}`} className="group flex items-center p-4 hover:bg-muted/50 transition-colors"><div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground mr-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors"><Book className="w-6 h-6" /></div><div className="flex-1 min-w-0 py-1"><p className="font-medium text-foreground text-sm break-all" title={file.name}>{file.name}</p><p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p></div><div className="flex items-center space-x-1"><button onClick={() => moveFile(index, "up")} disabled={index === 0} title="Move Up" className="p-2 text-muted-foreground hover:text-primary disabled:opacity-0 rounded-lg hover:bg-muted"><ArrowUp className="w-4 h-4" /></button><button onClick={() => moveFile(index, "down")} disabled={index === files.length - 1} title="Move Down" className="p-2 text-muted-foreground hover:text-primary disabled:opacity-0 rounded-lg hover:bg-muted"><ArrowDown className="w-4 h-4" /></button><button onClick={() => removeFile(index)} title="Remove" className="p-2 text-muted-foreground hover:text-destructive rounded-lg hover:bg-muted"><Trash2 className="w-4 h-4" /></button></div></div>)}</div></div>}</div><div className="space-y-6"><div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-6"><div className="flex items-center gap-2 pb-2 border-b border-border"><Settings2 className="w-5 h-5 text-primary" /><h2 className="font-bold">{t.settings}</h2></div><div className="space-y-6"><div className="space-y-3"><span className="text-sm font-medium text-foreground">{t.max_size}</span><div className="flex flex-wrap gap-2">{RESOLUTIONS.map((res) => <button
    key={res.value}
    onClick={() => setSettings({ ...settings, maxSize: res.value })}
    className={clsx(
      "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
      settings.maxSize === res.value ? "bg-primary text-primary-foreground shadow-sm ring-2 ring-primary/20" : "bg-secondary text-muted-foreground hover:bg-secondary/80"
    )}
  >{res.label}</button>)}</div></div><div className="flex items-center justify-between p-3 bg-secondary rounded-2xl"><span className="text-sm font-medium text-foreground">{t.grayscale}</span><button
    onClick={() => setSettings({ ...settings, grayscale: !settings.grayscale })}
    className={clsx(
      "w-12 h-6 rounded-full transition-colors relative",
      settings.grayscale ? "bg-primary" : "bg-muted"
    )}
  ><div className={clsx("w-4 h-4 bg-white rounded-full absolute top-1 transition-all", settings.grayscale ? "right-1" : "left-1")} /></button></div><div className="space-y-3"><span className="text-sm font-medium text-foreground">Processing Mode</span><div className="grid grid-cols-2 gap-2 p-1 bg-secondary rounded-xl">{["batch", "merge"].map((m) => <button
    key={m}
    onClick={() => setSettings({ ...settings, merge: m === "merge" })}
    className={clsx(
      "py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize",
      (m === "merge" ? settings.merge : !settings.merge) ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
    )}
  >{m}</button>)}</div></div>{settings.merge && <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300"><span className="text-sm font-medium text-foreground">Output Filename</span><div className="flex items-center gap-2"><input
    type="text"
    value={settings.outputFileName}
    onChange={(e) => setSettings({ ...settings, outputFileName: e.target.value })}
    placeholder="merged_book"
    className="flex-1 px-4 py-2 bg-secondary border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground"
  /><button
    onClick={refreshOutputName}
    title="Reset to first filename"
    className="p-2 text-muted-foreground hover:text-primary rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
  ><RefreshCcw className="w-4 h-4" /></button></div></div>}</div></div><button
    onClick={processFiles}
    disabled={files.length === 0 || isProcessing}
    className={clsx(
      "w-full flex items-center justify-center px-8 py-4 rounded-3xl font-bold transition-all duration-300 shadow-xl shadow-primary/10 active:scale-[0.98]",
      isProcessing || files.length === 0 ? "bg-secondary text-muted-foreground cursor-not-allowed" : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/20"
    )}
  >{isProcessing ? <div className="flex flex-col items-center"><div className="flex items-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /><span>{progress.toFixed(0)}%</span></div></div> : <><Sparkles className="w-5 h-5 mr-2" />{t.process_btn}</>}</button></div></div><ToolDisclaimer message={dict.common?.labels?.image_disclaimer || "Images are re-encoded to shrink them, which is lossy — keep your original if you need it. Everything runs in this browser tab; no file is uploaded."} /></div>;
}
async function processBatchEPUB(file, settings, vips, onProgress) {
  const v = vips;
  const reader = new ZipReader(new BlobReader(file));
  const writer = new ZipWriter(new BlobWriter("application/epub+zip"));
  const entries = await reader.getEntries();
  const total = entries.length;
  let processed = 0;
  for (const entry of entries) {
    if (entry.filename.match(/\.(xhtml|html|htm|css|opf|ncx|xml|svg)$/i)) {
      let text = await entry.getData(new TextWriter());
      text = text.replace(/\.png(["');])/gi, ".jpg$1");
      text = text.replace(/media-type=["']image\/png["']/gi, 'media-type="image/jpeg"');
      await writer.add(entry.filename, new TextReader(text));
    } else if (entry.filename.match(/\.(jpg|jpeg|png)$/i)) {
      const blob = await entry.getData(new BlobWriter());
      const buffer = await blob.arrayBuffer();
      let image = v.Image.newFromBuffer(buffer);
      const shortest = Math.min(image.width, image.height);
      const needsResize = shortest > settings.maxSize;
      const needsGray = settings.grayscale;
      const isPng = entry.filename.toLowerCase().endsWith(".png");
      if (!needsResize && !needsGray && !isPng) {
        image.delete();
        await writer.add(entry.filename, new BlobReader(blob));
      } else {
        if (needsResize) {
          const old = image;
          image = image.resize(settings.maxSize / shortest, { kernel: v.Kernel.lanczos3 });
          old.delete();
        }
        if (needsGray) {
          const old = image;
          image = image.colourspace("b-w");
          old.delete();
        }
        const outBuffer = image.writeToBuffer(".jpg", { Q: 80 });
        image.delete();
        let newFilename = entry.filename;
        if (isPng) newFilename = entry.filename.substring(0, entry.filename.lastIndexOf(".")) + ".jpg";
        await writer.add(newFilename, new BlobReader(new Blob([outBuffer])));
      }
    } else {
      const blob = await entry.getData(new BlobWriter());
      await writer.add(entry.filename, new BlobReader(blob));
    }
    processed++;
    onProgress(processed / total * 100);
  }
  return await writer.close();
}
async function processMergeEPUB(files, settings, vips, onProgress) {
  const v = vips;
  const writer = new ZipWriter(new BlobWriter("application/epub+zip"));
  const parser = new DOMParser();
  const serializer = new XMLSerializer();
  const totalBooks = files.length;
  await writer.add("mimetype", new TextReader("application/epub+zip"), { level: 0 });
  const baseFile = files[0];
  const baseReader = new ZipReader(new BlobReader(baseFile));
  const baseEntries = await baseReader.getEntries();
  let baseOpfPath = "", baseOpfEntry = null;
  const containerEntry = baseEntries.find((e) => e.filename === "META-INF/container.xml");
  if (containerEntry) {
    const xml = await containerEntry.getData(new TextWriter());
    const doc = parser.parseFromString(xml, "text/xml");
    baseOpfPath = doc.getElementsByTagName("rootfile")[0].getAttribute("full-path") || "";
    baseOpfEntry = baseEntries.find((e) => e.filename === baseOpfPath);
  }
  if (!baseOpfEntry) {
    baseOpfEntry = baseEntries.find((e) => e.filename.endsWith(".opf"));
    baseOpfPath = baseOpfEntry.filename;
  }
  const baseOpfXml = await baseOpfEntry.getData(new TextWriter());
  const baseOpfDoc = parser.parseFromString(baseOpfXml, "text/xml");
  const baseManifest = baseOpfDoc.getElementsByTagName("manifest")[0];
  const baseSpine = baseOpfDoc.getElementsByTagName("spine")[0];
  const baseOpfDir = baseOpfPath.split("/").slice(0, -1).join("/");
  let baseNcxPath = null;
  const spineTocId = baseSpine.getAttribute("toc");
  if (spineTocId) {
    const item = Array.from(baseManifest.children).find((el) => el.getAttribute("id") === spineTocId);
    if (item) baseNcxPath = (baseOpfDir ? baseOpfDir + "/" : "") + item.getAttribute("href");
  }
  if (baseNcxPath) {
    const ncxEntry = baseEntries.find((e) => e.filename === baseNcxPath);
    if (ncxEntry) {
      await ncxEntry.getData(new TextWriter());
    }
  }
  let filesProcessed = 0;
  for (const entry of baseEntries) {
    if (entry.filename === "mimetype" || entry.filename === baseOpfPath || entry.filename === baseNcxPath || entry.filename.endsWith("/")) continue;
    const blob = await entry.getData(new BlobWriter());
    await writer.add(entry.filename, new BlobReader(blob));
    filesProcessed++;
    onProgress(filesProcessed / baseEntries.length * (100 / totalBooks));
  }
  for (let i = 1; i < totalBooks; i++) {
    const nextFile = files[i];
    const nextReader = new ZipReader(new BlobReader(nextFile));
    const nextEntries = await nextReader.getEntries();
    const prefix = `b${i + 1}_`;
    let nextOpfPath = "";
    const nextContainer = nextEntries.find((e) => e.filename === "META-INF/container.xml");
    if (nextContainer) {
      const xml = await nextContainer.getData(new TextWriter());
      const doc = parser.parseFromString(xml, "text/xml");
      nextOpfPath = doc.getElementsByTagName("rootfile")[0].getAttribute("full-path") || "";
    } else {
      nextOpfPath = nextEntries.find((e) => e.filename.endsWith(".opf"))?.filename || "";
    }
    const nextOpfEntry = nextEntries.find((e) => e.filename === nextOpfPath);
    if (!nextOpfEntry) continue;
    const nextOpfXml = await nextOpfEntry.getData(new TextWriter());
    const nextOpfDoc = parser.parseFromString(nextOpfXml, "text/xml");
    const nextManifest = nextOpfDoc.getElementsByTagName("manifest")[0];
    const nextSpine = nextOpfDoc.getElementsByTagName("spine")[0];
    const nextOpfDir = nextOpfPath.split("/").slice(0, -1).join("/");
    const items = Array.from(nextManifest.getElementsByTagName("item"));
    const idMap = {};
    for (let j = 0; j < items.length; j++) {
      const item = items[j];
      const oldId = item.getAttribute("id");
      const oldHref = item.getAttribute("href");
      const mediaType = item.getAttribute("media-type");
      if (mediaType === "application/x-dtbncx+xml") continue;
      const newId = prefix + oldId;
      idMap[oldId] = newId;
      const srcPath = nextOpfDir ? `${nextOpfDir}/${oldHref}` : oldHref;
      const filename = oldHref.split("/").pop();
      const isImg = mediaType.startsWith("image/");
      const folder = isImg ? "OEBPS/assets" : "OEBPS";
      const destPath = `${folder}/${prefix}${filename}`;
      const entry = nextEntries.find((e) => e.filename === srcPath);
      if (entry) {
        const blob = await entry.getData(new BlobWriter());
        let finalBlob = blob;
        let finalMediaType = mediaType;
        let finalDestPath = destPath;
        if (isImg && (settings.maxSize || settings.grayscale)) {
          const buffer = await blob.arrayBuffer();
          try {
            let image = v.Image.newFromBuffer(buffer);
            const shortest = Math.min(image.width, image.height);
            if (shortest > settings.maxSize) {
              const old = image;
              image = image.resize(settings.maxSize / shortest, { kernel: v.Kernel.lanczos3 });
              old.delete();
            }
            if (settings.grayscale) {
              const old = image;
              image = image.colourspace("b-w");
              old.delete();
            }
            const outBuffer = image.writeToBuffer(".jpg", { Q: 80 });
            image.delete();
            finalBlob = new Blob([outBuffer]);
            finalMediaType = "image/jpeg";
            finalDestPath = destPath.replace(/\.[^.]+$/, ".jpg");
          } catch {
          }
        }
        await writer.add(finalDestPath, new BlobReader(finalBlob));
        const newItem = baseOpfDoc.createElementNS("http://www.idpf.org/2007/opf", "item");
        newItem.setAttribute("id", newId);
        newItem.setAttribute("href", finalDestPath);
        newItem.setAttribute("media-type", finalMediaType);
        baseManifest.appendChild(newItem);
      }
      onProgress(i / totalBooks * 100 + (j + 1) / items.length * (100 / totalBooks));
    }
    const itemrefs = Array.from(nextSpine.getElementsByTagName("itemref"));
    for (const ref of itemrefs) {
      const oldId = ref.getAttribute("idref");
      if (idMap[oldId]) {
        const newRef = baseOpfDoc.createElementNS("http://www.idpf.org/2007/opf", "itemref");
        newRef.setAttribute("idref", idMap[oldId]);
        baseSpine.appendChild(newRef);
      }
    }
  }
  const finalOpf = serializer.serializeToString(baseOpfDoc);
  await writer.add(baseOpfPath, new TextReader(finalOpf));
  return await writer.close();
}
export {
  EPUBReducer as default
};
