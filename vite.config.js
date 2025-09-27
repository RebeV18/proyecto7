import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    // Optimizaciones para el bundle
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar Firebase en su propio chunk
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          // Separar React en su propio chunk
          react: ['react', 'react-dom'],
          // Separar librerías de UI
          ui: ['clsx', '@mercadopago/sdk-react'],
          // Separar Axios
          http: ['axios']
        }
      }
    },
    // Aumentar el límite de warning para chunks grandes
    chunkSizeWarningLimit: 1000
  }
})
