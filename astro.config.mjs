// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import { SITE_URL } from './src/data/site';

/**
 * O dominio ainda nao foi registrado (XXX-DOMINIO). Enquanto SITE_URL
 * estiver vazio em src/data/site.ts:
 *   - `site` fica undefined, entao nada gera URL absoluta errada;
 *   - o @astrojs/sitemap NAO e ativado (ele exige `site` e geraria um
 *     sitemap.xml apontando para o dominio errado, o que e pior do que
 *     nao ter sitemap).
 * Preencher SITE_URL liga as duas coisas automaticamente.
 */
export default defineConfig({
  output: 'static',
  site: SITE_URL || undefined,
  integrations: [icon(), ...(SITE_URL ? [sitemap()] : [])],
  vite: {
    plugins: [tailwindcss()],
  },
});
