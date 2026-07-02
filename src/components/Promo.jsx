import { Reveal } from "./ui.jsx"
import { promo } from "../data.js"

export default function Promo() {
  return (
    <section className="relative overflow-hidden bg-authority-navy py-24">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/img/promo-bg.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-16">
        <Reveal>
          <div className="max-w-4xl rounded-2xl border border-white/10 bg-velocity-red p-12 shadow-2xl md:p-16">
            <h2 className="font-display text-[36px] font-extrabold leading-tight text-on-primary md:text-[40px]">
              {promo.title}
            </h2>
            <p className="mb-8 mt-6 text-[18px] leading-relaxed text-on-primary">
              {promo.textPre}
              <span className="font-bold italic">{promo.brand}</span>
              {promo.textPost}
            </p>
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
              <div className="rounded-xl bg-on-primary px-8 py-6 text-[24px] font-black text-velocity-red">
                {promo.badge}
              </div>
              <p className="text-sm font-semibold tracking-wide text-on-primary/90">{promo.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
