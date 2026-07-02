import { Icon } from "../icons.jsx"
import { Reveal } from "./ui.jsx"
import { features } from "../data.js"

export default function Features() {
  return (
    <section className="bg-authority-navy py-16">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-5 text-on-primary md:grid-cols-3 md:px-16">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.1}>
            <div className="flex h-full flex-col items-center rounded-xl border border-white/10 p-8 text-center transition-colors hover:bg-white/5">
              {f.big ? (
                <span className="font-display mb-4 text-[44px] font-extrabold leading-none text-velocity-red md:text-[56px]">
                  {f.big}
                </span>
              ) : (
                <Icon name={f.icon} fill className="mb-4 text-velocity-red" style={{ fontSize: 48 }} />
              )}
              <h3 className="font-display mb-2 text-[24px] font-bold">{f.title}</h3>
              <p className="text-base text-surface-variant">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
