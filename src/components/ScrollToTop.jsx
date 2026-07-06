import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// Ao trocar de rota (SPA), volta o scroll ao topo — exceto quando a URL tem
// âncora (#servicos etc.), caso em que deixamos o browser rolar até a seção.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
