import { hero, whatsappLink, whatsappMsg } from "../data.js"
import LicensingWidget from "./LicensingWidget.jsx"

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-velocity-red py-16 md:py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-6 px-5 md:grid-cols-2 md:px-16">
        <div className="anim-fade-up z-10 text-center md:text-left">
          <h1 className="font-display text-[36px] font-extrabold leading-[1.1] tracking-tight text-on-primary md:text-[56px]">
            {hero.title}
          </h1>
          <p className="mx-auto mt-8 max-w-lg text-[18px] leading-relaxed text-on-primary/90 md:mx-0">
            {hero.subtitle}
          </p>
          <a
            href={whatsappLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-lg bg-authority-navy px-10 py-5 text-sm font-bold tracking-wide text-on-primary shadow-xl transition-transform hover:scale-105"
          >
            {hero.cta}
          </a>
        </div>

        <div className="relative z-10">
          <LicensingWidget />
        </div>
      </div>
    </section>
  )
}
