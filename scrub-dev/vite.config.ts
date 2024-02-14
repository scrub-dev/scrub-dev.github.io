/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";
import {resolve} from 'node:path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "./",
  build: {
    rollupOptions : {
      input: {
        main: "./index.html",
        fourohfour: "./404.html"
      }
    }
  }
})
