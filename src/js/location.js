/* ============================================================
   location.js — Módulo da Seção Localização
   Popula data formatada, informações do local, iframe do mapa
   e link do Google Maps a partir de config.js.
   ============================================================ */

import { CONFIG } from './config.js';

/**
 * Mapa de índices de mês para nomes em Português.
 * @type {string[]}
 */
const MONTHS_PT = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril',
  'Maio', 'Junho', 'Julho', 'Agosto',
  'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

/**
 * Formata uma data ISO para o formato brasileiro extenso.
 * Exemplo: "2026-08-15T16:00:00" → "15 de Agosto de 2026"
 * @param {string} isoDate — String de data no formato ISO 8601.
 * @returns {string} Data formatada em português ou string vazia se inválida.
 */
const formatDatePT = (isoDate) => {
  const date = new Date(isoDate);

  if (isNaN(date.getTime())) {
    console.error('[Location] Data inválida:', isoDate);
    return '';
  }

  const day   = date.getDate();
  const month = MONTHS_PT[date.getMonth()];
  const year  = date.getFullYear();

  return `${day} de ${month} de ${year}`;
};

/**
 * Popula o elemento de data do evento com a data formatada.
 * @returns {void}
 */
const populateDate = () => {
  const dateEl = document.getElementById('locationDate');
  if (dateEl) {
    dateEl.textContent = formatDatePT(CONFIG.event.date);
  } else {
    console.warn('[Location] Elemento #locationDate não encontrado.');
  }
};

/**
 * Popula as informações do local (nome, endereço, cidade).
 * Constrói o HTML via DOM API para manter a estrutura semântica.
 * @returns {void}
 */
const populateVenue = () => {
  const venueEl = document.getElementById('locationVenue');
  if (!venueEl) {
    console.warn('[Location] Elemento #locationVenue não encontrado.');
    return;
  }

  const { name, address, city } = CONFIG.event.venue;

  // Limpa o conteúdo existente
  venueEl.textContent = '';

  const nameStrong = document.createElement('strong');
  nameStrong.textContent = name;
  venueEl.appendChild(nameStrong);

  venueEl.appendChild(document.createElement('br'));

  const addressSpan = document.createElement('span');
  addressSpan.textContent = address;
  venueEl.appendChild(addressSpan);

  venueEl.appendChild(document.createElement('br'));

  const citySpan = document.createElement('span');
  citySpan.textContent = city;
  venueEl.appendChild(citySpan);
};

/**
 * Configura o iframe do Google Maps com a URL de embed.
 * @returns {void}
 */
const setupMap = () => {
  const mapEl = document.getElementById('locationMap');
  if (mapEl) {
    mapEl.setAttribute('src', CONFIG.event.venue.mapsEmbed);
  } else {
    console.warn('[Location] Elemento #locationMap não encontrado.');
  }
};

/**
 * Configura o link do botão "Ver no Google Maps".
 * @returns {void}
 */
const setupMapsButton = () => {
  const mapsBtn = document.getElementById('mapsBtn');
  if (mapsBtn) {
    mapsBtn.setAttribute('href', CONFIG.event.venue.mapsLink);
  } else {
    console.warn('[Location] Elemento #mapsBtn não encontrado.');
  }
};

/**
 * Configura o IntersectionObserver para animação de entrada
 * dos elementos .location__info e .location__map-wrapper.
 * Adiciona a classe 'is-visible' quando o elemento entra no viewport.
 * @returns {void}
 */
const setupScrollAnimations = () => {
  const targets = document.querySelectorAll('.location__info, .location__map-wrapper');

  if (targets.length === 0) {
    console.warn('[Location] Nenhum elemento de animação encontrado.');
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

  targets.forEach((el) => observer.observe(el));
};

/**
 * Inicializa o módulo Location.
 * Popula data, local, mapa, botão e configura animações de scroll.
 * @returns {void}
 */
export const initLocation = () => {
  try {
    populateDate();
    populateVenue();
    setupMap();
    setupMapsButton();
    setupScrollAnimations();
    console.log('[Location] Módulo inicializado.');
  } catch (error) {
    console.error('[Location] Erro na inicialização:', error);
  }
};
