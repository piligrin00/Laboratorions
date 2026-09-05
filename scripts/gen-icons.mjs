/**
 * =====================================================================
 * GERADOR DE ÍCONES — npm run icons
 * ---------------------------------------------------------------------
 * Lê public/logo.png e gera:
 *   public/favicon-16.png       (aba do navegador)
 *   public/favicon-32.png       (aba em tela retina)
 *   public/apple-touch-icon.png (180x180, atalho no iOS)
 *   public/og-image.jpg         (1200x630, preview em WhatsApp/Insta)
 *
 * FUNDO ESCURO EM TODOS OS ÍCONES.
 * O "N" do monograma é branco/off-white e o logo vem com fundo
 * transparente. Numa aba de navegador em tema claro — o padrão da
 * maioria — um N branco sobre transparência simplesmente desaparece.
 * Por isso todo ícone é achatado sobre #0C1014, o mesmo fundo do site,
 * em vez de sair transparente.
 *
 * Usa apenas o `sharp` que já vem com o Astro — nenhuma dependência
 * extra. Rode este script sempre que trocar o logo.
 *
 * ATENÇÃO: o og-image gerado aqui é PLACEHOLDER. O definitivo deve
 * usar a foto de um caso bonito + logo (briefing seção 7). Um OG
 * image fraco é o que aparece toda vez que alguém manda o link do
 * site no WhatsApp.
 * =====================================================================
 */

import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = (...p) => path.join(raiz, 'public', ...p);

// Tokens travados da marca (briefing seção 3)
const SURFACE = '#0C1014';
const ACCENT = '#70C81A';
const INK = '#E3E3E1';
const INK_MUTED = '#9CA3A1';

const logo = await readFile(pub('logo.png'));

/**
 * Monta um ícone quadrado: fundo #0C1014 e o logo centralizado, com
 * folga nas bordas. O iOS e os navegadores aplicam o próprio
 * arredondamento, então a arte sai quadrada e sangrada.
 */
async function icone(lado, folgaPct = 0.14) {
  const util = Math.round(lado * (1 - folgaPct * 2));
  const marca = await sharp(logo)
    .resize(util, util, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  return sharp({
    create: {
      width: lado,
      height: lado,
      channels: 4,
      background: SURFACE,
    },
  })
    .composite([{ input: marca, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/* --- favicons e apple-touch-icon --------------------------------- */
const alvos = [
  ['favicon-16.png', 16, 0.06],
  ['favicon-32.png', 32, 0.08],
  ['apple-touch-icon.png', 180, 0.16],
];

for (const [arquivo, lado, folga] of alvos) {
  const buf = await icone(lado, folga);
  await sharp(buf).toFile(pub(arquivo));
}

/* --- og-image.jpg (1200x630) --------------------------------------- */
const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${SURFACE}"/>
  <circle cx="1010" cy="120" r="300" fill="${ACCENT}" opacity="0.07"/>
  <rect x="96" y="470" width="96" height="5" fill="${ACCENT}"/>
  <text x="96" y="330" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="72" font-weight="700" fill="${INK}">Laboratório NS</text>
  <text x="96" y="396" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="34" font-weight="400" fill="${INK_MUTED}">Prótese odontológica digital · Rio de Janeiro</text>
  <text x="96" y="528" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="27" font-weight="600" fill="${ACCENT}">Entrega em 5 dias úteis</text>
</svg>`;

const monograma = await sharp(logo)
  .resize(210, 210, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

await sharp(Buffer.from(og))
  .composite([{ input: monograma, top: 95, left: 900 }])
  .jpeg({ quality: 86, chromaSubsampling: '4:4:4' })
  .toFile(pub('og-image.jpg'));

/* --- relatório ----------------------------------------------------- */
const gerados = [
  'favicon-16.png',
  'favicon-32.png',
  'apple-touch-icon.png',
  'og-image.jpg',
];

for (const arquivo of gerados) {
  const meta = await sharp(pub(arquivo)).metadata();
  console.log(
    `  ${arquivo.padEnd(22)} ${meta.width}x${meta.height} ${meta.format}  (fundo ${SURFACE})`,
  );
}
console.log('\n  Ícones gerados a partir de public/logo.png.');
console.log('  Lembrete: og-image.jpg ainda é PLACEHOLDER (XXX-OG-IMAGE).');
