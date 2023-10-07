import { defineConfig } from 'vite'
import path from "path";

import react from "@vitejs/plugin-react-swc";
// import vitePluginRequire from "vite-plugin-require";




// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [react({ include: "**/*.jsx", }), 

],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
    },
  }
  
})
