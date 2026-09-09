import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5174,
    // Mirror the cross-origin isolation that public/_headers applies to /*/tools/* in
    // production, so the WASM tools behave the same locally. Vite cannot scope headers
    // per-path, so dev isolates the whole origin — harmless here, but it is why the
    // production file scopes it to the tool routes instead.
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'credentialless',
    },
  },
})
