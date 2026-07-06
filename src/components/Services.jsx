import { Link } from "react-router-dom"
import { Icon } from "../icons.jsx"
import { Reveal, SectionTitle } from "./ui.jsx"
import { services, whatsappLink, whatsappMsg } from "../data.js"

export default function Services() {
  return (
    <section id="servicos" className="bg-ghost-white py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16">
        <Reveal>
          <SectionTitle>{services.title}</SectionTitle>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <Link
                to={`/${item.slug}`}
                className="flex h-full flex-col justify-between rounded-xl bg-velocity-red p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div>
                  <Icon name={item.icon} className="mb-6 text-on-primary" style={{ fontSize: 48 }} />
                  <h4 className="font-display text-[24px] font-bold text-on-primary">{item.title}</h4>
                </div>
                <span className="mt-8 flex items-center text-sm font-semibold tracking-wide text-on-primary/80">
                  {services.more}
                  <Icon name="chevron_right" className="ml-2" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <a
              href={whatsappLink(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-velocity-red px-8 py-4 text-sm font-bold tracking-wide text-on-primary transition-all hover:shadow-lg"
            >
              {services.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
