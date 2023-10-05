import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [react({include: "**/*.jsx",})],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
    },
  }
})
