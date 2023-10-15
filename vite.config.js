import { defineConfig, loadEnv } from 'vite'
import path from "path";

import react from "@vitejs/plugin-react-swc";
// import vitePluginRequire from "vite-plugin-require";




// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig(
  ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
      plugins: [react({ include: "**/*.jsx", }),
      ],
      resolve: {
        alias: {
          'src': path.resolve(__dirname, './src'),
        },
      },
      define: {
        'process.env.NEXT_PUBLIC_URL': JSON.stringify(env.NEXT_PUBLIC_URL),
        // 'process.env.NEXT_ARTICLES_DB_ID': JSON.stringify(env.NEXT_ARTICLES_DB_ID),
        // If you want to exposes all env variables, which is not recommended
        // 'process.env': env
      },
    };
  },
)
