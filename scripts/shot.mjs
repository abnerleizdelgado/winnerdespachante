// Screenshot de validação usando o Edge instalado (via playwright-core, channel msedge).
// Uso: node scripts/shot.mjs [url] [outPrefix]
import { chromium } from "playwright-core"

const url = process.argv[2] || "http://localhost:4173/"
const prefix = process.argv[3] || "shot"

const browser = await chromium.launch({ channel: "msedge", headless: true })
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 })

await page.goto(url, { waitUntil: "networkidle" }).catch(() => {})
// Rola até o fim para disparar os reveals (IntersectionObserver), depois volta ao topo.
await page.evaluate(async () => {
  await new Promise((r) => {
    let y = 0
    const step = () => {
      window.scrollTo(0, y)
      y += 600
      if (y < document.body.scrollHeight) setTimeout(step, 80)
      else setTimeout(r, 300)
    }
    step()
  })
})
await page.waitForTimeout(800)
await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(600)

await page.screenshot({ path: `${prefix}-full.png`, fullPage: true })

// Recortes por viewport (dobra do hero e algumas seções)
const positions = [0, 820, 1640, 2460, 3280]
for (let i = 0; i < positions.length; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), positions[i])
  await page.waitForTimeout(400)
  await page.screenshot({ path: `${prefix}-v${i}.png` })
}

await browser.close()
console.log("OK")
