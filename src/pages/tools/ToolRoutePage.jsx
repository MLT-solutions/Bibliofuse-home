// One page component for every /tools/<slug>/ route. The tool itself is lazy-loaded so
// that a visitor landing on, say, /tools/pdf-to-jpg/ never downloads the vips-backed
// bundles for the other tools, and so the prerender step captures the page shell without
// pulling 13 MB of WASM into the build.
import React, { Suspense, lazy } from 'react';
import ToolPageLayout from '../../components/ToolPageLayout';

const TOOL_COMPONENTS = {
    'cbz-reducer': lazy(() => import('../../tools/CBZReducer.jsx')),
    'epub-reducer': lazy(() => import('../../tools/EPUBReducer.jsx')),
    'pdf-to-cbz': lazy(() => import('../../tools/PDFToCBZ.jsx')),
    'pdf-to-jpg': lazy(() => import('../../tools/PDFToJPG.jsx')),
    'qr-generator': lazy(() => import('../../tools/QrCodeGenerator.jsx')),
};

function ToolFallback() {
    return <div className="py-16 text-center text-sm text-slate-400">Loading tool…</div>;
}

export default function ToolRoutePage({ slug }) {
    const Tool = TOOL_COMPONENTS[slug];
    return (
        <ToolPageLayout slug={slug}>
            <Suspense fallback={<ToolFallback />}>
                <Tool />
            </Suspense>
        </ToolPageLayout>
    );
}
