import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/glitch-armour/', // <-- your repo name, with slashes
  plugins: [react()],
})
