import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Generate manifest for better asset handling
    manifest: true,
    // Improve asset chunking
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react', 'aos'],
        },
      },
    },
    // Enhance image asset optimization
    assetsInlineLimit: 4096, // Only inline images smaller than 4kb
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // Don't use relative paths for assets in production build
  base: '/',
  // Configure asset handling
  assetsInclude: ['**/*.{png,jpg,jpeg,gif,svg,webp,avif}'],
  // Optimize image compression
  optimizeDeps: {
    exclude: ['@vite/client', '@vite/env'],
  },
})