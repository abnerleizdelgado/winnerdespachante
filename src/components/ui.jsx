import { useEffect, useRef, useState } from "react"

// Reveal: fade + sobe ao entrar na viewport. Robusto — um safety-timeout garante
// que o conteúdo SEMPRE apareça, mesmo se o IntersectionObserver não disparar.
export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    )
    io.observe(el)
    const safety = setTimeout(() => setShown(true), 1500)
    return () => {
      io.disconnect()
      clearTimeout(safety)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal${shown ? " in" : ""}${className ? " " + className : ""}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}

// Título de seção: headline navy + sublinhado vermelho central.
export function SectionTitle({ children, underline = true, className = "" }) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-display text-[28px] font-bold leading-tight text-authority-navy md:text-[32px]">
        {children}
      </h2>
      {underline && <div className="mx-auto mt-4 h-1 w-20 bg-velocity-red" />}
    </div>
  )
}
