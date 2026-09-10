// Registry for the /tools/ section. Order here is the order on the hub page.
//
// The tool components were ported from lokaltools (2026-09-09) — file-format tools moved
// to the domain that should rank for "cbz to pdf", "reduce cbz file size" and friends,
// while general web utilities stayed on lokaltools. Their old URLs 301 here.
//
// `wasm: true` marks the tools that load wasm-vips and therefore need the cross-origin
// isolation headers set on /*/tools/* in public/_headers.
// `badge` is the short label in the nav dropdown. Set explicitly rather than derived
// from the tag, so the two PDF tools are told apart by their OUTPUT (PDF→CBZ vs
// PDF→JPG) instead of both rendering as "PDF".
export const TOOLS = [
    { slug: 'cbz-reducer', wasm: true, accent: 'blue', badge: 'CBZ' },
    { slug: 'epub-reducer', wasm: true, accent: 'violet', badge: 'EPUB' },
    { slug: 'pdf-to-cbz', wasm: true, accent: 'orange', badge: 'CBZ' },
    { slug: 'pdf-to-jpg', wasm: false, accent: 'teal', badge: 'JPG' },
    { slug: 'qr-generator', wasm: false, accent: 'emerald', badge: 'QR' },
];

export const TOOL_SLUGS = TOOLS.map((t) => t.slug);
