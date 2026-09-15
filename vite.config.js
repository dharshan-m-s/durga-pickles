import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  build: command === 'build' ? {
    outDir: 'public',
    emptyOutDir: false,
    copyPublicDir: false,
  } : undefined,
  server: {
    proxy: {
      '/api': 'http://localhost:8787',
      '/uploads': 'http://localhost:8787',
    },
  },
}));
