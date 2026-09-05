# Site do Laboratório NS

Site institucional de uma página do **Laboratório NS** — laboratório de prótese odontológica digital em Copacabana, Rio de Janeiro.

O site tem **um objetivo só: levar o cirurgião-dentista para o WhatsApp.** Não existe formulário, área logada, orçamento online nem tabela de preços. Tudo é caminho para a conversa.

- **Stack:** Astro 7 (saída estática) + Tailwind CSS 4
- **Público:** cirurgiões-dentistas da Zona Sul do Rio e da Barra da Tijuca (B2B — não é site para paciente)
- **Lighthouse mobile:** 100 / 100 / 100 / 100

---

## Índice

1. [Rodar o site](#1-rodar-o-site)
2. [Trocar textos](#2-trocar-textos)
3. [Trocar as fotos dos casos](#3-trocar-as-fotos-dos-casos)
4. [Colocar as outras fotos](#4-colocar-as-outras-fotos)
5. [Colocar o vídeo](#5-colocar-o-vídeo)
6. [Preencher os depoimentos](#6-preencher-os-depoimentos)
7. [Trocar o logo e regerar os ícones](#7-trocar-o-logo-e-regerar-os-ícones)
8. [Ativar GTM, Pixel e GA4](#8-ativar-gtm-pixel-e-ga4)
9. [Registrar o domínio](#9-registrar-o-domínio)
10. [Publicar (deploy)](#10-publicar-deploy)
11. [Apontar o DNS no Registro.br](#11-apontar-o-dns-no-registrobr)
12. [Decisões de projeto](#12-decisões-de-projeto)
13. [Pendências (XXX)](#13-pendências-xxx)

---

## 1. Rodar o site

Precisa de **Node 22.12 ou mais novo**.

```bash
npm install
```

```bash
npm run dev
```

Abre em `http://localhost:4321`. Salvar um arquivo atualiza o navegador na hora.

Outros comandos:

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera o site final na pasta `dist/` |
| `npm run preview` | Serve a `dist/` como em produção |
| `npm run icons` | Regera favicon, apple-touch-icon e og-image a partir do logo |
| `npx astro check` | Confere erros de tipo e de template |

---

## 2. Trocar textos

**Todo o conteúdo está em um arquivo só: `src/data/site.ts`.** Você não precisa abrir nenhum componente.

Lá dentro estão, cada um em sua seção numerada:

| O que | Onde no arquivo |
|---|---|
| Telefone, e-mail, Instagram, bairro | `NEGOCIO` |
| Endereço do site depois de registrar o domínio | `SITE_URL` |
| Ligar/desligar depoimentos e vídeo | `MOSTRAR_DEPOIMENTOS`, `MOSTRAR_VIDEO` |
| As mensagens automáticas do WhatsApp | `WA_MESSAGES` |
| Menu do topo | `NAV` |
| Título, subtítulo e badges da primeira tela | `HERO` |
| As 3 portas de entrada ("Atendemos três tipos de dentista") | `PORTAS` |
| Faixa de números (2017, anos, 5 dias) | `CREDIBILIDADE` |
| Os 4 serviços | `SERVICOS` |
| Os 5 passos do "Como funciona" | `PASSOS` |
| A ficha de prazos (o cartão-recibo) | `FICHA_PRAZOS` |
| Os 4 equipamentos e os materiais | `TECNOLOGIA`, `MATERIAIS` |
| Os 3 diferenciais | `DIFERENCIAIS` |
| Texto do "Sobre" | `SOBRE` |
| Lista de bairros atendidos | `AREA_ATENDIMENTO` |
| Faixa final de chamada | `CTA_FINAL` |
| Título e descrição para o Google | `SEO` |

### Duas coisas que se calculam sozinhas

Não troque por número fixo, senão elas envelhecem:

- **Anos de carreira do André Nascimento** — sai de `protesistaFormadoEm: 2008`. Em 2026 o site mostra "18 anos"; em 2027 mostra 19, sem ninguém mexer.
- **Ano do rodapé** — sempre o ano atual.

### O que NÃO pode entrar no site

Está assim de propósito, porque esses dados não existem:

- ❌ CNPJ ou razão social (a operação é por RPA) — o rodapé leva só o nome "Laboratório NS"
- ❌ Endereço com rua e número — só o bairro, Copacabana
- ❌ Horário de funcionamento — ainda não definido
- ❌ Número de dentistas atendidos ou de casos entregues — não há essa contagem; use as formulações qualitativas que já estão no site
- ❌ Depoimento, nome de dentista ou CRO inventado
- ❌ Preço, tabela ou garantia
- ❌ Prazo diferente de 5 dias úteis
- ❌ Foto de banco de imagens com dentista genérico sorrindo — melhor um espaço vazio marcado

---

## 3. Trocar as fotos dos casos

É a seção mais importante do site: é o que convence o dentista.

**Dois passos:**

1. Solte os arquivos em **`src/assets/casos/`**, nomeados `caso-01.jpg`, `caso-02.jpg`, e assim por diante. Aceita `.jpg`, `.jpeg`, `.png`, `.webp` e `.avif`.
2. Em `src/data/casos.ts`, escreva o `alt` e, se quiser, a `legenda` de cada uma:

```ts
{
  arquivo: 'caso-01.jpg',
  alt: 'Protocolo superior em zircônia monolítica',
  legenda: 'Protocolo superior em zircônia monolítica',
}
```

O `alt` **é obrigatório** e precisa descrever o trabalho, não a foto — ele é lido por quem usa leitor de tela e é o que o Google entende da imagem. `legenda` é opcional e aparece sobre a foto e no lightbox.

**Quantas fotos: exatamente 6, todas do mesmo tamanho (4:5).** A grade é de 2 colunas no celular e 3 a partir de 640px, e 6 fecha exata nas duas (3 fileiras ou 2). Não há mais destaque em escala de cartaz: ele tinha a altura de duas fileiras e fazia a seção passar de duas telas de telefone. A escala grande vive no lightbox, a um toque. Se mudar a quantidade, use múltiplo de 6 ou ajuste a grade em `src/components/Galeria.astro`.

**Não coloque as fotos em `public/`.** Só o que está em `src/` é otimizado pelo Astro (AVIF/WebP, tamanhos múltiplos, `width`/`height` automáticos). Uma foto em `public/` vai crua para o navegador e derruba a nota de performance.

Enquanto um arquivo não existir, o site mostra um bloco marcado `XXX-CASO-01` no lugar, com a proporção final — o layout já está certo antes das fotos chegarem.

---

## 4. Colocar as outras fotos

Mesma ideia: solte o arquivo na pasta e pronto, sem editar nada.

| Foto | Pasta | Aparece em |
|---|---|---|
| Trabalho/fluxo da primeira tela | `src/assets/hero/` | Primeira tela, à direita — **já preenchida** |
| Laboratório ou equipe | `src/assets/lab/` | Seção "Sobre" |
| Poster do vídeo | `src/assets/video/` | Capa do vídeo (ver adiante) |
| Fotos das máquinas | `src/assets/maquinas/` | Seção "Tecnologia" (ver abaixo) |
| Foto de dentista de depoimento | `src/assets/depoimentos/` | Cards de depoimento |

Cada pasta usa o **primeiro** arquivo que encontrar. Enquanto estiver vazia, aparece o bloco marcado com `XXX`.

### As fotos das máquinas

A seção "Tecnologia" mostra **foto real de cada equipamento**, não ícone. Isso é deliberado: um ícone de impressora não prova que o laboratório tem uma impressora. Sem as fotos, a seção mostra quatro placeholders marcados, o que é honesto; ícone "provisório" no lugar não é, porque provisório vira definitivo.

Os quatro arquivos, em `src/assets/maquinas/`:

| Arquivo | Equipamento |
|---|---|
| `scanner.jpg` | Scanner intraoral |
| `fresadora.jpg` | Fresadora CAD/CAM |
| `impressora-3d.jpg` | Impressora 3D |
| `forno.jpg` | Forno de sinterização |

Os nomes estão em `TECNOLOGIA`, em `src/data/site.ts`, junto com o chip de cada uma (o que ela resolve para o dentista).

### A primeira tela não tem foto

A primeira tela existia com uma colagem de duas fotos, mas foi removida a pedido do cliente. Hoje é só texto: título, subtítulo, os dois botões e os três badges, todos centralizados.

A foto do escaneamento (`src/assets/hero/scanner-intraoral.jpg`) e o texto alternativo dela (`HERO.fotoAlt`, em `src/data/site.ts`) **continuam no projeto, sem uso**. Se um dia quiser reintroduzir uma imagem ali, os dois já estão prontos — é reescrever o bloco em `src/components/sections/Hero.astro`, não recomeçar do zero.

---

## 5. Colocar o vídeo

O vídeo vertical (9:16, estilo reels) tem **três passos**:

1. Coloque o arquivo em **`public/video/reels.mp4`**.
2. Coloque o frame de capa em **`src/assets/video/`** (qualquer nome).
3. Em `src/data/site.ts`, mude `MOSTRAR_VIDEO` para `true`.

### Como funciona (e por que importa)

Ao abrir a página, **só a imagem de capa é carregada**. O vídeo em si só baixa depois que a pessoa toca no play. Isso se chama *facade* e é o que mantém o site rápido no celular — um vídeo carregando junto com a página derrubaria a nota de performance e gastaria o 4G do dentista sem ele pedir.

### Por que arquivo local e não embed do Instagram

O embed do reels carrega o SDK do Instagram (centenas de kB de JavaScript de terceiro), derruba a performance, e faz o site depender do Instagram para exibir a própria prova. Se o post for apagado ou o perfil ficar privado, o site quebra. O `.mp4` local não tem nenhum desses problemas.

Se ainda assim quiser o embed, ele substitui o conteúdo de `src/components/VideoFacade.astro` — mas o carregamento tem que continuar acontecendo **só depois do clique**.

---

## 6. Preencher os depoimentos

A seção está construída e **desligada**, porque ainda não há depoimento nenhum.

1. Preencha os três itens em `src/data/depoimentos.ts`:

```ts
{
  nome: 'Dra. Fulana de Tal',
  cro: 'CRO-RJ 12345',
  texto: 'O que o dentista falou, nas palavras dele.',
  foto: null,
}
```

Para usar foto, troque `null` pelo nome do arquivo (`'fulana.jpg'`) e coloque o arquivo em `src/assets/depoimentos/`.

2. Em `src/data/site.ts`, mude `MOSTRAR_DEPOIMENTOS` para `true`.

Sem foto, o card mostra as iniciais do nome em um círculo — fica correto do mesmo jeito.

**Há uma trava dupla:** mesmo que a flag seja ligada por engano antes de preencher, a seção não renderiza cards vazios em produção. Ela só aparece quando existe conteúdo de verdade.

---

## 7. Trocar o logo e regerar os ícones

O logo oficial da marca está em **`public/logo.png`** — o monograma NS, com fundo transparente.

Para trocar por uma versão nova:

1. Sobrescreva `public/logo.png`.
2. Rode:

```bash
npm run icons
```

Isso regera `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png` e `og-image.jpg` a partir do arquivo novo.

**Regras do logo:** não recolorir, não distorcer, não adicionar sombra, sempre sobre fundo escuro.

### Por que os ícones têm fundo escuro

O "N" do monograma é off-white e o arquivo tem fundo transparente. Numa aba de navegador em tema claro — o padrão da maioria das pessoas — um N branco sobre transparência simplesmente desaparece. Por isso o `npm run icons` achata todos os ícones sobre `#0C1014`, o mesmo fundo do site, em vez de gerá-los transparentes.

### Uma limitação a resolver quando puder

O arquivo atual é **raster de baixa resolução**: o desenho ocupa 123×119 px. Isso é suficiente para o header (36px), o rodapé (40px) e o apple-touch-icon (180px), mas fica levemente macio quando ampliado — como no og-image. **Vale pedir o arquivo vetorial (`.svg`, `.ai` ou `.eps`) a quem desenhou o logo.** Com um SVG, todos os tamanhos ficam nítidos e o favicon volta a poder ser vetorial.

⚠️ **O `og-image.jpg` merece atenção separada.** Ele é a miniatura que aparece toda vez que alguém manda o link do site no WhatsApp ou no Instagram. O gerado pelo `npm run icons` é um placeholder decente, mas o definitivo deveria ser **a foto de um caso bonito + o logo**, montado à mão em 1200×630 e salvo direto em `public/og-image.jpg`.

---

## 8. Ativar GTM, Pixel e GA4

Hoje **nenhum script de terceiro é carregado**. Nada de Google, nada de Meta. A estrutura está pronta para plugar quando o tráfego pago começar.

### Como ligar

1. Copie o exemplo:

```bash
cp .env.example .env
```

2. Preencha **só o que você já tem** em `.env`:

```
PUBLIC_GTM_ID=GTM-XXXXXXX
PUBLIC_META_PIXEL_ID=123456789012345
PUBLIC_GA4_ID=G-XXXXXXXXXX
```

3. Rode `npm run build` e publique. Cada variável preenchida injeta o script correspondente; as vazias não injetam nada.

Na Vercel ou no Cloudflare, as mesmas variáveis vão em **Settings → Environment Variables** (não suba o `.env` para o Git — ele já está no `.gitignore`).

### O que já é medido sozinho

Todo clique em WhatsApp — são 13 pontos na página — dispara um evento identificando de onde o clique veio:

```js
dataLayer.push({ event: 'whatsapp_click', origem: 'hero' })
fbq('track', 'Contact', { origem: 'hero' })
```

Os valores possíveis de `origem` são as chaves de `WA_MESSAGES`: `header`, `hero`, `analogico`, `visita`, `digital`, `proteseFixa`, `estetica`, `fluxoDigital`, `cad`, `galeria`, `consultoria`, `bairro`, `ctaFinal`. As três primeiras (`analogico`, `visita`, `digital`) são as três portas de entrada da seção "Atendemos três tipos de dentista" — cada uma identifica de qual perfil de dentista o lead veio antes mesmo de você abrir a conversa.

No GTM, crie um gatilho de **Evento personalizado** com o nome `whatsapp_click` e use `origem` como variável para saber qual seção converte.

---

## 9. Registrar o domínio

O domínio **ainda não foi registrado**. Sugestões a validar:

- `laboratoriodeprotesens.com.br`
- `laboratoriens.com.br`
- `protesens.com.br`

Registre no **Registro.br** (https://registro.br).

⚠️ **Duas coisas importantes antes de registrar:**

**Titularidade.** O laboratório não tem CNPJ. Pessoa física **pode** registrar `.com.br` com CPF (limite de 10 domínios), então nada trava — mas o titular será o CPF de alguém, provavelmente o do André Nascimento. **Decida isso antes de registrar:** transferir titularidade depois é burocrático.

**O Registro.br não hospeda.** Ele só registra o nome. A hospedagem é a Vercel ou o Cloudflare Pages (passo 10), e o Registro.br só aponta para lá (passo 11).

### Depois de registrar

Em `src/data/site.ts`, preencha:

```ts
export const SITE_URL = 'https://laboratoriodeprotesens.com.br';
```

Isso liga automaticamente três coisas que hoje estão desligadas de propósito:

- o `sitemap.xml` passa a ser gerado (sem domínio, ele apontaria para o lugar errado — pior que não existir)
- a tag `canonical` aparece
- o `og:image` passa a usar endereço absoluto, que é o que o WhatsApp exige para mostrar a miniatura

Descomente também a linha `Sitemap:` em `public/robots.txt`, ajustando o domínio.

---

## 10. Publicar (deploy)

O site é estático: qualquer hospedagem serve. Vercel e Cloudflare Pages são gratuitas para este porte.

### Vercel

1. Suba o projeto para um repositório no GitHub.
2. Em vercel.com, **Add New → Project**, escolha o repositório.
3. A Vercel detecta o Astro sozinha. Confirme:
   - Framework: `Astro`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Se já tiver IDs de tracking, adicione as variáveis em **Settings → Environment Variables**.
5. **Deploy.**

Cada `git push` na branch principal publica de novo, sozinho.

### Cloudflare Pages

Mesma ideia: **Workers & Pages → Create → Pages → Connect to Git**, com build `npm run build` e diretório de saída `dist`.

---

## 11. Apontar o DNS no Registro.br

⚠️ **Não copie valores de DNS de tutorial nenhum, inclusive deste.** A Vercel hoje emite um **CNAME único por projeto** (formato `d1d4fc829fe7bc7c.vercel-dns-017.com`), não o genérico antigo. Um valor fixo copiado de fora faz você apontar o domínio para o lugar errado e o site não sobe.

**O procedimento certo é sempre:**

1. Na Vercel, vá em **Settings → Domains** e adicione o seu domínio.
2. A Vercel mostra um *domain card* com **os registros exatos que ela quer**, para o seu projeto.
3. Copie **aqueles** valores.
4. No Registro.br, entre no domínio → **DNS → Editar Zona** e crie os registros com os valores copiados.
5. Volte na Vercel e espere a verificação. A propagação leva de minutos a algumas horas.

**Formato do que você vai ver** (ilustrativo, para reconhecer os campos — não para copiar):

| Tipo | Nome | Valor |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | o valor único que a Vercel exibir |

No Cloudflare Pages o caminho é o mesmo: **Custom domains → Set up a domain**, e ele informa os registros. Se você transferir os nameservers do domínio para o Cloudflare, ele gerencia a zona inteira e você não mexe mais em registro individual.

---

## 12. Decisões de projeto

Coisas que parecem detalhe e foram escolhidas de propósito. Se alguém for mexer, vale saber por quê.

**O site fala com três perfis de dentista, não um.** O briefing original tratava "fluxo 100% digital" como a promessa central, e isso funcionava como filtro de entrada: quem ainda molda em silicone lia "100% digital" e concluía que o site não era para ele — mas esse é o perfil comercialmente prioritário. A `docs/REPOSICIONAMENTO.md` corrigiu isso: o parque digital virou infraestrutura do laboratório ("o fluxo digital é nosso, não precisa ser o seu"), e a seção "Atendemos três tipos de dentista" (`PORTAS` em `src/data/site.ts`, componente `PorOndeEntra.astro`) atende os três canais de entrada de caso lado a lado, com a porta de migração destacada por cor.

**O contexto de WhatsApp `consultoria` mudou de sentido.** Antes era o CTA genérico "Perguntar se atendem meu bairro" na Área de Atendimento. O reposicionamento redefiniu `consultoria` para a conversa sobre migrar para o digital, e essa mensagem agora vive no bloco "Não exigimos que você seja digital" em Diferenciais. O CTA de bairro passou a usar um contexto novo, `bairro`, com a mensagem antiga. Se você for mexer em qualquer um dos dois, confira `docs/REPOSICIONAMENTO.md` primeiro.

**Fotos em `src/assets/`, não em `public/`.** O Astro só otimiza imagens dentro de `src/`. O briefing original pedia `public/casos/` **e** o componente `<Image>` — as duas coisas são incompatíveis. Ficou `src/assets/casos/`, que atende as duas intenções: o cliente continua só soltando arquivos numa pasta, e as imagens saem em AVIF/WebP com `srcset`.

**Sem `favicon.ico`.** `favicon-32.png` + `favicon-16.png` + `apple-touch-icon.png` cobrem todo navegador em uso. Isso evitou uma dependência extra só para gerar um formato de 1999 — o `npm run icons` roda apenas com o `sharp` que já vem no Astro. Quando chegar o logo em vetor, dá para voltar a servir um `favicon.svg`, que fica nítido em qualquer densidade.

**Anos de experiência calculados, não fixos.** O briefing dizia "+15 anos", mas o André é formado desde 2008 — já são 18. Publicar 15 é se vender por menos, e um número fixo envelhece. Vira conta a partir de `protesistaFormadoEm`.

**Barra inferior no celular, botão flutuante no desktop.** Abaixo de 640px o botão flutuante desaparece e a barra fixa assume. Os dois juntos empilhavam dois alvos verdes no mesmo canto — poluição, não redundância útil.

**Galeria antes do vídeo no celular.** No desktop o vídeo fica ao lado da galeria. No celular ele vai **depois**: um container 9:16 empurraria as fotos dos casos — que são a prova — para baixo de uma tela inteira.

**Sem iframe do Google Maps.** Pesa, carrega scripts de terceiro, e o endereço completo não é público de todo modo.

**Título em serifa de peso 400, nunca bold.** Serifa leve em tamanho grande é o movimento que mais afasta um site da estética de interface gerada. Título em sans-serif bold é o que todo gerador entrega. A revisão de direção pedia Instrument Serif e autorizava Newsreader; ficou **Newsreader**, porque o detector do Impeccable sinaliza Instrument Serif como face saturada (ela é *a* fonte do movimento "serifa editorial") e porque Newsreader é variável, então um arquivo cobre a faixa de peso inteira.

**IBM Plex Sans no corpo, não Inter.** Plex nasceu como tipografia de documentação técnica da IBM, o que serve ao registro editorial da página, e mantém a acentuação que o português exige com numerais tabulares de verdade. Inter foi descartada por ser a face mais associada a interface gerada por IA hoje, o que é exatamente o que a revisão de direção quer evitar.

**Alinhamento à esquerda em tudo, com uma exceção: o herói.** Centralizar tudo é o tique visual mais reconhecível de site gerado. (Havia uma segunda exceção, o manifesto de fechamento, que foi removido do site.)

**Verde escurece na faixa clara.** `#70C81A` sobre `#F2F4F0` dá 1,90:1, muito abaixo do mínimo. A revisão indicava `#4E9310`, mas medido ele dá 3,45:1, que ainda reprova AA para texto normal. Ficou `#3A6F0B`, que dá 5,49:1 na faixa clara e 5,06:1 na menta, e funciona tanto como cor de texto quanto como fundo de botão.

**Fontes copiadas para `public/fonts/`.** Vêm dos pacotes `@fontsource-variable/*`, mas ficam em `public/` para poderem ser pré-carregadas por um caminho estável — o Vite renomearia o arquivo com hash a cada build, e aí o `preload` não serviria para nada. Para atualizar: `npm i @fontsource-variable/sora@latest` e copiar de `node_modules/@fontsource-variable/<fonte>/files/` outra vez.

**O ritmo de faixas.** A página é uma pilha de sete faixas full-bleed: escuro, claro, escuro, claro, escuro, menta, escuro. A borda entre elas é **dura**, sem gradiente de transição: a mudança de fundo é a divisão. Abre e fecha escuro, então o site lê como escuro; as faixas claras existem para dar respiro e porque **prótese fotografada aparece melhor sobre fundo claro**, que é o motivo real delas existirem.

A faixa clara redefine as variáveis de cor. Isso quer dizer que nenhum componente precisa saber em que faixa está: `text-ink`, `text-accent` e `border-hairline` funcionam igual nas duas. Se você criar uma seção nova, ela herda o comportamento sem código condicional.

**O padding vertical das faixas é irregular de propósito** (90px, 140px, 180px). Ritmo perfeitamente regular parece planilha. A faixa de casos é a mais longa porque é a mais importante.

**Sem sombra, sem glow, sem vidro fosco.** As superfícies se separam por cor e espaço. O único gradiente do CSS compilado é a condução pontilhada da ficha de prazos, e ele desenha os pontos: é funcional, não decoração.

**O verde significa uma coisa só:** ativo, em processo, sua vez. CTA, valor numérico, chip de dado, check do filtro ativo. Se ele começar a decorar, a lógica quebra e a página perde o único sinal que ensinou o leitor a obedecer.

**A ficha de prazos.** O cartão da seção "Como funciona" é o elemento mais concreto da página: é o único lugar onde o dentista lê um prazo por tipo de trabalho. A monoespaçada ali é legítima porque ela **mede**; mono em texto corrido seria fantasia de "técnico". A linha com `XXX` é o prazo de modelo e guia impressa, que o cliente não informou. **Não preencha por analogia:** um prazo errado num cartão com cara de documento é pior que um prazo ausente.

**O comentário `DIRECTION CONTRACT` no HTML.** Fica logo no começo do `<body>`, em `src/layouts/Base.astro`. Registra por escrito a direção visual que o site segue. Não é código morto: é o que permite auditar depois se uma alteração ainda respeita a direção. Não apague.

**Sobre travessões.** Nenhum texto que o dentista lê usa travessão (`—`), e isso é regra, não estilo: travessão em profusão é um dos tiques mais reconhecíveis de texto gerado. No lugar dele vão dois-pontos, vírgula, parênteses, ponto final, ou estrutura de marcação. Documentação interna (este README, `docs/`) pode usar à vontade.

---

## 13. Pendências (XXX)

Tudo que falta está marcado com `XXX` no código. O site **funciona e pode ser publicado** assim, mas cada item abaixo o deixa mais forte. Em ordem de impacto:

| Pendência | Onde | Por que importa |
|---|---|---|
| ~~Foto do André~~ | `src/assets/lab/andre-nascimento.png` | **Entregue.** Ele sentado, jaleco com o logo NS, scanner intraoral e a arcada escaneada na tela ao lado. |

> **Nota de procedência, registrada porque eu errei o julgamento uma vez.** O arquivo traz um manifesto C2PA (`c2pa.created` por `gpt-image`, `digitalSourceType: trainedAlgorithmicMedia`) e eu recusei a foto tratando-a como pessoa fabricada. A verificação mostrou o contrário: o rosto bate com os quadros do vídeo que o cliente filmou, e o logo no jaleco bate com `public/logo.png`. O manifesto diz **como os pixels nasceram**, não **se a pessoa existe** — gpt-image marca como `created` mesmo ao reprocessar uma foto enviada. Antes de recusar ou aceitar foto de pessoa neste site, compare com material real. O PNG com o C2PA intacto está em `midia-original/`; o AVIF servido não leva o manifesto, que é como o pipeline do Astro funciona.

Para conferir o que ainda falta em qualquer momento:

```bash
grep -rn "XXX" src/ public/robots.txt
```
