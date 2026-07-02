import { useEffect, useState } from "react"
import Logo from "./Logo.jsx"
import { Icon, WhatsAppIcon } from "../icons.jsx"
import { company, nav, whatsappLink, whatsappMsg } from "../data.js"

const contactBoxes = [
  { icon: "call", label: "Telefone", value: company.landlineDisplay, href: `tel:+${company.landlineRaw}` },
  { icon: "schedule", label: "Atendimento", value: "Seg a Sex: 08h–18h" },
  { icon: "mail", label: "E-mail", value: company.email, href: `mailto:${company.email}` },
]

function IconBox({ icon, label, value, href }) {
  const Tag = href ? "a" : "div"
  const props = href
    ? { href, ...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
    : {}
  return (
    <Tag {...props} className="flex items-center gap-2.5">
      <Icon name={icon} className="shrink-0 text-velocity-red" style={{ fontSize: 26 }} />
      <div className="leading-tight">
        <p className="text-[10.5px] font-semibold uppercase tracking-wide text-white/55">{label}</p>
        <p className="whitespace-nowrap text-[13px] font-bold text-white">{value}</p>
      </div>
    </Tag>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("#top")

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140
      let current = "#top"
      for (const l of nav.links) {
        const el = l.href.startsWith("#") ? document.querySelector(l.href) : null
        if (el && el.offsetTop <= y) current = l.href
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-authority-navy shadow-lg">
      {/* Tier 1 — logo + contatos + orçamento */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-3 lg:px-8 xl:px-16">
          <Logo className="h-11 w-auto" />

          {/* contatos (desktop) */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {contactBoxes.map((b) => (
              <IconBox key={b.label} {...b} />
            ))}
          </div>

          {/* contato rápido + menu (mobile/tablet) */}
          <div className="flex items-center gap-1 lg:hidden">
            <a href={`tel:+${company.landlineRaw}`} aria-label="Ligar" className="grid h-10 w-10 place-items-center rounded-lg text-white hover:text-velocity-red">
              <Icon name="call" />
            </a>
            <a href={whatsappLink(whatsappMsg)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-lg text-white hover:text-velocity-red">
              <Icon name="chat" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white"
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </div>

      {/* Tier 2 — menu de navegação (desktop) */}
      <div className="hidden lg:block">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-2 lg:px-8 xl:px-16">
          <nav className="flex items-center gap-1">
            {nav.links.map((l) => {
              const isActive = active === l.href
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`rounded px-3 py-2 text-sm font-semibold tracking-wide transition-colors ${
                    isActive ? "text-velocity-red" : "text-white hover:text-velocity-red"
                  }`}
                >
                  {l.label}
                </a>
              )
            })}
          </nav>
          <a
            href={whatsappLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-velocity-red px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary-container active:scale-95"
          >
            <WhatsAppIcon size={16} />
            Fale Conosco
          </a>
        </div>
      </div>

      {/* Menu mobile (colapsável) */}
      <div className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "max-h-[680px]" : "max-h-0"}`}>
        <div className="border-t border-white/10 px-5 py-4">
          <nav className="space-y-1">
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 font-semibold text-white hover:bg-white/5 hover:text-velocity-red"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
            {contactBoxes.map((b) => (
              <IconBox key={b.label} {...b} />
            ))}
          </div>
          <a
            href={whatsappLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-velocity-red px-4 py-3 font-bold text-white"
          >
            <WhatsAppIcon size={18} />
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  )
}
