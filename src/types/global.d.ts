/**
 * Tipos das globais de tracking.
 *
 * Ambas sao opcionais de proposito: com o .env vazio nenhum script de
 * terceiro carrega, entao `window.dataLayer` e `window.fbq` podem
 * simplesmente nao existir. Os CTAs acessam as duas com `?.`.
 */
declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

export {};
