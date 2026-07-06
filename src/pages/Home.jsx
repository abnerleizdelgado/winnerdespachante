import Seo from "../components/Seo.jsx"
import Hero from "../components/Hero.jsx"
import Features from "../components/Features.jsx"
import Services from "../components/Services.jsx"
import Promo from "../components/Promo.jsx"
import Solutions from "../components/Solutions.jsx"
import LocationContact from "../components/LocationContact.jsx"

export default function Home() {
  return (
    <>
      <Seo
        title="Despachante em Campinas | Licenciamento, Transferência e Emplacamento | Winner Despachante"
        canonical="/"
      />
      <Hero />
      <Features />
      <Services />
      <Promo />
      <Solutions />
      <LocationContact />
    </>
  )
}
