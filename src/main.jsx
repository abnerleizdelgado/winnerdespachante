import { ViteReactSSG } from "vite-react-ssg"
import { routes } from "./routes.jsx"
import "./index.css"

// Entry de SSG (vite-react-ssg). Gera o HTML de cada rota no build e hidrata no
// cliente. O <div id="root"> passa a sair preenchido com conteúdo real.
export const createRoot = ViteReactSSG({ routes })
