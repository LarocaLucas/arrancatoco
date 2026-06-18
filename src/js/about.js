/* ============================================================
   about.js — Módulo da Seção Sobre
   Popula a descrição do evento a partir de config.js e aplica
   animação de entrada via IntersectionObserver.
   ============================================================ */

import { CONFIG } from './config.js';

/**
 * Popula o elemento de descrição do evento com o texto de CONFIG.
 * Usa textContent para segurança (sem injeção de HTML).
 * @returns {void}
 */
const populateDescription = () => {
  const descriptionEl = document.getElementById('aboutDescription');
  if (descriptionEl) {
    descriptionEl.textContent = CONFIG.event.description;
  } else {
    console.warn('[About] Elemento #aboutDescription não encontrado.');
  }
};

/**
 * Configura o IntersectionObserver para animação de entrada
 * do bloco de texto da seção Sobre.
 * Quando o elemento .about__text-block entra no viewport,
 * a classe 'is-visible' é adicionada para disparar a animação CSS.
 * @returns {void}
 */
const setupScrollAnimation = () => {
  const textBlock = document.querySelector('.about__text-block');
  if (!textBlock) {
    console.warn('[About] Elemento .about__text-block não encontrado.');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  observer.observe(textBlock);
};

/**
 * Inicializa o módulo About.
 * Popula a descrição do evento e configura a animação de scroll.
 * @returns {void}
 */
export const initAbout = () => {
  try {
    populateDescription();
    setupScrollAnimation();
    console.log('[About] Módulo inicializado.');
  } catch (error) {
    console.error('[About] Erro na inicialização:', error);
  }
};
