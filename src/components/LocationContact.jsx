import { Icon } from "../icons.jsx"
import { Reveal } from "./ui.jsx"
import { company, location, whatsappLink, whatsappMsg } from "../data.js"

function Info({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <Icon name={icon} className="mt-1 text-velocity-red" />
      <div>
        <h4 className="font-bold text-authority-navy">{title}</h4>
        {children}
      </div>
    </div>
  )
}

export default function LocationContact() {
  return (
    <section id="contato" className="bg-surface-container-low py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-16">
        <Reveal>
          <div className="space-y-8">
            <h2 className="font-display text-[32px] font-bold text-authority-navy">{location.title}</h2>

            <div className="space-y-6">
              <Info icon="location_on" title={location.addressTitle}>
                <p className="text-slate-gray">
                  {company.address1}
                  <br />
                  {company.address2}
                </p>
              </Info>

              <Info icon="call" title={location.contactsTitle}>
                <p className="text-slate-gray">{company.landlineDisplay}</p>
                <p className="text-slate-gray">{company.phoneDisplay}</p>
                <p className="text-slate-gray">{company.email}</p>
              </Info>

              <Info icon="schedule" title={location.hoursTitle}>
                <p className="text-slate-gray">{company.hours}</p>
                <p className="text-slate-gray">{company.hoursSat}</p>
              </Info>
            </div>

            <div className="pt-4">
              <a
                href={whatsappLink(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg bg-velocity-red px-8 py-4 font-bold text-on-primary transition-shadow hover:shadow-xl"
              >
                <Icon name="chat" fill />
                {location.cta}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-[400px] overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
            <iframe
              title="Mapa de localização da Winner Despachante"
              src={company.mapEmbed}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
