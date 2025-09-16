import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,            // allow external connections
    strictPort: true,      // (optional) ensures fixed port
    allowedHosts: [        // whitelist ngrok or other tunneling domains
      "da5fc69cc6d4.ngrok-free.app"
    ]
  }
})
