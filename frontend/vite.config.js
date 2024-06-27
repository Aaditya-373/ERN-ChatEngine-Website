// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Additional build configurations if needed
    outDir: 'dist',
  },
  resolve: {
    alias: {
      // Add necessary aliases
    },
  },
});
