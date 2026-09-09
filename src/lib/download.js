// Ported from lokaltools (src/lib/download.ts) alongside the file tools.
export function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Delay revocation so the browser has started the download.
    setTimeout(() => URL.revokeObjectURL(url), 100);
}
