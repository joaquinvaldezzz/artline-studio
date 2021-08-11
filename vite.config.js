import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    open: true,
  },
  build: {
    emptyOutDir: true,
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      input: { index: path.resolve(__dirname, 'index.html') },
      output: {
        assetFileNames: 'assets/css/[name].[ext]',
        chunkFileNames: 'assets/chunk/[name].js',
        entryFileNames: 'assets/js/[name].js',
      },
    },
  },
});
