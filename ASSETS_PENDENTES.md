# 📦 Assets Pendentes — Arranca Toco 2026

> Lista de arquivos que precisam ser fornecidos para substituir os placeholders atuais.
> Todos os itens abaixo estão funcionando com placeholders gerados automaticamente.
> Substitua cada um pelo arquivo oficial quando disponível.

---

## 🎨 Logos e Identidade Visual

| Arquivo | Caminho | Formato Recomendado | Dimensões | Status |
|---|---|---|---|---|
| Logo do evento | `public/images/logo-evento.png` | PNG (fundo transparente) | ~800×400px | ⏳ Placeholder |
| Logo Produtora TF | `public/images/logo-tf.png` | PNG (fundo transparente) | ~300×150px | ⏳ Placeholder |
| Logo MGPRD | `public/images/logo-mgprd.png` | PNG (fundo transparente) | ~300×150px | ⏳ Placeholder |
| Favicon | `public/favicon.ico` | ICO | 32×32px | ⏳ Placeholder |
| OG Image (redes sociais) | `public/og-image.jpg` | JPG | 1200×630px | ⏳ Placeholder |

---

## 🎬 Vídeo

| Arquivo | Caminho | Formato | Duração | Status |
|---|---|---|---|---|
| Vídeo hero (fundo) | `public/video/hero-video.mp4` | MP4 (H.264) | 15-30s loop | ❌ Não fornecido |

> **Nota:** Quando o vídeo estiver disponível, coloque-o em `public/video/hero-video.mp4` e altere `useVideo: true` no arquivo `src/js/config.js`.

---

## 🎵 Fotos dos Artistas

### Imagens de "Escondido" (antes do reveal)
Arte com silhueta/mistério do artista para o card antes do reveal.

| Artista | Caminho | Formato | Dimensões | Status |
|---|---|---|---|---|
| Artista 1 | `public/images/artists/artist-1-hidden.png` | PNG | 600×800px | ⏳ Placeholder |
| Artista 2 | `public/images/artists/artist-2-hidden.png` | PNG | 600×800px | ⏳ Placeholder |
| Artista 3 | `public/images/artists/artist-3-hidden.png` | PNG | 600×800px | ⏳ Placeholder |
| Artista 4 | `public/images/artists/artist-4-hidden.png` | PNG | 600×800px | ⏳ Placeholder |
| Artista 5 | `public/images/artists/artist-5-hidden.png` | PNG | 600×800px | ⏳ Placeholder |
| Artista 6 | `public/images/artists/artist-6-hidden.png` | PNG | 600×800px | ⏳ Placeholder |

### Fotos Reveladas (após o reveal)
Foto real do artista para o card após o reveal.

| Artista | Caminho | Formato | Dimensões | Status |
|---|---|---|---|---|
| Artista 1 | `public/images/artists/artist-1-revealed.png` | PNG/JPG | 600×800px | ⏳ Placeholder |
| Artista 2 | `public/images/artists/artist-2-revealed.png` | PNG/JPG | 600×800px | ⏳ Placeholder |
| Artista 3 | `public/images/artists/artist-3-revealed.png` | PNG/JPG | 600×800px | ⏳ Placeholder |
| Artista 4 | `public/images/artists/artist-4-revealed.png` | PNG/JPG | 600×800px | ⏳ Placeholder |
| Artista 5 | `public/images/artists/artist-5-revealed.png` | PNG/JPG | 600×800px | ⏳ Placeholder |
| Artista 6 | `public/images/artists/artist-6-revealed.png` | PNG/JPG | 600×800px | ⏳ Placeholder |

---

## 🖼️ Imagem do Hero (fallback)

| Arquivo | Caminho | Formato | Dimensões | Status |
|---|---|---|---|---|
| Hero fallback | `public/images/fallback-hero.jpg` | JPG | 1920×1080px | ⏳ Placeholder |

---

## 📝 Textos e Dados Pendentes

| Item | Localização no config.js | Status |
|---|---|---|
| Texto de descrição do evento | `CONFIG.event.description` | ⏳ Lorem ipsum |
| Data/hora exata do evento | `CONFIG.event.date` | ⏳ Estimada (15/08/2026 16h) |
| Link do Cheers (compra de ingressos) | `CONFIG.event.cheersLink` | ❌ Não fornecido |
| URL embed do Google Maps | `CONFIG.event.venue.mapsEmbed` | ⏳ Placeholder genérico |
| Nomes dos 6 artistas | `CONFIG.artists[N].name` | ❌ Não definidos |
| Datas de reveal dos artistas | `CONFIG.artists[N].revealDate` | ❌ Não definidas |
| Domínio do site (og:url) | `index.html` meta tag | ⏳ arrancatoco.com.br |

---

## 📋 Como Substituir

1. **Imagens:** Coloque o arquivo no caminho indicado, mantendo o mesmo nome
2. **Textos/dados:** Edite apenas o arquivo `src/js/config.js`
3. **Vídeo:** Coloque em `public/video/hero-video.mp4` e ative no config (`useVideo: true`)

> **Dica:** Após substituir qualquer asset, rode `npm run dev` para verificar localmente antes de fazer deploy.

---

*Gerado automaticamente — Arranca Toco 2026*
*Desenvolvido por [Laroca Dev](https://laroca.dev/)*
