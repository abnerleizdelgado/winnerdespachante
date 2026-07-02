// Remove "• 2026" do selo dourado e recentraliza "SÃO PAULO".
// Coordenadas (orig 800x533) lidas da ampliação do selo.
import { chromium } from "playwright-core"
import { writeFile } from "node:fs/promises"

const browser = await chromium.launch({ channel: "msedge", headless: true })
const page = await browser.newPage()
await page.goto("http://localhost:4173/img/sol-5-calendario.png", { waitUntil: "load" })

const out = await page.evaluate(async () => {
  const img = document.querySelector("img"); await img.decode()
  const w = img.naturalWidth, h = img.naturalHeight
  const c = document.createElement("canvas"); c.width = w; c.height = h
  const ctx = c.getContext("2d", { willReadFrequently: true })
  ctx.drawImage(img, 0, 0)
  const id = ctx.getImageData(0, 0, w, h); const d = id.data
  const at = (x, y) => { const i = (y * w + x) * 4; return [d[i], d[i + 1], d[i + 2]] }
  const isGold = (x, y) => { const [r, g, b] = at(x, y); return r > 200 && g > 150 && g < 222 && b < 85 }

  // detecta a faixa vertical (y) do selo dourado na coluna esquerda do selo
  let gy0 = 1e9, gy1 = -1
  for (let y = 95; y < 175; y++) {
    let goldCount = 0
    for (let x = 230; x < 380; x++) if (isGold(x, y)) goldCount++
    if (goldCount > 30) { if (y < gy0) gy0 = y; if (y > gy1) gy1 = y }
  }

  // coordenadas horizontais (orig)
  const blockX0 = 224, blockX1 = 401          // "SÃO PAULO" (+ margem)
  const fillX0 = 214, fillX1 = 510            // interior do selo a limpar
  const by0 = gy0, by1 = gy1, bh = by1 - by0 + 1
  const blockW = blockX1 - blockX0

  // copia "SÃO PAULO"
  const block = ctx.getImageData(blockX0, by0, blockW, bh)

  // preenche todo o interior com dourado por linha (respeita degradê)
  const goldRef = (y) => {
    for (let x = 216; x < 224; x++) if (isGold(x, y)) return at(x, y)
    for (let x = 504; x < 512; x++) if (isGold(x, y)) return at(x, y)
    return [247, 181, 2]
  }
  for (let y = by0; y <= by1; y++) {
    const ref = goldRef(y)
    for (let x = fillX0; x <= fillX1; x++) {
      const i = (y * w + x) * 4
      d[i] = ref[0]; d[i + 1] = ref[1]; d[i + 2] = ref[2]; d[i + 3] = 255
    }
  }
  ctx.putImageData(id, 0, 0)

  // cola "SÃO PAULO" centralizado no interior [214..510]
  const newX0 = Math.round((fillX0 + fillX1) / 2 - blockW / 2)
  ctx.putImageData(block, newX0, by0)

  return { w, h, goldY: [gy0, gy1], blockW, newX0, url: c.toDataURL("image/png") }
})

console.log(JSON.stringify({ ...out, url: out.url ? "(png)" : undefined }))
if (out.url) {
  await writeFile("public/img/sol-5-calendario.png", Buffer.from(out.url.split(",")[1], "base64"))
  console.log("salvo")
}
await browser.close()
