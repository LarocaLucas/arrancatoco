/* ============================================================
   floating-btn.js — Módulo do Botão Flutuante de Ingressos
   Controla a visibilidade do botão flutuante com base na
   posição de scroll. O botão aparece quando a seção hero sai
   do viewport e some quando o hero está visível.
   ============================================================ */

import { CONFIG } from './config.js';

/**
 * Configura o href do botão flutuante com o link do Cheers.
 * @returns {void}
 */
const setupFloatingBtnLink = () => {
  const btn = document.getElementById('floatingTicketBtn');
  if (btn) {
    btn.setAttribute('href', CONFIG.event.cheersLink);
  } else {
    console.warn('[FloatingBtn] Elemento #floatingTicketBtn não encontrado.');
  }
};

/**
 * Configura o IntersectionObserver na seção #hero para controlar
 * a visibilidade do botão flutuante.
 *
 * Quando a seção hero NÃO está intersectando (saiu do viewport):
 *   - Remove 'floating-btn--hidden'
 *   - Adiciona 'floating-btn--visible'
 *
 * Quando a seção hero ESTÁ intersectando (visível no viewport):
 *   - Remove 'floating-btn--visible'
 *   - Adiciona 'floating-btn--hidden'
 *
 * @returns {void}
 */
const setupVisibilityObserver = () => {
  const heroSection = document.getElementById('hero');
  const floatingBtn = document.getElementById('floatingTicketBtn');

  if (!heroSection) {
    console.warn('[FloatingBtn] Elemento #hero não encontrado.');
    return;
  }

  if (!floatingBtn) {
    console.warn('[FloatingBtn] Elemento #floatingTicketBtn não encontrado.');
    return;
  }

  // Estado inicial: botão oculto (hero visível no topo)
  floatingBtn.classList.add('floating-btn--hidden');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Hero visível → esconde o botão
          floatingBtn.classList.remove('floating-btn--visible');
          floatingBtn.classList.add('floating-btn--hidden');
        } else {
          // Hero fora do viewport → mostra o botão
          floatingBtn.classList.remove('floating-btn--hidden');
          floatingBtn.classList.add('floating-btn--visible');
        }
      });
    },
    {
      threshold: 0,
      rootMargin: '0px'
    }
  );

  observer.observe(heroSection);
};

/**
 * Inicializa o módulo FloatingBtn.
 * Configura o link e o observer de visibilidade.
 * @returns {void}
 */
export const initFloatingBtn = () => {
  try {
    setupFloatingBtnLink();
    setupVisibilityObserver();
    console.log('[FloatingBtn] Módulo inicializado.');
  } catch (error) {
    console.error('[FloatingBtn] Erro na inicialização:', error);
  }
};
