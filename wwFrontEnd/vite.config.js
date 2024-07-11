import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from "rollup-plugin-copy"
import  { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(), copy({targets:[{src:'public/_redirects',  dest: 'dist'}]})],
  build: {outDir: 'dist'},
})
