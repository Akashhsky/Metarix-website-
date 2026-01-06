import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000
  },
  define: {
    // This ensures process.env is available in the browser context
    'process.env': {
      API_KEY: process.env.API_KEY
    }
  }
});