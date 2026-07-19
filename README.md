# 🎉 Arranca Toco 2026 — 25 Anos

![Arranca Toco 2026](public/og-image.jpg)

> **O Maior Open Bar dos Campos Gerais.**
> Eng. Civil UEPG — 5° Ano · 15 de Agosto · Centro de Eventos · Ponta Grossa — PR

---

## 📋 Sobre o Projeto

Site oficial de apresentação do evento **Arranca Toco 2026**, o maior open bar universitário dos Campos Gerais, promovido pelos formandos de Engenharia Civil da UEPG.

Landing page single-page com experiência visual imersiva: countdown regressivo, reveal progressivo de artistas com flip CSS 3D, seção de ingressos com lotes dinâmicos, e design premium inspirado em grandes festivais.

---

## 🛠️ Stack Tecnológica

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

- **Build tool:** Vite (vanilla JS — sem frameworks)
- **Linguagens:** HTML5, CSS3 (Custom Properties), JavaScript ES6+
- **Fontes:** Google Fonts — Bebas Neue, Rajdhani, Inter
- **Ícones:** SVG inline
- **Mapas:** Google Maps iframe embed
- **Deploy:** Cloudflare Pages

---

## 📁 Estrutura do Projeto

```
arranca-toco-2026/
│
├── index.html                    ← Única página HTML
├── vite.config.js                ← Configuração do Vite
├── package.json
├── .gitignore
├── README.md
│
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg
│   ├── video/
│   │   └── hero-video.mp4        ← Vídeo do hero (quando disponível)
│   └── images/
│       ├── fallback-hero.jpg
│       ├── logo-evento.png
│       ├── logo-tf.png
│       ├── logo-mgprd.png
│       └── artists/
│           ├── artist-N-hidden.png
│           └── artist-N-revealed.png
│
└── src/
    ├── css/
    │   ├── variables.css         ← Design tokens
    │   ├── global.css            ← Reset e utilitários
    │   ├── hero.css
    │   ├── about.css
    │   ├── location.css
    │   ├── artists.css
    │   ├── tickets.css
    │   ├── footer.css
    │   └── floating-btn.css
    │
    └── js/
        ├── config.js             ← ARQUIVO MESTRE (único a editar)
        ├── main.js               ← Entry point
        ├── hero.js
        ├── about.js
        ├── location.js
        ├── artists.js
        ├── tickets.js
        ├── footer.js
        └── floating-btn.js
```

---

## 🚀 Como Rodar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/LarocaLucas/arrancatoco.git
cd arrancatoco

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# O site abrirá em http://localhost:3000
```

---

## 📦 Build para Produção

```bash
npm run build     # Gera a pasta dist/
npm run preview   # Preview do build
```

---

## ⚙️ Como Atualizar Dados (config.js)

O arquivo `src/js/config.js` é o **único arquivo que precisa ser editado** para atualizações do site.

### Revelar um Artista

```javascript
// Antes:
{ id: 1, name: "???", revealDate: null, isRevealed: false, ... }

// Opção 1: Reveal por data (countdown automático)
{ id: 1, name: "MC Exemplo", revealDate: "2026-07-01T20:00:00", isRevealed: false, ... }

// Opção 2: Reveal manual imediato
{ id: 1, name: "MC Exemplo", revealDate: null, isRevealed: true, ... }
```

### Mudar Status de um Lote

```javascript
// Encerrar o lote atual e abrir o próximo:
{ name: "LOTE RELÂMPAGO", price: "R$ 70,00",  status: "past" },    // Era "active"
{ name: "PRIMEIRO LOTE",  price: "R$ 80,00",  status: "active" },  // Era "upcoming"
```

### Ativar o Vídeo do Hero

```javascript
hero: {
  useVideo: true,  // Mude para true
  videoSrc: "/video/hero-video.mp4",  // Coloque o arquivo neste caminho
  ...
}
```

---

## 🔗 Como Trocar Imagens

1. Substitua o arquivo no caminho correspondente em `public/images/`
2. Mantenha o **mesmo nome de arquivo** ou atualize o caminho no `config.js`
3. Formatos recomendados: PNG para logos (transparência), JPG para fotos

---

## 🌐 Deploy — Cloudflare Pages

### Passo a Passo:

1. **Push para o GitHub:**
   ```bash
   git add .
   git commit -m "feat: atualização do site"
   git push origin main
   ```

2. **Cloudflare Pages:**
   - Acesse [Cloudflare Pages](https://pages.cloudflare.com/)
   - Conecte o repositório GitHub
   - Configurações de build:
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - **Node.js version:** 18+
   - Deploy automático a cada push na branch `main`

---

## ✅ TODO List

- [x] Substituir logo placeholder pelo logo oficial do evento
- [x] Substituir logos das produtoras (TF e MGPRD) pelos oficiais
- [x] Adicionar fotos reais dos artistas (Atualização contínua via admin)
- [x] Adicionar vídeo do hero (`public/video/hero-video.mp4`)
- [x] Substituir texto de descrição do evento pelo oficial
- [x] Definir link do Cheers para compra de ingressos
- [x] Definir datas de reveal dos artistas (Sendo revelados manualmente sob demanda)
- [x] Confirmar data/hora exata do evento
- [x] Gerar embed URL do Google Maps com localização exata
- [x] Configurar domínio personalizado (arrancatocopg.com.br)
- [x] Substituir OG Image pelo material oficial

---

## 👤 Créditos

Desenvolvido por **[Laroca Dev](https://laroca.dev/)**

Evento organizado por **Eng. Civil UEPG — 5° Ano**

Produção: **Produtora TF** & **MGPRD Produções & Eventos**

---

*Castro, PR, Brasil — 2026*
