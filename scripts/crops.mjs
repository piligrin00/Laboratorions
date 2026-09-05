/**
 * Recorta as capturas full-page em faixas legiveis, para critica secao
 * por secao. Uma miniatura da pagina inteira esconde exatamente os
 * defeitos que importam.
 *
 *   node scripts/crops.mjs <arquivo.png> <pasta> [alturaDaFaixa]
 */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const entrada = process.argv[2];
const destino = path.resolve(process.argv[3] ?? '_shots/crops');
const faixa = Number(process.argv[4] ?? 1100);

await mkdir(destino, { recursive: true });

const img = sharp(entrada);
const { width, height } = await img.metadata();
const base = path.basename(entrada, '.png');
const n = Math.ceil(height / faixa);

for (let i = 0; i < n; i++) {
  const top = i * faixa;
  const h = Math.min(faixa, height - top);
  if (h < 40) break;
  const nome = `${base}-faixa-${String(i + 1).padStart(2, '0')}.png`;
  await sharp(entrada)
    .extract({ left: 0, top, width, height: h })
    .png()
    .toFile(path.join(destino, nome));
  console.log(`  ${nome}  (y ${top}–${top + h})`);
}
