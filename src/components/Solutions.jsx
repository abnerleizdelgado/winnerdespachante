import { useCallback, useEffect, useRef, useState } from "react"
import { Icon } from "../icons.jsx"
import { Reveal } from "./ui.jsx"
import { solutions } from "../data.js"

function getVisible() {
  if (typeof window === "undefined") return 3
  if (window.innerWidth >= 1024) return 3
  if (window.innerWidth >= 768) return 2
  return 1
}

export default function Solutions() {
  const slides = solutions.slides
  const [visible, setVisible] = useState(getVisible)
  const [index, setIndex] = useState(0)
  const [zoomed, setZoomed] = useState(null) // slide ampliado (lightbox) ou null
  const timer = useRef(null)

  const maxIndex = Math.max(0, slides.length - visible)
  const totalDots = maxIndex + 1

  const go = useCallback(
    (next) => {
      setIndex(() => {
        if (next > maxIndex) return 0
        if (next < 0) return maxIndex
        return next
      })
    },
    [maxIndex]
  )

  const startTimer = useCallback(() => {
    clearInterval(timer.current)
    if (zoomed) return // não roda enquanto a imagem está ampliada
    timer.current = setInterval(() => setIndex((c) => (c >= maxIndex ? 0 : c + 1)), 5000)
  }, [maxIndex, zoomed])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timer.current)
  }, [startTimer])

  // Responsivo
  useEffect(() => {
    const onResize = () => {
      setVisible(getVisible())
      setIndex(0)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  // Esc fecha o lightbox
  useEffect(() => {
    if (!zoomed) return
    const onKey = (e) => e.key === "Escape" && setZoomed(null)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [zoomed])

  const slideWidth = 100 / visible

  return (
    <section id="solucoes" className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="font-display text-[28px] font-bold text-authority-navy md:text-[32px]">
              {solutions.title}
            </h2>
            <p className="mt-2 text-slate-gray">{solutions.sub}</p>
          </div>
        </Reveal>

        <div
          className="group relative"
          onMouseEnter={() => clearInterval(timer.current)}
          onMouseLeave={startTimer}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${index * slideWidth}%)` }}
            >
              {slides.map((s) => (
                <div key={s.src} className="shrink-0 px-3" style={{ flexBasis: `${slideWidth}%` }}>
                  <button
                    type="button"
                    onClick={() => setZoomed(s)}
                    className="block h-[400px] w-full cursor-zoom-in overflow-hidden rounded-xl border border-authority-navy/10 bg-authority-navy shadow-md transition-transform duration-300 hover:-translate-y-1"
                    aria-label={`Ampliar: ${s.alt}`}
                  >
                    <img src={s.src} alt={s.alt} className="h-full w-full object-contain" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Controles */}
          <button
            onClick={() => {
              go(index - 1)
              startTimer()
            }}
            className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 rounded-full bg-authority-navy p-3 text-on-primary opacity-0 shadow-lg transition-all duration-300 hover:bg-velocity-red group-hover:translate-x-2 group-hover:opacity-100"
            aria-label="Anterior"
          >
            <Icon name="chevron_left" />
          </button>
          <button
            onClick={() => {
              go(index + 1)
              startTimer()
            }}
            className="absolute right-0 top-1/2 z-10 translate-x-4 -translate-y-1/2 rounded-full bg-authority-navy p-3 text-on-primary opacity-0 shadow-lg transition-all duration-300 hover:bg-velocity-red group-hover:-translate-x-2 group-hover:opacity-100"
            aria-label="Próximo"
          >
            <Icon name="chevron_right" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIndex(i)
                  startTimer()
                }}
                aria-label={`Ir para slide ${i + 1}`}
                className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                  i === index ? "bg-velocity-red" : "bg-authority-navy/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox: clique fora (no fundo) fecha e o carrossel volta a rodar */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[60] flex cursor-zoom-out items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setZoomed(null)}
          role="dialog"
          aria-modal="true"
          aria-label={zoomed.alt}
        >
          <button
            type="button"
            onClick={() => setZoomed(null)}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-velocity-red"
            aria-label="Fechar"
          >
            <Icon name="close" />
          </button>
          <img
            src={zoomed.src}
            alt={zoomed.alt}
            onClick={(e) => e.stopPropagation()}
            className="anim-zoom-in max-h-[90vh] max-w-[92vw] cursor-default rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  )
}
