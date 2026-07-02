// Remove fundo sólido de uma imagem, deixando transparente.
// Uso: node scripts/strip-bg.mjs <img/arquivo.png> <flood|global> <tolerancia>
//   flood  = flood-fill a partir das bordas (preserva regiões internas da mesma cor)
//   global = remove TODOS os pixels próximos à cor do canto (use quando o conteúdo não tem essa cor)
import { chromium } from "playwright-core"
import { writeFile } from "node:fs/promises"

const file = process.argv[2]
const mode = process.argv[3] || "flood"
const tol = Number(process.argv[4] || 70)
if (!file) {
  console.error("informe o arquivo (ex.: img/hero-car.png)")
  process.exit(1)
}

const browser = await chromium.launch({ channel: "msedge", headless: true })
const page = await browser.newPage()
await page.goto(`http://localhost:4173/${file}`, { waitUntil: "load" })

const result = await page.evaluate(
  async ({ mode, tol }) => {
    const img = document.querySelector("img")
    await img.decode()
    const w = img.naturalWidth
    const h = img.naturalHeight
    const c = document.createElement("canvas")
    c.width = w
    c.height = h
    const ctx = c.getContext("2d", { willReadFrequently: true })
    ctx.drawImage(img, 0, 0)
    const id = ctx.getImageData(0, 0, w, h)
    const d = id.data
    const seed = [d[0], d[1], d[2]]
    const close = (i) => {
      const dr = d[i] - seed[0]
      const dg = d[i + 1] - seed[1]
      const db = d[i + 2] - seed[2]
      return dr * dr + dg * dg + db * db <= tol * tol
    }
    let removed = 0
    if (mode === "global") {
      for (let p = 0; p < w * h; p++) if (close(p * 4)) { d[p * 4 + 3] = 0; removed++ }
    } else {
      const visited = new Uint8Array(w * h)
      const stack = []
      const pushIf = (x, y) => {
        if (x < 0 || y < 0 || x >= w || y >= h) return
        const p = y * w + x
        if (visited[p]) return
        if (close(p * 4)) { visited[p] = 1; stack.push(p) }
      }
      for (let x = 0; x < w; x++) { pushIf(x, 0); pushIf(x, h - 1) }
      for (let y = 0; y < h; y++) { pushIf(0, y); pushIf(w - 1, y) }
      while (stack.length) {
        const p = stack.pop()
        const x = p % w
        const y = (p / w) | 0
        pushIf(x + 1, y); pushIf(x - 1, y); pushIf(x, y + 1); pushIf(x, y - 1)
      }
      for (let p = 0; p < w * h; p++) if (visited[p]) { d[p * 4 + 3] = 0; removed++ }
    }
    ctx.putImageData(id, 0, 0)
    return { w, h, seed, removed, total: w * h, url: c.toDataURL("image/png") }
  },
  { mode, tol }
)

console.log(`${file}  ${result.w}x${result.h}  seed=rgb(${result.seed})  removido=${((result.removed / result.total) * 100).toFixed(1)}%`)
await writeFile(`public/${file}`, Buffer.from(result.url.split(",")[1], "base64"))
console.log(`salvo public/${file} (transparente)`)
await browser.close()
