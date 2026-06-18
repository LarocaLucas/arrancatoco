/* ============================================================
   hero.js — Módulo da Seção Hero
   Gerencia o background (vídeo ou imagem fallback) e o countdown
   regressivo até a data do evento configurada em config.js.
   ============================================================ */

import { CONFIG } from './config.js';

/**
 * Configura o background da seção hero.
 * Adiciona a classe 'hero--video' ou 'hero--fallback' ao elemento #hero
 * e configura o src do vídeo ou da imagem de acordo com CONFIG.hero.
 * @returns {void}
 */
const setupHeroBackground = () => {
  const heroSection = document.getElementById('hero');
  if (!heroSection) {
    console.warn('[Hero] Elemento #hero não encontrado.');
    return;
  }

  if (CONFIG.hero.useVideo) {
    heroSection.classList.add('hero--video');

    const videoEl = heroSection.querySelector('video');
    if (videoEl) {
      const sourceEl = videoEl.querySelector('source');
      if (sourceEl) {
        sourceEl.setAttribute('src', CONFIG.hero.videoSrc);
      } else {
        videoEl.setAttribute('src', CONFIG.hero.videoSrc);
      }
    }
  } else {
    heroSection.classList.add('hero--fallback');
  }

  const fallbackImg = heroSection.querySelector('.hero__fallback');
  if (fallbackImg) {
    fallbackImg.setAttribute('src', CONFIG.hero.fallbackImage);
    fallbackImg.setAttribute('alt', CONFIG.hero.fallbackAlt);
  }
};

/**
 * Calcula o tempo restante até a data-alvo.
 * @param {Date} targetDate — A data/hora do evento.
 * @returns {{ days: number, hours: number, minutes: number, seconds: number, isExpired: boolean }}
 *   Objeto com dias, horas, minutos, segundos restantes e flag de expiração.
 */
const calculateTimeRemaining = (targetDate) => {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isExpired: false };
};

/**
 * Atualiza os elementos do countdown no DOM.
 * Cada valor é preenchido com zero à esquerda (padding de 2 dígitos,
 * exceto dias que podem ter mais).
 * @param {{ days: number, hours: number, minutes: number, seconds: number, isExpired: boolean }} time
 *   Objeto retornado por calculateTimeRemaining.
 * @returns {void}
 */
const updateCountdownDOM = (time) => {
  const daysEl    = document.getElementById('countDays');
  const hoursEl   = document.getElementById('countHours');
  const minutesEl = document.getElementById('countMinutes');
  const secondsEl = document.getElementById('countSeconds');

  if (daysEl)    daysEl.textContent    = String(time.days).padStart(2, '0');
  if (hoursEl)   hoursEl.textContent   = String(time.hours).padStart(2, '0');
  if (minutesEl) minutesEl.textContent = String(time.minutes).padStart(2, '0');
  if (secondsEl) secondsEl.textContent = String(time.seconds).padStart(2, '0');
};

/**
 * Inicia o countdown regressivo até a data do evento.
 * Atualiza o DOM a cada 1 segundo. Quando expirado, limpa o intervalo.
 * @returns {void}
 */
const startEventCountdown = () => {
  const targetDate = new Date(CONFIG.event.date);

  if (isNaN(targetDate.getTime())) {
    console.error('[Hero] Data do evento inválida:', CONFIG.event.date);
    return;
  }

  // Atualização imediata para evitar "flash" de valores vazios
  updateCountdownDOM(calculateTimeRemaining(targetDate));

  const intervalId = setInterval(() => {
    const time = calculateTimeRemaining(targetDate);
    updateCountdownDOM(time);

    if (time.isExpired) {
      clearInterval(intervalId);
      console.log('[Hero] Countdown encerrado — evento iniciado!');
    }
  }, 1000);
};

/**
 * Configura o link do botão CTA do hero.
 * @returns {void}
 */
const setupHeroCTA = () => {
  const ctaBtn = document.getElementById('heroCTABtn');
  if (ctaBtn) {
    ctaBtn.setAttribute('href', CONFIG.event.cheersLink);
  }
};

/**
 * Inicializa o módulo Hero.
 * Configura o background, inicia o countdown e define o link CTA.
 * @returns {void}
 */
export const initHero = () => {
  try {
    setupHeroBackground();
    startEventCountdown();
    setupHeroCTA();
    console.log('[Hero] Módulo inicializado.');
  } catch (error) {
    console.error('[Hero] Erro na inicialização:', error);
  }
};
