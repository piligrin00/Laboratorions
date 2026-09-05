/**
 * Captura de telas para inspecao — uso interno de desenvolvimento.
 *
 * Roda contra o `astro preview` (build de producao, sem a toolbar de
 * desenvolvimento) e salva PNGs full-page nas
 * quatro larguras que o briefing manda testar: 360, 768, 1280 e 1920.
 *
 *   node scripts/shots.mjs [url] [pasta]
 *
 * O Playwright nao e dependencia deste projeto: o script resolve o
 * pacote a partir de um caminho externo para nao inflar o node_modules
 * de um site estatico. Ajuste PLAYWRIGHT_PATH se necessario.
 */

import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const PLAYWRIGHT_PATH =
  process.env.PLAYWRIGHT_PATH ??
  'C:/Users/victo/OneDrive/PILIGRIN/CLAUDE/conteudo/2026-04-08-eleicoes-2026-empreendedores/node_modules/playwright/index.js';

const require = createRequire(import.meta.url);
const { chromium } = require(PLAYWRIGHT_PATH);

const url = process.argv[2] ?? 'http://localhost:4322';
const destino = path.resolve(process.argv[3] ?? '_shots');

const LARGURAS = [360, 768, 1280, 1920];

await mkdir(destino, { recursive: true });

const browser = await chromium.launch();

for (const largura of LARGURAS) {
  const context = await browser.newContext({
    viewport: { width: largura, height: largura < 768 ? 812 : 900 },
    deviceScaleFactor: 1,
    isMobile: largura < 768,
    hasTouch: largura < 768,
  });
  const page = await context.newPage();

  await page.goto(url, { waitUntil: 'networkidle' });

  /* Percorre a pagina para disparar todas as animacoes de entrada, e
     volta ao topo. `behavior: instant` e obrigatorio: o site tem
     scroll-behavior: smooth, e um scroll animado deixaria a foto da
     dobra no meio do caminho. */
  await page.evaluate(async () => {
    const passo = window.innerHeight * 0.8;
    const altura = document.documentElement.scrollHeight;
    for (let y = 0; y < altura; y += passo) {
      window.scrollTo({ top: y, behavior: 'instant' });
      await new Promise((r) => setTimeout(r, 90));
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    await new Promise((r) => setTimeout(r, 300));
  });
  await page.waitForTimeout(400);

  // Dobra: o que o dentista ve nos primeiros segundos.
  await page.screenshot({
    path: path.join(destino, `dobra-${largura}.png`),
    fullPage: false,
  });

  // Pagina inteira.
  await page.screenshot({
    path: path.join(destino, `full-${largura}.png`),
    fullPage: true,
  });

  /* Uma foto no meio da pagina, para conferir a curva do ciclo em
     progresso. ATENCAO: no Chromium headless os eventos de scroll so
     sao despachados quando um frame e produzido, entao o screenshot
     precisa vir DEPOIS do scroll — e ele mesmo forca o frame. Ler o
     estado sem tirar foto devolve o valor antigo. */
  await page.evaluate(() => {
    const alcance = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: alcance * 0.4, behavior: 'instant' });
  });
  await page.screenshot({ path: path.join(destino, `curva-${largura}.png`) });
  await page.waitForTimeout(120);
  await page.screenshot({ path: path.join(destino, `curva-${largura}.png`) });

  const altura = await page.evaluate(
    () => document.documentElement.scrollHeight,
  );
  console.log(`  ${largura}px  →  dobra + full + curva (${altura}px de altura)`);

  await context.close();
}

await browser.close();
console.log(`\n  Telas em ${destino}`);
