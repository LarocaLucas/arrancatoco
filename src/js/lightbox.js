import { CONFIG } from './config.js';

let currentArtistId = null;

export const initLightbox = () => {
  const lightbox = document.getElementById('lightbox');
  const overlay = document.getElementById('lightboxOverlay');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const imgEl = document.getElementById('lightboxImg');
  const captionEl = document.getElementById('lightboxCaption');
  const grid = document.getElementById('artistsGrid');

  if (!lightbox || !grid) return;

  // Helpers para encontrar artistas revelados
  const getRevealedArtists = () => {
    return CONFIG.artists.filter(artist => {
      if (artist.isRevealed) return true;
      if (artist.revealDate) return new Date(artist.revealDate) <= new Date();
      return false;
    });
  };

  const openLightbox = (artistId) => {
    const revealed = getRevealedArtists();
    const artistIndex = revealed.findIndex(a => a.id === artistId);
    
    if (artistIndex === -1) return;
    
    const artist = revealed[artistIndex];
    currentArtistId = artistId;
    
    // Set image and caption
    imgEl.src = artist.revealedImage;
    imgEl.alt = artist.altRevealed;
    captionEl.textContent = artist.name;

    // Show/hide arrows based on total revealed
    if (revealed.length <= 1) {
      prevBtn.classList.add('lightbox__nav--hidden');
      nextBtn.classList.add('lightbox__nav--hidden');
    } else {
      prevBtn.classList.remove('lightbox__nav--hidden');
      nextBtn.classList.remove('lightbox__nav--hidden');
    }

    // Show lightbox
    lightbox.classList.remove('lightbox--hidden');
    document.body.style.overflow = 'hidden'; // Prevent scroll
  };

  const closeLightbox = () => {
    lightbox.classList.add('lightbox--hidden');
    document.body.style.overflow = '';
    currentArtistId = null;
    setTimeout(() => { imgEl.src = ''; }, 300); // Clear image after transition
  };

  const navigate = (direction) => {
    if (!currentArtistId) return;
    const revealed = getRevealedArtists();
    if (revealed.length <= 1) return;

    const currentIndex = revealed.findIndex(a => a.id === currentArtistId);
    let nextIndex = currentIndex + direction;

    if (nextIndex < 0) nextIndex = revealed.length - 1;
    if (nextIndex >= revealed.length) nextIndex = 0;

    openLightbox(revealed[nextIndex].id);
  };

  // Event Listeners
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.artist-card--revealed');
    if (card) {
      const id = parseInt(card.getAttribute('data-artist-id'), 10);
      openLightbox(id);
    }
  });

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', closeLightbox);
  
  prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn.addEventListener('click', () => navigate(1));

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('lightbox--hidden')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });

  // Swipe navigation (Touch events)
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  const handleSwipe = () => {
    const swipeThreshold = 50; // pixels
    if (touchEndX < touchStartX - swipeThreshold) {
      navigate(1); // Swipe left -> Next
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      navigate(-1); // Swipe right -> Prev
    }
  };
};
