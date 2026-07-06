import { Link } from "react-router-dom"
import Seo from "../components/Seo.jsx"
import { Icon } from "../icons.jsx"
import { Reveal, SectionTitle } from "../components/ui.jsx"
import { whatsappLink, whatsappMsg } from "../data.js"
import { serviceBySlug } from "../content/services.js"

export default function ServicePage({ service }) {
  const wpp = whatsappLink(`${whatsappMsg} Serviço: ${service.breadcrumb}.`)
  const related = (service.related || [])
    .map((slug) => serviceBySlug[slug])
    .filter(Boolean)

  return (
    <>
      <Seo
        title={service.title}
        description={service.metaDescription}
        canonical={`/${service.slug}`}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-velocity-red py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <nav aria-label="Trilha" className="mb-5 text-sm text-on-primary/70">
            <Link to="/" className="hover:text-on-primary">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-on-primary">{service.breadcrumb}</span>
          </nav>
          <h1 className="max-w-3xl font-display text-[32px] font-extrabold leading-[1.1] tracking-tight text-on-primary md:text-[48px]">
            {service.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-on-primary/90">
            {service.hero}
          </p>
          <a
            href={wpp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-authority-navy px-8 py-4 text-sm font-bold tracking-wide text-on-primary shadow-xl transition-transform hover:scale-105"
          >
            FALAR COM UM DESPACHANTE
          </a>
        </div>
      </section>

      {/* Introdução */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          {service.intro.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="mb-6 text-[17px] leading-relaxed text-slate-gray">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Documentos + Passo a passo */}
      <section className="bg-ghost-white py-16 md:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:grid-cols-2 md:px-16">
          <Reveal>
            <div>
              <h2 className="font-display text-[24px] font-bold text-authority-navy md:text-[28px]">
                Documentos necessários
              </h2>
              <div className="mt-4 h-1 w-16 bg-velocity-red" />
              <ul className="mt-8 space-y-4">
                {service.documents.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <Icon name="check_circle" className="shrink-0 text-velocity-red" style={{ fontSize: 24 }} />
                    <span className="text-[16px] text-slate-gray">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h2 className="font-display text-[24px] font-bold text-authority-navy md:text-[28px]">
                Como funciona, passo a passo
              </h2>
              <div className="mt-4 h-1 w-16 bg-velocity-red" />
              <ol className="mt-8 space-y-6">
                {service.steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-velocity-red font-display text-sm font-bold text-on-primary">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[17px] font-bold text-authority-navy">{s.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-slate-gray">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prazo */}
      {service.deadline && (
        <section className="bg-white py-14">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <div className="flex items-start gap-4 rounded-xl border border-authority-navy/10 bg-ghost-white p-6 md:p-8">
              <Icon name="event" className="shrink-0 text-velocity-red" style={{ fontSize: 30 }} />
              <div>
                <h2 className="font-display text-[18px] font-bold text-authority-navy">Prazo</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-gray">{service.deadline}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faq?.length > 0 && (
        <section className="bg-ghost-white py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <Reveal>
              <SectionTitle>Perguntas frequentes</SectionTitle>
            </Reveal>
            <div className="mt-12 space-y-4">
              {service.faq.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-authority-navy/10 bg-white p-5 md:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[16px] font-bold text-authority-navy md:text-[17px]">
                    {f.q}
                    <Icon
                      name="expand_more"
                      className="shrink-0 text-velocity-red transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-gray">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="bg-velocity-red py-16">
        <div className="mx-auto max-w-[1280px] px-5 text-center md:px-16">
          <h2 className="font-display text-[26px] font-extrabold text-on-primary md:text-[32px]">
            Resolva o seu {service.breadcrumb.toLowerCase()} com quem entende
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-on-primary/90">
            Agilidade, confiança e parcelamento em até 12x no cartão. Fale agora com a Winner Despachante.
          </p>
          <a
            href={wpp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-authority-navy px-10 py-5 text-sm font-bold tracking-wide text-on-primary shadow-xl transition-transform hover:scale-105"
          >
            CHAMAR NO WHATSAPP
          </a>
        </div>
      </section>

      {/* Serviços relacionados */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <h2 className="font-display text-[20px] font-bold text-authority-navy">Outros serviços</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/${r.slug}`}
                className="rounded-full border border-authority-navy/15 px-5 py-2.5 text-sm font-semibold text-authority-navy transition-colors hover:border-velocity-red hover:text-velocity-red"
              >
                {r.breadcrumb}
              </Link>
            ))}
            <a
              href="/#servicos"
              className="rounded-full border border-authority-navy/15 px-5 py-2.5 text-sm font-semibold text-authority-navy transition-colors hover:border-velocity-red hover:text-velocity-red"
            >
              Ver todos os serviços
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
