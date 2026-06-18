/* ============================================================
   vite.config.js — Configuração do Vite
   
   Build otimizado para produção com chunks separados por módulo.
   Output na pasta dist/ para deploy no Cloudflare Pages.
   ============================================================ */

import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
