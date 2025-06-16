import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TestWebsite/',
  build: {
    outDir: 'dist',
    target: 'es2015',
    rollupOptions: {
      output: {
        format: 'iife', // Change from 'es' to 'iife'
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
})
