import { defineConfig } from "vite";
import { VitePWA as pwa } from "vite-plugin-pwa";
import manifest from "./manifest.json";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false
            }
          ]
        ]
      }
    }),
    pwa({
      strategies: "injectManifest",
      srcDir: "",
      filename: "service-worker.js",
      manifest,
    }),
  ],
});
