import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  host: true, // Listen on all network interfaces
  port: 5173 // Or your preferred port
});