---
name: Laboratório NS
description: Prótese odontológica digital no Rio, montada como um dossiê impresso em faixas alternadas de escuro e claro.
colors:
  surface: "#0C1014"
  surface-raised: "#191919"
  surface-hover: "#22262A"
  surface-light: "#F2F4F0"
  surface-mint: "#E4EDE0"
  accent: "#70C81A"
  accent-hover: "#5FAF14"
  accent-on-light: "#3A6F0B"
  accent-ink: "#0C1014"
  ink: "#E3E3E1"
  ink-muted: "#9CA3A1"
  on-light: "#14181A"
  on-light-soft: "#5C635E"
  hairline: "rgb(227 227 225 / 0.10)"
  hairline-light: "rgb(20 24 26 / 0.10)"
typography:
  display:
    fontFamily: "Newsreader, ui-serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Newsreader, ui-serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  subheading:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "normal"
  body:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body-sm:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  caption:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  wordmark:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, Segoe UI, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.65
    letterSpacing: "-0.01em"
  readout:
    fontFamily: "ui-monospace, SFMono-Regular, Cascadia Mono, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
  ficha:
    fontFamily: "ui-monospace, SFMono-Regular, Cascadia Mono, Menlo, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.03em"
rounded:
  sm: "0.25rem"
  card: "14px"
  full: "9999px"
spacing:
  xs: "0.75rem"
  sm: "1.25rem"
  md: "2rem"
  lg: "3.5rem"
  banda-mobile: "56px"
  banda-curta: "64px"
  banda: "96px"
  banda-longa: "112px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "0 1.25rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.full}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "0 1.25rem"
    height: "2.75rem"
  button-ghost-hover:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
  link-cta:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.body-sm}"
    height: "2.75rem"
  card:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.75rem"
  chip:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "0.4375rem 0.875rem"
  chip-dado:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.readout}"
    rounded: "{rounded.full}"
    padding: "0.375rem 0.75rem"
---

# Design System — Laboratório NS

> Registrado a partir do build, não do plano. Todo token e toda regra aqui
> têm evidência no código entregue.

## Overview

**Norte criativo: o dossiê impresso.** A página é uma pilha de sete faixas
full-bleed, com borda dura entre elas e nenhum gradiente de transição.
Escuro, claro, escuro, claro, escuro, menta, escuro. Abre e fecha escuro,
então o site lê como escuro; as faixas claras existem para dar respiro e
porque prótese fotografada aparece melhor sobre fundo claro, que é o
motivo real das faixas existirem.

O que essa estrutura recusa: a rolagem escura única com um acento
brilhante, herói centralizado sobre grade de cards iguais, que é o que
essa categoria gera por padrão.

**Humor:** editorial e contido. Título em serifa de peso regular em
tamanho grande, corpo pequeno com muito ar, dado em monoespaçada quando
há número para medir. Um documento técnico bem impresso, não uma landing
page.

**Antirreferências confirmadas:** a página clínica clara com foto de banco
de imagens de dentista sorrindo, e seu oposto previsível, o
preto-e-dourado de "odontologia premium". Nenhuma das duas.

**Público:** cirurgião-dentista, no celular, entre pacientes, decidindo se
manda o próximo caso.

## Colors

A paleta escura saiu do monograma da marca e é **restrição travada**. Os
tokens claros existem para o ritmo de faixas.

| Token | Valor | Caráter | Uso |
|---|---|---|---|
| `surface` | `#0C1014` | Azul-carvão profundo | Faixas 1, 3, 5, 7 |
| `surface-raised` | `#191919` | Grafite neutro | Card sobre faixa escura |
| `surface-hover` | `#22262A` | Grafite azulado | Hover de superfície |
| `surface-light` | `#F2F4F0` | Cinza-linho quente | Faixas 2 e 4 |
| `surface-mint` | `#E4EDE0` | Verde-névoa pálido | Faixa 6, o fechamento |
| `accent` | `#70C81A` | Verde-limão elétrico | Acento sobre escuro |
| `accent-on-light` | `#3A6F0B` | Verde-oliva escuro | Acento sobre claro |
| `accent-ink` | inverte | Texto sobre o verde | `#0C1014` no escuro, `#F2F4F0` no claro |
| `ink` | `#E3E3E1` | Off-white morno | Texto sobre escuro |
| `ink-muted` | `#9CA3A1` | Cinza-sálvia | Apoio sobre escuro |
| `on-light` | `#14181A` | Quase-preto frio | Texto sobre claro |
| `on-light-soft` | `#5C635E` | Cinza-oliva | Apoio sobre claro |

### Como as faixas trocam de cor

`.band-light` e `.band-mint` **redefinem as variáveis** de ink, hairline,
accent e superfície de card. Nenhum componente sabe em que faixa está:
`text-ink`, `text-accent`, `border-hairline` e `bg-surface-raised`
funcionam igual nas duas. Um componente novo herda o comportamento sem
código condicional.

### Regras de cor

- **O verde significa uma coisa só: ativo, em processo, sua vez.** CTA,
  valor numérico, chip de dado, check de filtro ativo. Se decorar, a
  lógica quebra.
- **Nunca um bloco, faixa ou seção de fundo verde.** A faixa menta é
  `#E4EDE0`, um verde lavado, não o acento.
- **`#FFFFFF` é proibido em texto.** Sobre escuro use `ink`; sobre claro
  use `on-light`.
- **O verde da marca não sobrevive em fundo claro.** `#70C81A` sobre
  `#F2F4F0` dá 1,90:1. Sobre claro é sempre `#3A6F0B`.

### Contraste medido no build

Não estimado: medido no DOM renderizado, com o fundo efetivo resolvido
subindo a árvore até achar cor opaca. **Zero falhas** em todo texto
visível da página.

| Par | Razão |
|---|---|
| `ink` sobre `surface` | 14,86:1 |
| `ink-muted` sobre `surface` | 7,43:1 |
| `accent` sobre `surface` | 9,06:1 |
| `on-light` sobre `surface-light` | 16,14:1 |
| `on-light-soft` sobre `surface-light` | 5,58:1 |
| `accent-on-light` sobre `surface-light` | 5,49:1 |
| `accent-on-light` sobre `surface-mint` | 5,06:1 |

Registro de uma correção: a direção pedia `#4E9310` para o verde sobre
claro. Medido, ele dá **3,45:1**, que reprova o mínimo AA de 4,5 para
texto normal. `#3A6F0B` foi escolhido por passar nas duas faixas claras e
servir nos dois papéis, como cor de texto e como fundo de botão.

## Typography

**Newsreader** em todo título, **peso 400, nunca bold, nunca sans**.
Serifa de peso regular em tamanho grande é o movimento que mais afasta o
site da estética de interface gerada; título em sans-serif bold é o que
todo gerador entrega.

A direção pedia Instrument Serif e autorizava Newsreader como
alternativa. Ficou Newsreader: Instrument Serif é *a* fonte do movimento
"serifa editorial" e por isso mesmo saturada, e Newsreader é variável,
então um arquivo cobre a faixa de peso inteira.

**IBM Plex Sans** no corpo, 15 a 16px. Corpo pequeno com muito ar em
volta é deliberado: é o que dá aparência editorial em vez de landing
page.

**Monoespaçada do sistema**, sem webfont, só onde há dado a medir: a
ficha de prazos, os rótulos de leitura, os chips sobre foto. Mono em
texto corrido é fantasia de "técnico" e não entra.

### Rampa

| Papel | Tamanho | Família | Peso |
|---|---|---|---|
| `display` (H1, um por página) | `clamp(2.5rem, 6vw, 4.5rem)` | Newsreader | 400 |
| `heading` (H2 de seção) | `clamp(1.875rem, 4vw, 3rem)` | Newsreader | 400 |
| `subheading` (H3) | `1.0625rem` | Plex Sans | 600 |
| `body` | `1rem` / 1.65 | Plex Sans | 400 |
| `body-sm` | `0.9375rem` / 1.6 | Plex Sans | 400 |
| `caption` | `0.875rem` | Plex Sans | 400 |
| `wordmark` | `1.5rem` (17px abaixo de 640px) | Plex Sans | 600 |
| `readout` | `0.75rem`, caixa-alta, tracking `0.08em` | mono do sistema | 400 |
| `ficha` | `0.8125rem`, caixa-alta | mono do sistema | 400 |

- Medida de texto corrido: **620px** (`.measure`), cerca de 70 caracteres.
  Texto largo demais é sinal de página gerada.
- H2 usa `text-wrap: balance`, parágrafo usa `text-wrap: pretty`.
- Fontes locais em `public/fonts/`, `font-display: swap`. `preload` só da
  serifa, que pinta o maior elemento de texto da dobra.

## Layout

- **Coluna:** `max-width: 1200px` (`.band-inner`), padding lateral de
  `1.25rem` no móvel e `2rem` de 640px para cima.
- **Faixa:** cada seção é uma `<section>` full-bleed com a coluna dentro.
  A borda entre faixas é a mudança de cor, nunca uma régua nem gradiente.
- **Padding de faixa deliberadamente irregular:** `64px` na curta,
  `96px` na normal, `112px` na longa, e `56px` em qualquer uma no móvel.
  Ritmo perfeitamente regular parece planilha; a faixa de casos é a mais
  longa porque é a mais importante. (Reduzido do valor original de
  90/140/180: os títulos de seção ficavam baixos demais na tela.)
- **Alinhamento: à esquerda em tudo.** As duas únicas exceções são o
  herói, que abre a página.
  Centralizar tudo é o tique visual número um de site gerado.
- **Régua interna** (`.rule`): 1px em `hairline`, no topo do bloco que
  começa.
- **Header:** grade de três colunas `1fr auto 1fr`, nunca flex com
  `justify-between`. Com flex a nav centraliza entre os dois vizinhos, e
  como o botão do WhatsApp é bem mais largo que o lockup, ela sai torta.
  As duas colunas laterais em `1fr` têm a mesma largura por construção,
  então a coluna do meio cai no eixo da página. Abaixo de 1024px a nav
  some e a grade vira `auto 1fr`, com o lockup na coluna intrínseca:
  em `1fr` a caixa dele era clipada e o wordmark `nowrap` pintava por
  cima do link de contato.
- **Respiro do topo:** a faixa do herói é a única com padding vertical
  assimétrico (`64px` em cima, `90px` embaixo no desktop; `40px` e
  `80px` no móvel). Acima dela está o header, não outra cor, então ela
  não precisa do mesmo respiro de uma fronteira entre faixas.
- **Herói é só texto**, centralizado: H1, subtítulo, dois CTAs, quatro
  badges. Uma colagem assimétrica de duas fotos existiu numa versão
  anterior e foi removida a pedido do cliente; não reintroduzir sem
  pedido explícito (a foto e o alt continuam em `src/assets/hero/` e
  `HERO.fotoAlt`, sem uso).
- **Breakpoints:** 640px (lockup e barra de conversão trocam de forma),
  1024px (nav aparece, grades de Portas e Serviços abrem).
- Verificado em 360, 768, 1280 e 1920px.

## Elevation & Depth

**Filosofia: plano.** Zero sombra em zero elemento. Zero glow. Zero
`backdrop-filter`. As superfícies se separam por **cor e espaço**, não
por elevação.

O único gradiente do CSS compilado é a condução pontilhada da ficha de
prazos, e ele é funcional: desenha os pontos. Gradiente decorativo, glow
radial atrás de conteúdo e vidro fosco são proibidos por serem a marca
d'água da landing page gerada.

O header fixo é **opaco**. Translúcido, ele mudaria de cor em cada faixa
por onde passasse.

## Shapes

- **Raio:** `14px` em card, foto e placeholder. `9999px` em botão e chip.
  Nada entre os dois e nada maior.
- **Botão é pílula pequena com seta**, altura útil de 44px nas três
  variantes.
- **Chip de dado sobre foto:** pílula de fundo `surface` com fio de 1px,
  posicionada sobre a borda da imagem, nunca centralizada nela.
- **Selo circular:** um só no site inteiro, na área de atendimento. Texto
  em `<textPath>` sobre círculo de verdade, girando em 34s, parado sob
  `prefers-reduced-motion`.

## Components

**Filosofia: preciso e contido.** Nada estala; tudo assenta.

- **`button-primary`** verde cheio com ícone do WhatsApp e seta. No
  máximo um por dobra.
- **`button-ghost`** fio de 1px, sem preenchimento.
- **`link-cta`** texto verde com seta que avança 2px no hover. Fecho de
  seção, com 44px de área de toque mesmo sendo texto.
- **`card`** fio de 1px e cor. Usado na ficha de prazos e nos serviços.
- **Grade com divisor de 1px:** `grid gap-px` sobre fundo `hairline`, com
  cada célula em `surface-raised`. É como serviços, portas de entrada e
  diferenciais se separam, sem card empilhado.
- **Destaque de prioridade comercial (ex.: a porta de migração em
  "Atendemos três tipos de dentista"):** SÓ cor e fundo — borda de
  2px em `accent` mais fundo `surface-mint`, as outras células em branco
  puro. Nunca selo, badge ou escala maior. O texto e o CTA do card
  destacado são idênticos em estrutura aos outros; só a superfície muda.
- **`chip`** pílula de fio fino para material e bairro. Conteúdo
  enumerável, nunca ação.
- **Filtro de galeria:** fileira de rótulos em linha única com régua
  acima, check verde no ativo. `aria-pressed` carrega o estado. Não são
  pílulas: rótulo com check é mais contido e não compete com os chips.
- **Alvo de toque mínimo 44px** em qualquer controle, inclusive link de
  texto no rodapé.
- **Foco:** `outline` de 2px em `accent`, offset 3px, em tudo interativo.

### Movimento

- **Entrada:** `opacity` 0 para 1 e `translateY(16px)` para 0, 500ms,
  `cubic-bezier(0.16, 1, 0.3, 1)`, cascata de 70 a 90ms entre irmãos.
- **A primeira dobra não anima.** Ela está lá na primeira pintura.
- **`.js` é obrigatório no seletor do estado escondido.** Sem
  JavaScript, `opacity: 0` deixaria a página inteira em branco.
- **`prefers-reduced-motion` desliga animação, nunca conteúdo.**
- Um único elemento em rotação contínua: o selo da área de atendimento.

### Superfícies do navegador

`::selection` em `accent`, `caret-color` em `accent`, `scrollbar-color`
da paleta, `color-scheme: dark`. Barra de rolagem cinza do sistema no
meio de um site escuro denuncia que a página foi montada, não construída.

## Do's and Don'ts

**Faça**

- Alterne faixas com borda dura e sem gradiente de transição.
- Título em serifa 400. Sempre.
- Alinhe à esquerda, exceto o herói.
- Use monoespaçada só onde há número a medir.
- Ponha foto real onde a seção precisa provar algo, e placeholder marcado
  onde a foto não chegou.
- Escreva no benefício para o dentista, não na especificação.
- Calcule datas e contagens de anos; nunca fixe número que envelhece.
- Varie o comprimento das frases de propósito.

**Não faça**

- ❌ Travessão (`—`) ou traço médio em texto que o dentista lê. Use
  dois-pontos, vírgula, parênteses, ponto final, ou estrutura.
- ❌ Regra de três (`menos A, menos B, menos C`). É a assinatura
  sintática mais reconhecível de texto gerado.
- ❌ Sobretítulo em caixa-alta acima de um H2.
- ❌ Sombra, glow, gradiente decorativo, vidro fosco.
- ❌ Título em sans-serif bold.
- ❌ Centralizar qualquer seção que não seja o herói.
- ❌ Ícone em círculo no topo de cards iguais em grade.
- ❌ Ícone no lugar de foto na seção de tecnologia. Ali a foto é a prova.
- ❌ Glifo Unicode ou emoji fazendo papel de ícone.
- ❌ CTA genérico (`Saiba mais`, `Comece agora`). Todo CTA é fala
  concreta.
- ❌ Adjetivo de folheto sem prova: impecável, de ponta, inovador,
  solução completa.
- ❌ Estatística, depoimento, CNPJ, endereço, horário ou preço inventado.
- ❌ Prazo diferente de 5 dias úteis sem confirmação do cliente.
