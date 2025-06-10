import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

   server: {
    proxy: {
      '/api': { // requests to /api will be proxied
        target: 'https://shrib.com',
        changeOrigin: true, // important for virtual hosts
        rewrite: (path) => path.replace(/^\/api/, ''), // remove /api prefix
      },}}
})