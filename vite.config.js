import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Proxy removido - ahora usamos Firebase directamente
  plugins: [
    react(),
    tailwindcss()
  ],
})
