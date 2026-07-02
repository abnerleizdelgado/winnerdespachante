import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Features from "./components/Features.jsx"
import Services from "./components/Services.jsx"
import Promo from "./components/Promo.jsx"
import Solutions from "./components/Solutions.jsx"
import LocationContact from "./components/LocationContact.jsx"
import Footer from "./components/Footer.jsx"
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Promo />
        <Solutions />
        <LocationContact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
