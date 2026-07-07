/* ============================================================
   config.js — Arquivo Mestre de Configuração
   
   INSTRUÇÕES PARA O ORGANIZADOR:
   Este é o único arquivo que você precisa editar para atualizar o site.
   Não é necessário conhecimento de programação para as atualizações comuns.
   ============================================================ */

/**
 * Base URL do site, detectada automaticamente pelo Vite.
 * Local: "/" | GitHub Pages: "/arrancatoco/" | Cloudflare: "/"
 * @type {string}
 */
const BASE = import.meta.env.BASE_URL;

export const CONFIG = {
  event: {
    name: "Arranca Toco",
    edition: "25 Anos",
    tagline: "O Maior Open Bar dos Campos Gerais",
    organizer: "Eng. Civil UEPG — 5° Ano",
    // TODO: Confirmar data/hora exata com a organização
    date: "2026-08-15T16:00:00",
    venue: {
      name: "Centro de Eventos",
      address: "Av. General Aldo Bonde, R. Santa Teresinha, S/N — Contorno",
      city: "Ponta Grossa — PR",
      cep: "84060-170",
      mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Centro+de+Eventos+Ponta+Grossa+PR",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.4756044140613!2d-50.2029706!3d-25.1196067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e8108b57159b07%3A0x507c60d9bd2ed58b!2sCentro%20de%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1783389128768!5m2!1spt-BR!2sbr"
    },
    instagram: "https://www.instagram.com/arranca_oficial/",
    // TODO: Substituir pelo link real da página do evento no Cheers
    cheersLink: "https://cheers.com.br/evento/arranca-toco-25-anos-33279",
    // TODO: Substituir pelo texto oficial da organização
    description: `A maior festa da Engenharia Civil da UEPG chega à sua 25ª edição com tudo o que você espera e muito mais. Open bar completo, line-up explosivo e a energia que só os Campos Gerais sabem fazer. Prepare-se para uma noite histórica que celebra 25 anos de tradição, adrenalina e diversão sem limites.`
  },
  hero: {
    // TODO: Alterar para true quando o arquivo de vídeo estiver disponível
    useVideo: true,
    videoSrc: `${BASE}video/hero-video.mp4`,
    fallbackImage: `${BASE}images/fallback-hero.jpg`,
    fallbackAlt: "Arranca Toco 2026 — 25 Anos"
  },
  artists: [
    { id: 1, name: "Jonatas Felipe", revealDate: null, isRevealed: true, hiddenImage: `${BASE}images/artists/artist-1-hidden.png`, revealedImage: `${BASE}images/artists/artist-1-revealed.jpg`, altHidden: "Artista 1 — Em breve", altRevealed: "Jonatas Felipe" },
    { id: 2, name: "Megabaile do Areias", revealDate: null, isRevealed: true, hiddenImage: `${BASE}images/artists/artist-2-hidden.png`, revealedImage: `${BASE}images/artists/artist-2-revealed.jpg`, altHidden: "Artista 2 — Em breve", altRevealed: "Megabaile do Areias" },
    { id: 3, name: "???", revealDate: null, isRevealed: false, hiddenImage: `${BASE}images/artists/artist-3-hidden.png`, revealedImage: `${BASE}images/artists/artist-3-revealed.png`, altHidden: "Artista 3 — Em breve", altRevealed: "Artista 3" },
    { id: 4, name: "???", revealDate: null, isRevealed: false, hiddenImage: `${BASE}images/artists/artist-4-hidden.png`, revealedImage: `${BASE}images/artists/artist-4-revealed.png`, altHidden: "Artista 4 — Em breve", altRevealed: "Artista 4" },
    { id: 5, name: "???", revealDate: null, isRevealed: false, hiddenImage: `${BASE}images/artists/artist-5-hidden.png`, revealedImage: `${BASE}images/artists/artist-5-revealed.png`, altHidden: "Artista 5 — Em breve", altRevealed: "Artista 5" },
    { id: 6, name: "???", revealDate: null, isRevealed: false, hiddenImage: `${BASE}images/artists/artist-6-hidden.png`, revealedImage: `${BASE}images/artists/artist-6-revealed.png`, altHidden: "Artista 6 — Em breve", altRevealed: "Artista 6" }
  ],
  tickets: {
    pista: [
      { name: "LOTE RELÂMPAGO", price: "R$ 70,00",  status: "past"   },
      { name: "PRIMEIRO LOTE",  price: "R$ 80,00",  status: "active" },
      { name: "SEGUNDO LOTE",   price: "R$ 85,00",  status: "upcoming" },
      { name: "TERCEIRO LOTE",  price: "R$ 90,00",  status: "upcoming" },
      { name: "QUARTO LOTE",    price: "R$ 95,00",  status: "upcoming" },
      { name: "QUINTO LOTE",    price: "R$ 100,00", status: "upcoming" },
      { name: "SEXTO LOTE",     price: "R$ 110,00", status: "upcoming" },
      { name: "SÉTIMO LOTE",    price: "R$ 120,00", status: "upcoming" },
      { name: "OITAVO LOTE",    price: "R$ 140,00", status: "upcoming" },
      { name: "NONO LOTE",      price: "R$ 160,00", status: "upcoming" },
      { name: "DÉCIMO LOTE",    price: "R$ 200,00", status: "upcoming" }
    ],
    camarote: [
      { name: "LOTE RELÂMPAGO", price: "R$ 115,00", status: "past"   },
      { name: "PRIMEIRO LOTE",  price: "R$ 115,00", status: "past" },
      { name: "SEGUNDO LOTE",   price: "R$ 130,00", status: "past" },
      { name: "TERCEIRO LOTE",  price: "R$ 135,00", status: "active" },
      { name: "QUARTO LOTE",    price: "R$ 150,00", status: "upcoming" },
      { name: "QUINTO LOTE",    price: "R$ 160,00", status: "upcoming" },
      { name: "SEXTO LOTE",     price: "R$ 170,00", status: "upcoming" },
      { name: "SÉTIMO LOTE",    price: "R$ 180,00", status: "upcoming" },
      { name: "OITAVO LOTE",    price: "R$ 190,00", status: "upcoming" },
      { name: "NONO LOTE",      price: "R$ 200,00", status: "upcoming" }
    ]
  }
};
