import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base : "/sw/",
  plugins: [react()],
  optimizeDeps: {
    include: ['react-simple-typewriter'],
  },
})
