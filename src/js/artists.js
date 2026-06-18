/* ============================================================
   artists.js — Módulo da Seção Artistas
   Renderiza cards de artistas com efeito flip (frente/verso),
   gerencia contagem regressiva individual para revelação e
   dispara a revelação automática quando a data chegar.
   ============================================================ */

import { CONFIG } from './config.js';

/**
 * Verifica se um artista deve ser revelado.
 * Um artista é revelado se isRevealed === true OU se a revealDate
 * não é null e já passou.
 * @param {{ isRevealed: boolean, revealDate: string|null }} artist — Dados do artista.
 * @returns {boolean} True se o artista deve ser revelado.
 */
const shouldReveal = (artist) => {
  if (artist.isRevealed === true) {
    return true;
  }

  if (artist.revealDate !== null) {
    return new Date(artist.revealDate) <= new Date();
  }

  return false;
};

/**
 * Adiciona a classe de revelação ao card do artista,
 * disparando a animação de flip via CSS.
 * @param {HTMLElement} cardEl — O elemento do card do artista.
 * @param {{ name: string }} artist — Dados do artista (para log).
 * @returns {void}
 */
const revealArtist = (cardEl, artist) => {
  cardEl.classList.add('artist-card--revealed');
  console.log(`[Artists] Artista revelado: ${artist.name}`);
};

/**
 * Inicia o countdown individual para revelação de um artista.
 * Atualiza o elemento de countdown dentro do card a cada segundo.
 * Formato: "DDd HHh MMm SSs" ou "-- : -- : -- : --" se não há revealDate.
 * Quando o countdown expira, chama revealArtist e limpa o intervalo.
 * @param {{ revealDate: string|null, name: string }} artist — Dados do artista.
 * @param {HTMLElement} cardEl — O elemento do card do artista.
 * @returns {void}
 */
const startArtistCountdown = (artist, cardEl) => {
  const countdownEl = cardEl.querySelector('.artist-card__countdown');
  if (!countdownEl) return;

  if (artist.revealDate === null) {
    countdownEl.textContent = '-- : -- : -- : --';
    return;
  }

  const targetDate = new Date(artist.revealDate);

  if (isNaN(targetDate.getTime())) {
    console.error(`[Artists] Data de revelação inválida para artista ${artist.id}:`, artist.revealDate);
    countdownEl.textContent = '-- : -- : -- : --';
    return;
  }

  /**
   * Atualiza o texto do countdown com o tempo restante.
   * @returns {boolean} True se o countdown expirou.
   */
  const updateCountdown = () => {
    const now  = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      countdownEl.textContent = '00d 00h 00m 00s';
      return true;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const dd = String(days).padStart(2, '0');
    const hh = String(hours).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');

    countdownEl.textContent = `${dd}d ${hh}h ${mm}m ${ss}s`;
    return false;
  };

  // Atualização imediata
  const expired = updateCountdown();
  if (expired) {
    revealArtist(cardEl, artist);
    return;
  }

  const intervalId = setInterval(() => {
    const isExpired = updateCountdown();
    if (isExpired) {
      clearInterval(intervalId);
      revealArtist(cardEl, artist);
    }
  }, 1000);
};

/**
 * Renderiza um card de artista usando a DOM API.
 * Estrutura:
 *   .artist-card[data-artist-id]
 *     .artist-card__flipper
 *       .artist-card__front
 *         img (hidden image)
 *         .artist-card__countdown
 *       .artist-card__back
 *         img (revealed image)
 *         .artist-card__name
 * @param {{ id: number, name: string, hiddenImage: string, revealedImage: string, altHidden: string, altRevealed: string }} artist
 *   Dados do artista vindos de CONFIG.
 * @returns {HTMLElement} O elemento do card criado.
 */
const renderArtistCard = (artist) => {
  // Card container
  const card = document.createElement('div');
  card.classList.add('artist-card');
  card.setAttribute('data-artist-id', String(artist.id));

  // Flipper
  const flipper = document.createElement('div');
  flipper.classList.add('artist-card__flipper');

  // === Front face ===
  const front = document.createElement('div');
  front.classList.add('artist-card__front');

  const hiddenImg = document.createElement('img');
  hiddenImg.setAttribute('src', artist.hiddenImage);
  hiddenImg.setAttribute('alt', artist.altHidden);
  hiddenImg.classList.add('artist-card__img');
  hiddenImg.setAttribute('loading', 'lazy');
  front.appendChild(hiddenImg);

  const countdown = document.createElement('div');
  countdown.classList.add('artist-card__countdown');
  countdown.textContent = '-- : -- : -- : --';
  front.appendChild(countdown);

  // === Back face ===
  const back = document.createElement('div');
  back.classList.add('artist-card__back');

  const revealedImg = document.createElement('img');
  revealedImg.setAttribute('src', artist.revealedImage);
  revealedImg.setAttribute('alt', artist.altRevealed);
  revealedImg.classList.add('artist-card__img');
  revealedImg.setAttribute('loading', 'lazy');
  back.appendChild(revealedImg);

  const nameEl = document.createElement('p');
  nameEl.classList.add('artist-card__name');
  nameEl.textContent = artist.name;
  back.appendChild(nameEl);

  // Montagem
  flipper.appendChild(front);
  flipper.appendChild(back);
  card.appendChild(flipper);

  return card;
};

/**
 * Inicializa o módulo Artists.
 * Busca o grid, renderiza os cards, verifica revelações
 * e inicia countdowns para artistas não revelados.
 * @returns {void}
 */
export const initArtists = () => {
  try {
    const grid = document.getElementById('artistsGrid');
    if (!grid) {
      console.warn('[Artists] Elemento #artistsGrid não encontrado.');
      return;
    }

    CONFIG.artists.forEach((artist) => {
      const cardEl = renderArtistCard(artist);
      grid.appendChild(cardEl);

      if (shouldReveal(artist)) {
        revealArtist(cardEl, artist);
      } else {
        startArtistCountdown(artist, cardEl);
      }
    });

    console.log('[Artists] Módulo inicializado.');
  } catch (error) {
    console.error('[Artists] Erro na inicialização:', error);
  }
};
