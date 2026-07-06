import { Head } from "vite-react-ssg"

// SEO por rota: title/description/canonical/OG/Twitter (via react-helmet-async).
// O JSON-LD NÃO é renderizado aqui — ele é injetado no <head> em tempo de build
// pelo hook onPageRendered (vite.config.js), pois <script> na árvore React quebra
// a hidratação no beta atual do vite-react-ssg. O que é global (fontes, favicon,
// geo, JSON-LD do negócio) fica no index.html.
const SITE = "https://winnerdespachante.com.br"
const DEFAULT_IMAGE = `${SITE}/og-image.png`
const DEFAULT_DESC =
  "Despachante em Campinas há 29 anos. Licenciamento, transferência, primeiro emplacamento, placa Mercosul, vistoria e regularização veicular com agilidade. Parcele em até 12x no cartão."

function absolute(url) {
  if (!url) return undefined
  return url.startsWith("http") ? url : `${SITE}${url.startsWith("/") ? "" : "/"}${url}`
}

export default function Seo({ title, description = DEFAULT_DESC, canonical, image = DEFAULT_IMAGE }) {
  const url = absolute(canonical)
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}

      <meta property="og:site_name" content="Winner Despachante" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
