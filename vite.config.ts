import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Ensure this matches the publish directory in Netlify
    rollupOptions: {
      input: 'index.html', // Or the main entry point of your app
    },
  },
});
