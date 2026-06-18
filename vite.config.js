/* ============================================================
   vite.config.js — Configuração do Vite
   
   Build otimizado para produção com chunks separados por módulo.
   Output na pasta dist/ para deploy.
   
   O base path é detectado automaticamente:
   - GitHub Pages: /arrancatoco/
   - Cloudflare Pages / Local: /
   ============================================================ */

import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  // GitHub Actions define a variável GITHUB_ACTIONS=true automaticamente
  base: process.env.GITHUB_ACTIONS ? '/arrancatoco/' : '/',
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
