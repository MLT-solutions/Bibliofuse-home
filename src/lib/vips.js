// Ported verbatim from lokaltools (src/lib/vips.ts). Loads wasm-vips lazily — nothing
// is fetched until a user actually processes a file, which is what keeps these pages
// prerenderable and cheap to open.
//
// wasm-vips spawns pthreads and therefore wants SharedArrayBuffer, which requires
// cross-origin isolation. `public/_headers` sets COOP/COEP on `/*/tools/*` for exactly
// this reason. Without isolation vips.js's __pthread_create_js returns error code 6
// rather than aborting, so it degrades to single-threaded instead of failing outright.
let vipsInstance = null;
let vipsLoadingPromise = null;

export async function getVips() {
    if (vipsInstance) return vipsInstance;

    if (!vipsLoadingPromise) {
        vipsLoadingPromise = (async () => {
            if (!window.crossOriginIsolated) {
                console.warn('Not cross-origin isolated — vips will run single-threaded.');
            }

            if (typeof window.Vips === 'undefined') {
                await new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    script.src = '/wasm/vips.js';
                    script.onload = resolve;
                    script.onerror = () => reject(new Error('Failed to load vips.js'));
                    document.body.appendChild(script);
                    setTimeout(() => reject(new Error('Vips load timeout')), 20000);
                });
            }

            return window.Vips({
                locateFile: (fileName) =>
                    fileName.endsWith('.wasm') || fileName.endsWith('.worker.js')
                        ? '/wasm/' + fileName
                        : fileName,
                print: () => { },
                printErr: (msg) => console.warn('[vips]', msg),
            });
        })();
    }

    try {
        vipsInstance = await vipsLoadingPromise;
        return vipsInstance;
    } catch (err) {
        vipsLoadingPromise = null;
        throw err;
    }
}
