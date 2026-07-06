import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"

// Casca compartilhada por todas as rotas. O conteúdo de cada página entra no
// <Outlet />.
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
