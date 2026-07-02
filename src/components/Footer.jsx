import { Icon } from "../icons.jsx"
import { company, footer, whatsappLink, whatsappMsg } from "../data.js"

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-authority-navy pb-8 pt-16">
      <div className="mx-auto mb-16 grid max-w-[1280px] grid-cols-1 gap-8 px-5 md:grid-cols-4 md:px-16">
        <div className="md:col-span-2">
          <img src="/img/logo-winner.png" alt="Winner Despachante" className="mb-6 h-10 w-auto" />
          <p className="mb-6 max-w-sm text-base text-surface-variant">{footer.about}</p>
          <div className="flex gap-4">
            <a
              href={whatsappLink(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-on-primary transition-colors hover:bg-velocity-red"
            >
              <Icon name="chat" fill className="text-xl" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display mb-6 text-[24px] font-bold text-on-primary">{footer.linksTitle}</h4>
          <ul className="space-y-4">
            {footer.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-xs text-surface-variant transition-colors hover:text-on-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display mb-6 text-[24px] font-bold text-on-primary">{footer.servicesTitle}</h4>
          <ul className="space-y-4">
            {footer.services.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-xs text-surface-variant transition-colors hover:text-on-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] border-t border-white/5 px-5 pt-8 text-center md:px-16 md:text-left">
        <p className="text-xs text-surface-variant">
          {footer.copyright} CNPJ {company.cnpj}.
        </p>
      </div>
    </footer>
  )
}
