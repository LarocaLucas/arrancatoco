/* ============================================================
   tickets.js — Módulo da Seção Ingressos
   Renderiza as listas de lotes (pista e camarote) a partir de
   config.js, destaca o lote ativo e aplica animação de
   strikethrough em lotes esgotados via IntersectionObserver.
   ============================================================ */

import { CONFIG } from './config.js';

/**
 * Renderiza um item de lote como elemento <li>.
 * Aplica a classe CSS correspondente ao status:
 *   - 'lot-item--past'     → lote esgotado
 *   - 'lot-item--active'   → lote em venda
 *   - 'lot-item--upcoming' → lote futuro
 * Lotes ativos recebem um badge "EM VENDA".
 * @param {{ name: string, price: string, status: string }} lot — Dados do lote.
 * @returns {HTMLLIElement} O elemento <li> criado.
 */
const renderLotItem = (lot) => {
  const li = document.createElement('li');
  li.classList.add('lot-item');

  // Aplica classe de status
  switch (lot.status) {
    case 'past':
      li.classList.add('lot-item--past');
      break;
    case 'active':
      li.classList.add('lot-item--active');
      break;
    case 'upcoming':
    default:
      li.classList.add('lot-item--upcoming');
      break;
  }

  // Nome do lote
  const nameSpan = document.createElement('span');
  nameSpan.classList.add('lot-item__name');
  nameSpan.textContent = lot.name;
  li.appendChild(nameSpan);

  // Badge para lote ativo
  if (lot.status === 'active') {
    const badge = document.createElement('span');
    badge.classList.add('lot-item__badge');
    badge.textContent = 'EM VENDA';
    li.appendChild(badge);
  }

  // Preço
  const priceSpan = document.createElement('span');
  priceSpan.classList.add('lot-item__price');
  priceSpan.textContent = lot.price;
  li.appendChild(priceSpan);

  return li;
};

/**
 * Popula uma lista <ul> com os lotes fornecidos.
 * @param {HTMLUListElement} listEl — O elemento <ul> alvo.
 * @param {Array<{ name: string, price: string, status: string }>} lots — Array de lotes.
 * @returns {void}
 */
const populateLotList = (listEl, lots) => {
  lots.forEach((lot) => {
    const li = renderLotItem(lot);
    listEl.appendChild(li);
  });
};

/**
 * Configura o IntersectionObserver para animação de strikethrough
 * nos lotes com status 'past'. Quando visíveis, recebem a classe
 * 'is-visible' que dispara a animação CSS.
 * @returns {void}
 */
const setupStrikethroughAnimation = () => {
  const pastLots = document.querySelectorAll('.lot-item--past');

  if (pastLots.length === 0) return;

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
      rootMargin: '0px 0px -30px 0px'
    }
  );

  pastLots.forEach((el) => observer.observe(el));
};

/**
 * Configura o link do botão CTA de ingressos.
 * @returns {void}
 */
const setupTicketsCTA = () => {
  const ctaBtn = document.getElementById('ticketsCTABtn');
  if (ctaBtn) {
    ctaBtn.setAttribute('href', CONFIG.event.cheersLink);
  } else {
    console.warn('[Tickets] Elemento #ticketsCTABtn não encontrado.');
  }
};

/**
 * Inicializa o módulo Tickets.
 * Popula as listas de lotes de pista e camarote, configura o CTA
 * e aplica animações de strikethrough nos lotes passados.
 * @returns {void}
 */
export const initTickets = () => {
  try {
    const pistaList    = document.getElementById('pistaLotList');
    const camaroteList = document.getElementById('camaroteLotList');

    if (pistaList) {
      populateLotList(pistaList, CONFIG.tickets.pista);
    } else {
      console.warn('[Tickets] Elemento #pistaLotList não encontrado.');
    }

    if (camaroteList) {
      populateLotList(camaroteList, CONFIG.tickets.camarote);
    } else {
      console.warn('[Tickets] Elemento #camaroteLotList não encontrado.');
    }

    setupTicketsCTA();
    setupStrikethroughAnimation();

    console.log('[Tickets] Módulo inicializado.');
  } catch (error) {
    console.error('[Tickets] Erro na inicialização:', error);
  }
};
