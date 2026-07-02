import { WhatsAppIcon } from "../icons.jsx"
import { whatsappLink, whatsappMsg } from "../data.js"

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(whatsappMsg)}
      target="_blank"
      rel="noopener noreferrer"
      className="anim-pop fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-2xl shadow-emerald-500/40 transition-transform hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <span className="anim-ping absolute inset-0 -z-10 rounded-full bg-emerald-400/40" />
      <WhatsAppIcon size={30} />
    </a>
  )
}
