/* ============================================================
   main.js — Entry Point da Aplicação
   Importa e inicializa todos os módulos na ordem correta.
   Aguarda o DOMContentLoaded antes de iniciar qualquer módulo.
   ============================================================ */

import '../css/variables.css';
import '../css/global.css';
import '../css/hero.css';
import '../css/about.css';
import '../css/location.css';
import '../css/artists.css';
import '../css/tickets.css';
import '../css/footer.css';
import '../css/floating-btn.css';
import '../css/lightbox.css';

import { initHero }        from './hero.js';
import { initAbout }       from './about.js';
import { initLocation }    from './location.js';
import { initArtists }     from './artists.js';
import { initTickets }     from './tickets.js';
import { initFooter }      from './footer.js';
import { initFloatingBtn } from './floating-btn.js';
import { initLightbox }    from './lightbox.js';

document.addEventListener('DOMContentLoaded', () => {
  try {
    initHero();
    initAbout();
    initLocation();
    initArtists();
    initTickets();
    initFooter();
    initFloatingBtn();
    initLightbox();
    console.log('[Arranca Toco] Site inicializado com sucesso.');
  } catch (error) {
    console.error('[Arranca Toco] Erro na inicialização:', error);
  }
});
