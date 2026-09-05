import type { ImageMetadata } from 'astro';

/**
 * =====================================================================
 * GALERIA DE CASOS — FORA DA PAGINA
 * ---------------------------------------------------------------------
 * NAO E RENDERIZADO. O cliente decidiu nao publicar fotos de trabalho.
 * Este arquivo e o Galeria.astro ficam prontos caso a decisao mude.
 * ---------------------------------------------------------------------
 * COMO TROCAR AS FOTOS (é só isto):
 *
 *   1. Solte os arquivos em  src/assets/casos/
 *      Nomeie como caso-01.jpg, caso-02.jpg, ... (ou .png/.webp).
 *   2. Ajuste `alt`, `legenda` e `tipo` na lista abaixo.
 *
 * Enquanto um arquivo não existir, o site mostra um placeholder
 * numerado no lugar, com o mesmo formato 4:5, e o layout já fica certo.
 *
 * POR QUE src/assets/ E NÃO public/:
 * o Astro só otimiza (AVIF/WebP, srcset, width/height) imagens que
 * estão dentro de src/. Arquivos em public/ são copiados crus e
 * derrubariam a nota de Performance. Ver README.
 *
 * QUANTIDADE: SÃO 6, e o número não é arbitrário. A grade tem 3 colunas
 * e o primeiro caso ocupa 2 colunas por 2 linhas (escala de cartaz).
 * Sobram exatamente 5 células — duas na coluna da direita, três na
 * fileira de baixo — que os outros 5 casos preenchem sem folga.
 * Mudar a quantidade abre buraco na grade: ver Galeria.astro.
 * =====================================================================
 */

/** Categorias de filtro da galeria. `todos` é sempre a primeira. */
export const TIPOS_CASO = [
  { id: 'todos', label: 'Todos' },
  { id: 'zirconia', label: 'Zircônia' },
  { id: 'emax', label: 'E-max' },
  { id: 'protocolo', label: 'Protocolo' },
  { id: 'provisorio', label: 'Provisório' },
] as const;

export type TipoCaso = Exclude<(typeof TIPOS_CASO)[number]['id'], 'todos'>;

export interface Caso {
  /** Nome do arquivo dentro de src/assets/casos/ */
  arquivo: string;
  /**
   * Alt descritivo e real, obrigatório para acessibilidade e bom para
   * SEO. Descreva o trabalho, não a foto.
   * Ex.: 'Protocolo superior em zircônia monolítica'
   */
  alt: string;
  /** Legenda opcional, exibida sobre a foto e no lightbox. */
  legenda?: string;
  /** Material ou tipo de trabalho. Alimenta os filtros da galeria. */
  tipo: TipoCaso;
}

/**
 * XXX-CASOS: o cliente ainda não enviou as fotos.
 * Os 6 itens abaixo já estão no formato final. Quando as fotos
 * chegarem, é só soltá-las na pasta e trocar `alt`, `legenda` e `tipo`.
 *
 * SEIS, não quinze: com poucos casos cada foto é olhada. Uma parede de
 * quinze miniaturas iguais não é examinada, é rolada. E seis fotos boas
 * o laboratório consegue separar; quinze vira enchimento.
 *
 * Os quatro tipos aparecem porque o filtro precisa de mais de uma
 * categoria com foto para existir. O `tipo` de cada item é provisório e
 * precisa ser conferido foto por foto.
 */
export const CASOS: Caso[] = [
  { arquivo: 'caso-01.jpg', alt: 'XXX, descrever o trabalho desta foto', tipo: 'zirconia' },
  { arquivo: 'caso-02.jpg', alt: 'XXX, descrever o trabalho desta foto', tipo: 'zirconia' },
  { arquivo: 'caso-03.jpg', alt: 'XXX, descrever o trabalho desta foto', tipo: 'emax' },
  { arquivo: 'caso-04.jpg', alt: 'XXX, descrever o trabalho desta foto', tipo: 'protocolo' },
  { arquivo: 'caso-05.jpg', alt: 'XXX, descrever o trabalho desta foto', tipo: 'emax' },
  { arquivo: 'caso-06.jpg', alt: 'XXX, descrever o trabalho desta foto', tipo: 'provisorio' },
];

/* ---------------------------------------------------------------------
 * Resolução dos arquivos. Nada abaixo precisa ser editado.
 * ------------------------------------------------------------------ */

const imagens = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/casos/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

/** Mapa 'caso-01.jpg' para ImageMetadata, a partir do que há na pasta. */
const porNome = new Map<string, ImageMetadata>(
  Object.entries(imagens).map(([caminho, mod]) => [
    caminho.split('/').pop() as string,
    mod.default,
  ]),
);

export interface CasoResolvido extends Caso {
  /** `null` quando o arquivo ainda não foi enviado. */
  imagem: ImageMetadata | null;
  /** Rótulo do placeholder, ex.: 'XXX-CASO-01'. */
  placeholder: string;
  /** `true` quando o alt ainda é pendência. */
  altPendente: boolean;
}

export const casos: CasoResolvido[] = CASOS.map((caso, i) => ({
  ...caso,
  imagem: porNome.get(caso.arquivo) ?? null,
  placeholder: `XXX-CASO-${String(i + 1).padStart(2, '0')}`,
  altPendente: caso.alt.includes('XXX'),
}));

/** Quantas fotos já foram realmente enviadas. */
export const totalCasosEnviados = casos.filter((c) => c.imagem).length;

/** Tipos que têm ao menos uma foto. Filtro vazio não deve aparecer. */
export const tiposComCasos = TIPOS_CASO.filter(
  (t) => t.id === 'todos' || casos.some((c) => c.tipo === t.id),
);
