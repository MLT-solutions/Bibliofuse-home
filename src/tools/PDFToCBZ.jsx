import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FileText, Plus, Trash2, Loader2, FileArchive, Sparkles, ArrowUp, ArrowDown, RefreshCcw } from "lucide-react";
import { clsx } from "clsx";
import { downloadBlob } from "../lib/download";
import { startToolJob } from "../lib/analytics";
import ToolDisclaimer from "../components/ToolDisclaimer";
import { getVips } from "../lib/vips";
import { BlobReader, BlobWriter, ZipWriter } from "@zip.js/zip.js";
import * as pdfjsLib from "pdfjs-dist";
pdfjsLib.GlobalWorkerOptions.workerSrc = "/workers/pdf.worker.min.mjs";
const RESOLUTIONS = [
  { label: "800p", value: 800 },
  { label: "960p", value: 960 },
  { label: "1080p", value: 1080 },
  { label: "1440p", value: 1440 },
  { label: "1600p", value: 1600 }
];
function PDFToCBZ({ dict = {} }) {
  const t = dict.tools?.pdf_to_cbz || {
    title: "PDF to image CBZ/ZIP",
    description: "Convert PDF documents into high-quality CBZ or ZIP image archives. Each page becomes a high-quality JPEG.",
    upload_label: "Upload PDF File",
    upload_hint: "Drag & drop your PDF here",
    files_ready: "File Ready",
    processing: "Converting...",
    process_btn: "Convert to CBZ/ZIP"
  };
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [settings, setSettings] = useState({
    maxSize: 1080,
    mode: "batch",
    archiveFormat: "cbz",
    imageFormat: "jpg",
    grayscale: false,
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
    accept: { "application/pdf": [".pdf"] },
    multiple: true
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
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= files.length) return;
    [newFiles[index], newFiles[newIndex]] = [newFiles[newIndex], newFiles[index]];
    setFiles(newFiles);
  };
  const processPDFs = async () => {
    if (files.length === 0) return;
    const analyticsJob = startToolJob("pdf-to-cbz", "process");
    setIsProcessing(true);
    setProgress(0);
    try {
      const vips = await getVips();
      if (settings.mode === "merge") {
        const writer = new ZipWriter(new BlobWriter("application/zip"));
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          setCurrentStep(`Processing ${file.name}...`);
          const arrayBuffer = await file.arrayBuffer();
          const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
          for (let j = 1; j <= pdf.numPages; j++) {
            const page = await pdf.getPage(j);
            const viewport = page.getViewport({ scale: 2 });
            const canvas = document.createElement("canvas");
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const context = canvas.getContext("2d");
            if (context) {
              await page.render({ canvasContext: context, viewport }).promise;
              const outExt = settings.imageFormat === "webp" ? ".webp" : ".jpg";
              const outMime = settings.imageFormat === "webp" ? "image/webp" : "image/jpeg";
              const blob = await new Promise(
                (resolve) => canvas.toBlob((b) => resolve(b), outMime, 0.9)
              );
              if (blob) {
                const buffer = await blob.arrayBuffer();
                let image = vips.Image.newFromBuffer(buffer);
                const shortest = Math.min(image.width, image.height);
                if (shortest > settings.maxSize) {
                  const old = image;
                  image = image.resize(settings.maxSize / shortest, { kernel: vips.Kernel.lanczos3 });
                  old.delete();
                }
                if (settings.grayscale) {
                  const old = image;
                  image = image.colourspace("b-w");
                  old.delete();
                }
                const outOpts = settings.imageFormat === "webp" ? { Q: 75 } : { Q: 80 };
                const outBuffer = image.writeToBuffer(outExt, outOpts);
                image.delete();
                const filename = `f${i + 1}_p${j.toString().padStart(4, "0")}${outExt}`;
                await writer.add(filename, new BlobReader(new Blob([outBuffer])));
              }
            }
            const pageProgress = j / pdf.numPages * (100 / files.length);
            setProgress(i / files.length * 100 + pageProgress);
          }
        }
        const resultBlob = await writer.close();
        const finalName = settings.outputFileName || "merged_comic";
        downloadBlob(resultBlob, `${finalName}.${settings.archiveFormat}`);
      } else {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          setCurrentStep(`Converting ${file.name}...`);
          const arrayBuffer = await file.arrayBuffer();
          const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
          const writer = new ZipWriter(new BlobWriter("application/zip"));
          for (let j = 1; j <= pdf.numPages; j++) {
            const page = await pdf.getPage(j);
            const viewport = page.getViewport({ scale: 2 });
            const canvas = document.createElement("canvas");
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const context = canvas.getContext("2d");
            if (context) {
              await page.render({ canvasContext: context, viewport }).promise;
              const outExt = settings.imageFormat === "webp" ? ".webp" : ".jpg";
              const outMime = settings.imageFormat === "webp" ? "image/webp" : "image/jpeg";
              const blob = await new Promise(
                (resolve) => canvas.toBlob((b) => resolve(b), outMime, 0.9)
              );
              if (blob) {
                const buffer = await blob.arrayBuffer();
                let image = vips.Image.newFromBuffer(buffer);
                const shortest = Math.min(image.width, image.height);
                if (shortest > settings.maxSize) {
                  const old = image;
                  image = image.resize(settings.maxSize / shortest, { kernel: vips.Kernel.lanczos3 });
                  old.delete();
                }
                if (settings.grayscale) {
                  const old = image;
                  image = image.colourspace("b-w");
                  old.delete();
                }
                const outOpts = settings.imageFormat === "webp" ? { Q: 75 } : { Q: 80 };
                const outBuffer = image.writeToBuffer(outExt, outOpts);
                image.delete();
                await writer.add(`${j.toString().padStart(4, "0")}${outExt}`, new BlobReader(new Blob([outBuffer])));
              }
            }
            const pageProgress = j / pdf.numPages * (100 / files.length);
            setProgress(i / files.length * 100 + pageProgress);
          }
          const resultBlob = await writer.close();
          downloadBlob(resultBlob, `${file.name.replace(/\.[^.]+$/, "")}.${settings.archiveFormat}`);
        }
      }
      analyticsJob.success(settings.archiveFormat);
    } catch (error) {
      console.error("Error converting PDF to CBZ:", error);
      analyticsJob.error(error);
      alert("An error occurred while converting your PDF.");
    } finally {
      setIsProcessing(false);
      setProgress(0);
      setCurrentStep("");
    }
  };
  return <div className="max-w-4xl mx-auto p-6 space-y-8"><div className="text-center space-y-2"><h1 className="text-3xl font-bold tracking-tight">{t.title}</h1><p className="text-muted-foreground">{t.description}</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="md:col-span-2 space-y-6"><div
    {...getRootProps()}
    className={clsx(
      "relative group cursor-pointer border-2 border-dashed rounded-3xl p-12 transition-all duration-300 ease-out",
      isDragActive ? "border-primary bg-primary/10" : "border-border hover:border-primary hover:bg-muted/50"
    )}
  ><input {...getInputProps()} /><div className="flex flex-col items-center justify-center space-y-4"><div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"><Plus className="w-8 h-8 text-primary" /></div><div className="text-center"><p className="text-lg font-medium">{t.upload_label || "Upload PDF Files"}</p><p className="text-sm text-muted-foreground">{t.upload_hint || "Drag & drop your PDFs here"}</p></div></div></div>{files.length > 0 && <div className="space-y-4"><div className="flex items-center justify-between"><h2 className="text-lg font-semibold">{t.files_ready || "Files Ready"}</h2><span className="text-sm text-muted-foreground">{files.length} items selected</span></div><div className="bg-card rounded-3xl border border-border overflow-hidden divide-y divide-border shadow-sm transition-all duration-300">{files.map((file, index) => <div key={`${file.name}-${index}`} className="group flex items-center p-4 hover:bg-muted/50 transition-colors"><div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground mr-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors"><FileText className="w-6 h-6" /></div><div className="flex-1 min-w-0 py-1"><p className="font-medium text-foreground text-sm break-all" title={file.name}>{file.name}</p><p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p></div><div className="flex items-center space-x-1"><button onClick={() => moveFile(index, "up")} disabled={index === 0} title="Move Up" className="p-2 text-muted-foreground hover:text-primary disabled:opacity-0 rounded-lg hover:bg-muted transition-all"><ArrowUp className="w-4 h-4" /></button><button onClick={() => moveFile(index, "down")} disabled={index === files.length - 1} title="Move Down" className="p-2 text-muted-foreground hover:text-primary disabled:opacity-0 rounded-lg hover:bg-muted transition-all"><ArrowDown className="w-4 h-4" /></button><button onClick={() => removeFile(index)} title="Remove" className="p-2 text-muted-foreground hover:text-destructive rounded-lg hover:bg-muted transition-all"><Trash2 className="w-4 h-4" /></button></div></div>)}</div></div>}</div><div className="space-y-6"><div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-6"><div className="flex items-center gap-2 pb-2 border-b border-border"><FileArchive className="w-5 h-5 text-primary" /><h2 className="font-bold">{dict.common?.labels?.settings || "Settings"}</h2></div><div className="space-y-6"><div className="space-y-3"><span className="text-sm font-medium text-foreground">Shortest Dimension Resolution</span><div className="flex flex-wrap gap-2">{RESOLUTIONS.map((res) => <button
    key={res.value}
    onClick={() => setSettings({ ...settings, maxSize: res.value })}
    className={clsx(
      "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
      settings.maxSize === res.value ? "bg-primary text-primary-foreground shadow-sm ring-2 ring-primary/20" : "bg-secondary text-muted-foreground hover:bg-secondary/80"
    )}
  >{res.label}</button>)}</div></div><div className="space-y-3"><span className="text-sm font-medium text-foreground">Processing Mode</span><div className="grid grid-cols-2 gap-2 p-1 bg-secondary rounded-xl">{["batch", "merge"].map((m) => <button
    key={m}
    onClick={() => setSettings({ ...settings, mode: m })}
    className={clsx(
      "py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize",
      settings.mode === m ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
    )}
  >{m}</button>)}</div></div>{settings.mode === "merge" && <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300"><span className="text-sm font-medium text-foreground">Output Filename</span><div className="flex items-center gap-2"><input
    type="text"
    value={settings.outputFileName}
    onChange={(e) => setSettings({ ...settings, outputFileName: e.target.value })}
    placeholder="merged_comic"
    className="flex-1 px-4 py-2 bg-secondary border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground"
  /><button
    onClick={refreshOutputName}
    title="Reset to first filename"
    className="p-2 text-muted-foreground hover:text-primary rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
  ><RefreshCcw className="w-4 h-4" /></button></div></div>}<div className="space-y-3"><span className="text-sm font-medium text-foreground">{dict.common?.labels?.image_format || "Image Format"}</span><div className="grid grid-cols-2 gap-2 p-1 bg-secondary rounded-xl">{["jpg", "webp"].map((f) => <button
    key={f}
    onClick={() => setSettings({ ...settings, imageFormat: f })}
    className={clsx(
      "py-2 rounded-lg text-sm font-medium transition-all duration-200 uppercase",
      settings.imageFormat === f ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
    )}
  >{f}</button>)}</div></div><div className="space-y-3"><span className="text-sm font-medium text-foreground">{dict.common?.labels?.archive_format || "Archive Format"}</span><div className="grid grid-cols-2 gap-2 p-1 bg-secondary rounded-xl">{["cbz", "zip"].map((f) => <button
    key={f}
    onClick={() => setSettings({ ...settings, archiveFormat: f })}
    className={clsx(
      "py-2 rounded-lg text-sm font-medium transition-all duration-200 uppercase",
      settings.archiveFormat === f ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
    )}
  >{f}</button>)}</div></div><div className="flex items-center justify-between p-3 bg-secondary rounded-2xl"><span className="text-sm font-medium text-foreground">Grayscale</span><button
    onClick={() => setSettings({ ...settings, grayscale: !settings.grayscale })}
    className={clsx(
      "w-12 h-6 rounded-full transition-colors relative",
      settings.grayscale ? "bg-primary" : "bg-muted"
    )}
  ><div className={clsx("w-4 h-4 bg-white rounded-full absolute top-1 transition-all", settings.grayscale ? "right-1" : "left-1")} /></button></div></div></div><button
    onClick={processPDFs}
    disabled={files.length === 0 || isProcessing}
    className={clsx(
      "w-full flex items-center justify-center px-8 py-4 rounded-3xl font-bold transition-all duration-300 shadow-xl shadow-primary/10 active:scale-[0.98]",
      isProcessing || files.length === 0 ? "bg-secondary text-muted-foreground cursor-not-allowed" : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/20"
    )}
  >{isProcessing ? <div className="space-y-1 text-center"><div className="flex items-center justify-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /><span>{progress.toFixed(0)}%</span></div>{currentStep && <p className="text-[10px] font-normal truncate max-w-[150px]">{currentStep}</p>}</div> : <div className="flex items-center"><Sparkles className="w-5 h-5 mr-2" /><span>{files.length > 1 && settings.mode === "batch" ? `Convert ${files.length} Files` : t.process_btn}</span></div>}</button></div></div><ToolDisclaimer message={dict.common?.labels?.image_disclaimer || "Images are re-encoded to shrink them, which is lossy — keep your original if you need it. Everything runs in this browser tab; no file is uploaded."} /></div>;
}
export {
  PDFToCBZ as default
};
