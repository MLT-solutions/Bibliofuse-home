import { useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import * as pdfjs from "pdfjs-dist";
import { FileText, Download, Loader2, Image as ImageIcon, CheckCircle2, Archive } from "lucide-react";
import { clsx } from "clsx";
import JSZip from "jszip";
import { downloadBlob } from "../lib/download";
import { logToolError } from "../lib/analytics";
import ToolDisclaimer from "../components/ToolDisclaimer";
pdfjs.GlobalWorkerOptions.workerSrc = "/workers/pdf.worker.min.mjs";
function PDFToJPG() {
  const { t: translate } = useTranslation();
  const t = translate('redesign.toolsPages.pdf-to-jpg.tool', { returnObjects: true }) || {
    title: "PDF to JPG",
    description: "Render every page of a PDF as a JPG image.",
    uploadLabel: "Upload a PDF",
    uploadHint: "Select a single PDF file",
    changeFile: "Change File",
    quality: "Render quality",
    low: "Low",
    medium: "Medium",
    high: "High",
    converting: "Converting…",
    convertBtn: "Convert to JPG",
    pagesGenerated: "{{count}} Pages Generated",
    page: "Page {{number}}",
    downloadZip: "Download all as ZIP",
    error: "An error occurred while converting your PDF.",
    disclaimer: "Pages are rendered and encoded in this browser tab. Nothing is uploaded.",
  };
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pages, setPages] = useState([]);
  const [quality, setQuality] = useState(2);
  const canvasRef = useRef(null);
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles[0]) {
      setFile(acceptedFiles[0]);
      setPages([]);
    }
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: false
  });
  const convertToJPG = async () => {
    if (!file) return;
    setIsProcessing(true);
    setPages([]);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      const newPages = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: quality });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        if (!context) continue;
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await page.render({
          canvasContext: context,
          viewport
        }).promise;
        const blob = await new Promise((resolve) => {
          canvas.toBlob((b) => resolve(b), "image/jpeg", 0.9);
        });
        newPages.push({
          pageNumber: i,
          url: URL.createObjectURL(blob),
          blob
        });
      }
      setPages(newPages);
    } catch (error) {
      console.error("Error converting PDF:", error);
      logToolError("pdf-to-jpg", error);
      alert(t.error);
    } finally {
      setIsProcessing(false);
    }
  };
  const downloadAllAsZip = async () => {
    const zip = new JSZip();
    pages.forEach((page) => {
      zip.file(`page-${page.pageNumber}.jpg`, page.blob);
    });
    const content = await zip.generateAsync({ type: "blob" });
    downloadBlob(content, `${file?.name.replace(".pdf", "")}-images.zip`);
  };
  const qualities = [
    { label: t.low, value: 1, dpi: "72 DPI" },
    { label: t.medium, value: 2, dpi: "150 DPI" },
    { label: t.high, value: 4, dpi: "300 DPI" }
  ];
  return <div className="max-w-4xl mx-auto p-6 space-y-8"><div className="text-center space-y-2"><h1 className="text-3xl font-bold tracking-tight">{t.title}</h1><p className="text-neutral-500">{t.description}</p></div>{!file ? <div
    {...getRootProps()}
    className={clsx(
      "relative group cursor-pointer border-2 border-dashed rounded-3xl p-12 transition-all duration-300 ease-out",
      isDragActive ? "border-blue-500 bg-blue-50/50" : "border-neutral-200 hover:border-blue-400 hover:bg-neutral-50/50"
    )}
  ><input {...getInputProps()} /><div className="flex flex-col items-center justify-center space-y-4"><div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"><FileText className="w-8 h-8 text-blue-500" /></div><div className="text-center"><p className="text-lg font-medium">{t.uploadLabel}</p><p className="text-sm text-neutral-500">{t.uploadHint}</p></div></div></div> : <div className="space-y-6"><div className="flex items-center p-4 bg-white rounded-2xl border border-neutral-200 shadow-sm"><div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mr-4"><FileText className="w-6 h-6" /></div><div className="flex-1 min-w-0"><p className="font-medium text-neutral-900 truncate">{file.name}</p><p className="text-xs text-neutral-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p></div><button
    onClick={() => {
      setFile(null);
      setPages([]);
    }}
    className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
  >
                            {t.changeFile}
                        </button></div><div className="grid grid-cols-1 md:grid-cols-3 gap-4"><div className="md:col-span-2 p-6 bg-white rounded-3xl border border-neutral-200 space-y-4"><h3 className="font-semibold flex items-center"><ImageIcon className="w-4 h-4 mr-2 text-blue-500" />{t.quality}</h3><div className="grid grid-cols-3 gap-3">{qualities.map((q) => <button
    key={q.value}
    onClick={() => setQuality(q.value)}
    className={clsx(
      "p-4 rounded-2xl border transition-all duration-200 text-left space-y-1",
      quality === q.value ? "border-blue-500 bg-blue-50/50 text-blue-700 ring-2 ring-blue-500/20" : "border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50"
    )}
  ><div className="text-xs font-bold uppercase tracking-wider opacity-60">{q.dpi}</div><div className="font-semibold">{q.label}</div></button>)}</div></div><div className="flex items-end"><button
    onClick={convertToJPG}
    disabled={isProcessing}
    className={clsx(
      "w-full flex items-center justify-center px-8 py-4 h-[72px] rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95",
      isProcessing ? "bg-neutral-100 text-neutral-400 cursor-not-allowed shadow-none" : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/30"
    )}
  >{isProcessing ? <><Loader2 className="w-5 h-5 mr-3 animate-spin" />{t.converting}</> : <><ImageIcon className="w-5 h-5 mr-3" />{t.convertBtn}</>}</button></div></div></div>}{pages.length > 0 && <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500"><div className="flex items-center justify-between"><h2 className="text-xl font-bold flex items-center"><CheckCircle2 className="w-6 h-6 mr-2 text-green-500" />{translate('redesign.toolsPages.pdf-to-jpg.tool.pagesGenerated', { count: pages.length, defaultValue: t.pagesGenerated })}</h2><button
    onClick={downloadAllAsZip}
    className="flex items-center px-4 py-2 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors shadow-sm"
  ><Archive className="w-4 h-4 mr-2" />{t.downloadZip}</button></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{pages.map((page) => <div key={page.pageNumber} className="group relative bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"><div className="aspect-[3/4] relative"><img src={page.url} alt={`Page ${page.pageNumber}`} className="object-cover w-full h-full" /><div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><button
    onClick={() => downloadBlob(page.blob, `page-${page.pageNumber}.jpg`)}
    className="p-3 bg-white rounded-full text-blue-600 shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300 hover:bg-blue-50"
  ><Download className="w-6 h-6" /></button></div><div className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur rounded-lg text-xs font-bold shadow-sm">{translate('redesign.toolsPages.pdf-to-jpg.tool.page', { number: page.pageNumber, defaultValue: t.page })}</div></div></div>)}</div></div>}<ToolDisclaimer message={t.disclaimer} /></div>;
}
export {
  PDFToJPG as default
};
