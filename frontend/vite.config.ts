import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react()
  ],

  base: process.env.GITHUB_ACTIONS
      ? './'
      : process.env.GITHUB_ACTIONS
          ? '/CommandForgeEditor/'
          : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

