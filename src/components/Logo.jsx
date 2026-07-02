// Logo da Winner Despachante (imagem sobre fundo navy).
export default function Logo({ className = "h-12 w-auto" }) {
  return (
    <a href="#top" aria-label="Winner Despachante — início" className="flex items-center">
      <img src="/img/logo-winner.png" alt="Winner Despachante" className={className} />
    </a>
  )
}
