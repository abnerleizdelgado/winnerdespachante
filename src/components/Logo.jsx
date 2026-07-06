import { Link } from "react-router-dom"

// Logo da Winner Despachante (imagem sobre fundo navy). Leva sempre à home,
// de qualquer página (navegação SPA via react-router).
export default function Logo({ className = "h-12 w-auto" }) {
  return (
    <Link to="/" aria-label="Winner Despachante — início" className="flex items-center">
      <img src="/img/logo-winner.png" alt="Winner Despachante" className={className} />
    </Link>
  )
}
