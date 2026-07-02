# Winner Despachante — Landing Page

Landing page de alta conversão para a **Winner Despachante** (despachante de
documentação veicular em Campinas/SP — *"O Campeão de Campinas"*).

O design segue o projeto criado no **Google Stitch** (design system *"Velocity
Authority"*): tema claro, **vermelho Velocity `#ED1C24` + Navy Authority `#000B26`**,
tipografia **Montserrat** (títulos) + **Hanken Grotesk** (texto), ícones **Material
Symbols** e cantos suaves — estética corporativa/automotiva.

## Stack
- **Vite 6** + **React 18**
- **Tailwind CSS v4** (plugin `@tailwindcss/vite`)
- Animações em **CSS puro** (entrada + reveal-on-scroll robusto, sem libs de runtime)
- Fontes Google: **Montserrat** + **Hanken Grotesk** + **Material Symbols Outlined**

## Como rodar

```bash
npm install      # instala dependências
npm run dev      # desenvolvimento (http://localhost:5173)
npm run build    # build de produção em /dist
npm run preview  # pré-visualiza o build (http://localhost:4173)
```

## Estrutura

```
src/
├─ main.jsx                  # entrada React
├─ App.jsx                   # composição das seções
├─ index.css                # design system (tokens, animações, Material Symbols)
├─ data.js                  # ⬅️ TODO o conteúdo/dados ficam aqui
├─ icons.jsx                # <Icon> via Material Symbols
└─ components/
   ├─ Navbar.jsx            # menu fixo navy + mobile
   ├─ Hero.jsx              # destaque vermelho + carro
   ├─ Features.jsx          # 29 Anos / Rapidez / 12x
   ├─ Services.jsx          # 6 serviços (cards vermelhos)
   ├─ Promo.jsx             # "Aproveite mais seu tempo!"
   ├─ Solutions.jsx         # carrossel "Soluções Completas"
   ├─ LocationContact.jsx   # endereço, contatos, mapa
   ├─ Footer.jsx            # rodapé navy
   ├─ FloatingWhatsApp.jsx
   ├─ Logo.jsx
   └─ ui.jsx                # Reveal, SectionTitle
```

## Personalização rápida

Quase tudo é controlado por **`src/data.js`**: dados da empresa (`company`),
serviços, features, slides do carrossel, contato e rodapé.

Cores/tema: tokens `@theme` em **`src/index.css`**.

Imagens: em **`public/img/`** (logo, carro do hero, banners do carrossel, mapa).

## Validação visual

`scripts/shot.mjs` tira screenshots via Edge instalado (playwright-core, dev):

```bash
node scripts/shot.mjs http://localhost:4173/ val
```

## Observações
- **Contatos** (`data.js`): WhatsApp **(19) 99311-1640**, fixo **(19) 3291-3494**,
  e-mail **winner@winnerdespachante.com.br**, CNPJ **65.754.648/0001-07** — informados
  pelo cliente. (O site antigo exibia outros números; ajuste em `data.js` se necessário.)
- O endereço, horário e "29 anos" vieram do design do Stitch/site atual.
