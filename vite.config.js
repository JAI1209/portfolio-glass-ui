import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'portfolio-glass-ui'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 900,
  },
})
