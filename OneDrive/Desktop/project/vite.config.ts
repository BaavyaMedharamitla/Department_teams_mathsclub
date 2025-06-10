import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Baavya_Portfolio/" // 👈 very important for Vite + GitHub Pages
})
