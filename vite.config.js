import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { serviceList, buildServiceJsonLd } from './src/content/services.js'

// JSON-LD por rota (slug -> blocos). Injetado no <head> em tempo de build,
// fora da árvore React (evita o mismatch de hidratação com <script>).
const jsonLdBySlug = Object.fromEntries(
  serviceList.map((s) => [s.slug, buildServiceJsonLd(s)]),
)

export default defineConfig({
  plugins: [react(), tailwindcss()],
  ssgOptions: {
    entry: 'src/main.jsx',
    // /licenciamento-campinas -> dist/licenciamento-campinas.html
    // 'flat' faz a URL sem barra final resolver direto para o arquivo (casa com a
    // canonical e com o host estático). 'nested' exigiria barra final.
    dirStyle: 'flat',
    formatting: 'none',
    onPageRendered(route, html) {
      const slug = route.replace(/^\/+|\/+$/g, '')
      const blocks = jsonLdBySlug[slug]
      if (!blocks?.length) return html
      const tags = blocks
        .map((b) => `<script type="application/ld+json">${JSON.stringify(b)}</script>`)
        .join('')
      return html.replace('</head>', `${tags}</head>`)
    },
  },
})
