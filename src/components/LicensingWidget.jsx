import { useMemo, useState } from "react"
import { Icon } from "../icons.jsx"
import { licensing, whatsappLink } from "../data.js"

const DIGITS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

function daysUntil(iso) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(iso + "T00:00:00")
  return Math.ceil((target - today) / 86400000)
}

function status(days) {
  if (days < 0) return { tone: "bg-red-100 text-red-700", label: "Vencido — regularize já!" }
  if (days <= 7) return { tone: "bg-red-100 text-red-700", label: `Urgente • faltam ${days} dias` }
  if (days <= 30) return { tone: "bg-amber-100 text-amber-700", label: `Atenção • faltam ${days} dias` }
  return { tone: "bg-emerald-100 text-emerald-700", label: `No prazo • faltam ${days} dias` }
}

export default function LicensingWidget() {
  const [cat, setCat] = useState(0)
  const [digit, setDigit] = useState(null)

  // Ano detectado dinamicamente (rola sozinho a cada virada de ano).
  const year = new Date().getFullYear()

  const category = licensing.categories[cat]
  const result = useMemo(() => {
    if (digit == null) return null
    const m = licensing.months[category.map[digit]]
    const iso = `${year}-${m.mm}-${m.dd}`
    return { name: m.name, date: `${m.dd}/${m.mm}/${year}`, iso, days: daysUntil(iso) }
  }, [cat, digit, category, year])

  const st = result ? status(result.days) : null

  return (
    <div className="anim-fade-up mx-auto w-full max-w-[440px] rounded-2xl bg-white p-6 text-authority-navy shadow-2xl ring-1 ring-black/5 sm:p-7" style={{ animationDelay: "0.15s" }}>
      {/* Cabeçalho */}
      <div className="flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-velocity-red text-white">
          <Icon name="event" style={{ fontSize: 20 }} />
        </span>
        <div className="leading-tight">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-gray">{licensing.source}</p>
          <h3 className="font-display text-[17px] font-bold">Calendário de Licenciamento {year}</h3>
        </div>
      </div>

      {/* Categoria */}
      <div className="mt-5 grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
        {licensing.categories.map((c, i) => (
          <button
            key={c.key}
            onClick={() => setCat(i)}
            className={`rounded-lg px-3 py-2 text-sm font-bold transition-colors ${
              cat === i ? "bg-authority-navy text-white shadow" : "text-slate-gray hover:text-authority-navy"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <p className="mt-1.5 text-center text-[11px] text-slate-gray">{category.hint}</p>

      {/* Final da placa */}
      <p className="mt-4 text-sm font-semibold">Qual o final da sua placa?</p>
      <div className="mt-2 grid grid-cols-5 gap-2">
        {DIGITS.map((d) => (
          <button
            key={d}
            onClick={() => setDigit(d)}
            aria-pressed={digit === d}
            className={`aspect-square rounded-lg text-lg font-bold transition-all ${
              digit === d
                ? "scale-105 bg-velocity-red text-white shadow-lg"
                : "bg-slate-100 text-authority-navy hover:bg-slate-200"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Resultado */}
      <div className="mt-5 rounded-xl bg-authority-navy p-5 text-white">
        {result ? (
          <div key={`${cat}-${digit}`} className="anim-zoom-in text-center">
            <p className="text-xs uppercase tracking-wide text-white/60">
              Final {digit} • {category.label} — vence em
            </p>
            <p className="font-display mt-1 text-3xl font-extrabold leading-none text-white">
              {result.name}
              <span className="text-velocity-red">.</span>
            </p>
            <p className="mt-1 text-sm text-white/70">até {result.date}</p>
            <span className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-bold ${st.tone}`}>{st.label}</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 py-3 text-center text-sm text-white/70">
            <Icon name="touch_app" style={{ fontSize: 20 }} />
            Selecione o final da placa para ver o prazo
          </div>
        )}
      </div>

      {/* CTA — já leva o final da placa + intenção de licenciar pro WhatsApp */}
      <a
        href={whatsappLink(
          result
            ? `Olá! Vim pelo site da Winner e quero licenciar meu veículo. Final da placa: ${digit} (${category.label}). Vencimento: ${result.name}/${year}. Podem me ajudar a regularizar?`
            : "Olá! Vim pelo site da Winner e quero licenciar meu veículo. Podem me ajudar a regularizar?"
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-velocity-red px-5 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
      >
        <Icon name="chat" fill style={{ fontSize: 18 }} />
        Regularizar com a Winner
      </a>
      <p className="mt-3 text-center text-xs text-slate-gray">
        Confira o <span className="font-semibold text-authority-navy">valor atualizado</span> da taxa e regularize com a gente.
      </p>
    </div>
  )
}
