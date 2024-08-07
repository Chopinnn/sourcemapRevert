import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), vueJsx()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true
    // rollupOptions: {
    //   input: ['src/index.html']
    // }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
