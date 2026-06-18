/* ============================================================
   footer.js — Módulo do Rodapé
   Configura o ano dinâmico no copyright e o link do Instagram
   a partir de config.js.
   ============================================================ */

import { CONFIG } from './config.js';

/**
 * Atualiza o ano no elemento de copyright do rodapé.
 * Busca o elemento #footerYear e define o ano atual.
 * @returns {void}
 */
const setDynamicYear = () => {
  const yearEl = document.getElementById('footerYear');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  } else {
    console.warn('[Footer] Elemento #footerYear não encontrado.');
  }
};

/**
 * Configura o link do Instagram no rodapé a partir de CONFIG.
 * Busca o elemento #footerInstagram e define o href.
 * @returns {void}
 */
const setupInstagramLink = () => {
  const instagramLink = document.getElementById('footerInstagram');
  if (instagramLink) {
    instagramLink.setAttribute('href', CONFIG.event.instagram);
  } else {
    console.warn('[Footer] Elemento #footerInstagram não encontrado.');
  }
};

/**
 * Inicializa o módulo Footer.
 * Define o ano dinâmico e configura o link do Instagram.
 * @returns {void}
 */
export const initFooter = () => {
  try {
    setDynamicYear();
    setupInstagramLink();
    console.log('[Footer] Módulo inicializado.');
  } catch (error) {
    console.error('[Footer] Erro na inicialização:', error);
  }
};
