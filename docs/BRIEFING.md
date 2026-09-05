# Briefing — Site Laboratório NS

> Documento de especificação para construção do site. Leia tudo antes de escrever código.
> Tudo marcado como `XXX` é placeholder a ser preenchido depois pelo cliente — deixe visível e fácil de localizar.

---

## 0. Como usar este documento (fluxo com Impeccable)

Este projeto usa o **Impeccable** (https://impeccable.style) como camada de qualidade de design. Ordem de execução:

```bash
mkdir laboratorio-ns && cd laboratorio-ns
git init
npx impeccable install          # requer Node 22.12+
# salvar este arquivo como docs/BRIEFING.md
```

Depois, dentro do agente:

1. `/impeccable init` — o contexto completo já está em `docs/BRIEFING.md`. Leia esse arquivo antes de perguntar qualquer coisa; a entrevista deve ser só de confirmação e lacunas. O `PRODUCT.md` gerado deve refletir: público = cirurgiões-dentistas da Zona Sul do Rio e Barra da Tijuca; proposta = prótese digital de alta precisão com consultoria presencial e entrega em 5 dias úteis; conversão = WhatsApp, sem formulário.
2. `/impeccable shape` — definir a direção visual e o mock da primeira tela **antes** de codar.
   - **Paleta é restrição travada**, não escolha: os hexes da seção 3 saíram do logo da marca. Não propor paleta alternativa.
   - **Tipografia está aberta.** Sora/Inter na seção 3 é sugestão de partida — se houver par melhor para dark premium + monograma geométrico, proponha e justifique.
   - Direção obrigatória: dark do topo ao rodapé, verde como acento pontual, muito espaço negativo, foto de trabalho real como herói da página.
3. Construir o site seguindo as seções 1–10 deste documento e a direção aprovada no shape.
4. Antes de publicar: `/impeccable audit` → `/impeccable polish` → `/impeccable harden`.

Onde este briefing e o Impeccable divergirem em **conteúdo, dados de contato ou regras de negócio**, este briefing vence. Em **execução visual e refinamento de interface**, o Impeccable vence.

---

## 1. Contexto do negócio

**Laboratório NS** é um laboratório de prótese odontológica no Rio de Janeiro, em operação desde **2017**. O COO é formado desde **2008** e dedicou toda a carreira exclusivamente a essa área.

O laboratório trabalha com **fluxo 100% digital** (scanner intraoral, impressora 3D, fresadora, forno de zircônia) e oferece **consultoria lado a lado com o dentista**, incluindo visitas presenciais ao consultório.

**Quem o site precisa atrair:** cirurgiões-dentistas da **Zona Sul do Rio e Barra da Tijuca**. Não é site para paciente final — toda a linguagem, provas e argumentos são direcionados ao dentista como cliente B2B.

**Objetivo único do site:** levar o dentista para o **WhatsApp**. Não há formulário, não há área logada, não há e-commerce. O site é uma peça de credibilidade + conversão para WhatsApp.

---

## 2. Requisitos técnicos

### Stack
- **Astro + Tailwind CSS**, saída **estática** (`output: 'static'`).
  Motivo: site institucional one-page, sem backend, sem formulário — Astro entrega HTML puro, LCP baixíssimo e SEO impecável, e roda em qualquer hospedagem. Se preferir Next.js estático, tudo bem, mas não use nada que exija servidor Node em runtime.
- Sem CMS. Todo o conteúdo em um arquivo de dados central (`src/data/site.ts` ou `.json`) para o cliente editar sem mexer em componentes: telefone, textos, lista de serviços, depoimentos, links.
- Sem dependências pesadas. Nada de bibliotecas de animação de 100kb. Animações com CSS + `IntersectionObserver` nativo.
- Ícones: SVG inline ou `astro-icon` com Lucide. Sem fonte de ícones.

### Hospedagem e domínio
- Domínio ainda **não registrado** — será comprado no **Registro.br** (`.com.br`).
  Sugestões a validar com o cliente: `laboratoriodeprotesens.com.br`, `laboratoriens.com.br`, `protesens.com.br`.
- Registro.br é apenas registrador, não hospeda. **Deploy na Vercel ou Cloudflare Pages** (ambos gratuitos para esse porte).
- Entregar no README as **instruções exatas de DNS**: quais registros A/CNAME apontar no painel do Registro.br para a Vercel/Cloudflare.

### Performance (obrigatório)
- Lighthouse mobile ≥ 95 em Performance, Acessibilidade, Best Practices e SEO.
- Imagens: componente `<Image>` do Astro, WebP/AVIF, `loading="lazy"` em tudo abaixo da dobra, `width`/`height` sempre declarados para evitar CLS.
- Vídeo: **nunca autoplay com download automático**. Usar poster estático + play sob clique (facade). Detalhes na seção 6.7.
- Fontes com `font-display: swap` e `preload` só da fonte do H1.

---

## 3. Identidade visual

### Logo
Arquivo enviado pelo cliente: monograma **"NS"** — um "N" branco/off-white com um "S" verde-limão desenhado como um traço circular envolvendo a letra, sobre fundo escuro circular.

- Colocar em `public/logo.png` (e gerar `logo.svg` se possível).
- Gerar favicon a partir do monograma (`favicon.ico`, `apple-touch-icon.png` 180×180, `og-image.jpg` 1200×630).
- **Não recolorir, não distorcer, não adicionar sombra.** Sempre sobre fundo escuro.

### Paleta (extraída do logo)

| Token | Hex | Uso |
|---|---|---|
| `bg-base` | `#0C1014` | Fundo principal do site |
| `bg-elevated` | `#191919` | Cards, seções alternadas, header |
| `bg-hover` | `#22262A` | Hover de cards e superfícies |
| `accent` | `#70C81A` | Verde da marca — CTAs, destaques, ícones, números |
| `accent-hover` | `#5FAF14` | Hover de botões verdes |
| `accent-soft` | `rgba(112,200,26,0.12)` | Fundo de badges e glows |
| `text-primary` | `#E3E3E1` | Títulos e texto principal |
| `text-secondary` | `#9CA3A1` | Texto de apoio, legendas |
| `border` | `rgba(227,227,225,0.10)` | Bordas sutis de cards |

**Regras de cor:**
- O site é **dark premium**. Fundo escuro em 100% das seções — não existe seção clara.
- O verde é **acento, não fundo**. Nunca faça um bloco inteiro verde. Use no CTA, em ícones, em números de destaque, em linhas/detalhes.
- Texto branco puro (`#FFFFFF`) é proibido — usar `#E3E3E1`. Reduz o brilho em tela escura.
- Contraste mínimo AA em tudo. Verde `#70C81A` sobre `#0C1014` passa; verde sobre branco **não** — se precisar de verde em superfície clara, escurecer para `#4E9310`.

### Tipografia
- Títulos: **Sora** ou **Space Grotesk** (geométrica, técnica, combina com o monograma). Pesos 600/700.
- Corpo: **Inter**. Pesos 400/500.
- Servir via `@fontsource` local (não Google Fonts CDN) para performance e LGPD.
- Escala: H1 `clamp(2.25rem, 5vw, 4rem)`, H2 `clamp(1.75rem, 3.5vw, 2.75rem)`, corpo `1.0625rem` com `line-height: 1.7`.

### Linguagem visual
- Muito espaço negativo. Seções com `padding-block` generoso (96–128px desktop, 64px mobile).
- Cards com borda de 1px sutil + leve gradiente radial verde no canto, não com sombra pesada.
- Fotos de trabalhos em destaque, com bordas arredondadas (`rounded-2xl`) e leve ring verde no hover.
- Animações: fade + slide-up de 16px ao entrar na viewport, duração 500ms, `ease-out`. Respeitar `prefers-reduced-motion`.

---

## 4. Dados oficiais (usar exatamente assim)

```
Nome:        Laboratório NS
Segmento:    Laboratório de prótese odontológica
Desde:       2017
WhatsApp:    (21) 97036-4832
Link wa.me:  https://wa.me/5521970364832
E-mail:      laboratoriodeprotesens@gmail.com
Instagram:   https://www.instagram.com/laboratorio.ns/
Localização: Copacabana, Rio de Janeiro — RJ
Atendimento: Zona Sul do Rio de Janeiro e Barra da Tijuca
Prazo médio: 5 dias úteis
```

**Atenção — dados que NÃO existem, não invente:**
- **Não há CNPJ.** A operação é por RPA. O rodapé **não deve** conter CNPJ nem razão social. Só o nome "Laboratório NS".
- Não há endereço completo divulgado (só o bairro, Copacabana). Não invente rua/número.
- Não há horário de funcionamento definido → usar `XXX` ou omitir.
- Não há número exato de dentistas atendidos ou casos entregues → **não invente estatísticas**. Usar as formulações qualitativas da seção 6.2.

---

## 5. Estratégia de conversão para WhatsApp

O dentista precisa conseguir ir pro WhatsApp **de qualquer ponto da página, a qualquer momento**. Implementar todos estes pontos:

1. **Botão flutuante fixo** — canto inferior direito, visível em 100% do scroll, desktop e mobile. Círculo verde `#70C81A` com ícone do WhatsApp, `56px` mobile / `64px` desktop. Micro-animação de pulso sutil a cada ~6s. `z-index` acima de tudo. Em mobile, respeitar `safe-area-inset-bottom`.
2. **Botão no header** — sticky, sempre visível. Rótulo "Falar no WhatsApp".
3. **CTA primário do hero.**
4. **CTA ao final de cada seção principal** — serviços, tecnologia, casos, fluxo, área de atendimento. Alternar entre botão sólido e link com seta para não cansar.
5. **Faixa de CTA full-width antes do rodapé** — o fechamento mais forte da página.
6. **Rodapé** — telefone clicável + WhatsApp + Instagram + e-mail.
7. **Mobile:** barra fixa inferior com "Falar no WhatsApp" (além do botão flutuante, ou substituindo-o em telas < 640px — escolher o que ficar menos poluído e documentar a escolha).

### Mensagens pré-preenchidas por contexto
Cada CTA leva uma mensagem diferente, para o laboratório saber de onde veio o lead:

| Origem | Texto (URL-encoded no `?text=`) |
|---|---|
| Header / flutuante | `Olá! Vim pelo site do Laboratório NS e gostaria de falar com vocês.` |
| Hero | `Olá! Sou dentista e quero conhecer o fluxo digital do Laboratório NS.` |
| Prótese fixa / protocolo | `Olá! Tenho interesse em prótese fixa / protocolo. Podemos conversar?` |
| Estética (lentes/facetas) | `Olá! Quero falar sobre casos de estética — lentes e facetas.` |
| Fluxo digital | `Olá! Quero saber como funciona o envio de casos digitais para o laboratório.` |
| Galeria de casos | `Olá! Vi os casos no site e gostaria de conversar sobre um trabalho.` |
| Consultoria / visita | `Olá! Gostaria de agendar uma visita/consultoria no meu consultório.` |
| CTA final / rodapé | `Olá! Quero começar a trabalhar com o Laboratório NS.` |

Implementar como helper: `waLink(context: keyof typeof WA_MESSAGES): string`, centralizado no arquivo de dados. Todos os links com `target="_blank" rel="noopener"`.

---

## 6. Estrutura da página (one-page com âncoras)

Navegação do header com âncoras suaves: `Serviços · Tecnologia · Casos · Como funciona · Contato` + botão WhatsApp.

### 6.1 Hero
- Logo NS no header. Fundo escuro com glow radial verde muito sutil atrás do conteúdo.
- **H1:** `Prótese digital de alta precisão para dentistas do Rio.`
- **Subtítulo:** `Fluxo 100% digital — scanner intraoral, fresadora, impressora 3D e forno de zircônia. Casos entregues em 5 dias úteis, com acompanhamento lado a lado do início ao fim.`
- CTA primário: **Falar no WhatsApp** (verde sólido). CTA secundário: **Ver casos** (âncora, botão fantasma com borda).
- Badges discretos abaixo: `Desde 2017` · `Zona Sul e Barra` · `Entrega em 5 dias úteis`
- Imagem/vídeo de apoio: foto de um trabalho em zircônia ou frame do reels. Se não houver arquivo ainda, usar um bloco placeholder identificado como `XXX-HERO-MEDIA`.

### 6.2 Faixa de credibilidade
Quatro itens em linha (2×2 no mobile). **Sem números inventados** — usar exatamente:

| Destaque | Legenda |
|---|---|
| `2017` | Laboratório em operação |
| `+15 anos` | De experiência do COO, dedicados só à prótese |
| `5 dias` | Prazo médio de entrega |
| `Milhares` | De dentes entregues |

O número/palavra em verde e grande; a legenda em `text-secondary`.

### 6.3 Serviços
Três cards. Ícone + título + descrição + link "Falar sobre isso →" com a mensagem de WhatsApp específica.

**1. Prótese fixa e protocolo**
`Coroas, pontes e protocolos sobre implante com adaptação passiva. Zircônia monolítica e estratificada, metalocerâmica e PMMA para provisórios de longa duração. Planejamento digital antes da usinagem — o que você aprova é o que chega no consultório.`

**2. Estética — lentes e facetas**
`Lentes de contato dental e facetas em dissilicato de lítio (E-max), com caracterização e escolha de cor acompanhada de perto. Mock-up digital e ensaio restaurador para o paciente ver o resultado antes de qualquer desgaste.`

**3. Fluxo digital — CAD/CAM, 3D e guias**
`Recebemos seu escaneamento intraoral direto do consultório. Modelagem em CAD, usinagem em fresadora, impressão 3D de modelos e guias, sinterização em forno de zircônia próprio. Sem moldagem convencional, sem retrabalho por distorção de gesso.`

### 6.4 Como funciona (fluxo)
Cinco passos numerados, em timeline horizontal no desktop e vertical no mobile. Numeração em verde.

1. **Você envia o caso** — `Escaneamento intraoral, arquivo STL ou moldagem convencional. Recebemos pelo WhatsApp ou pela plataforma do seu scanner.`
2. **Planejamento digital** — `Modelamos o caso em CAD e alinhamos com você o que for necessário antes de produzir.`
3. **Produção** — `Fresagem, impressão 3D e sinterização em zircônia, tudo no nosso parque próprio.`
4. **Acabamento e conferência** — `Caracterização, ajuste de cor e conferência final peça por peça.`
5. **Entrega em 5 dias úteis** — `Trabalho pronto no seu consultório, com suporte direto se precisar de qualquer ajuste.`

CTA ao final: `Mandar meu primeiro caso →`

### 6.5 Tecnologia / parque digital
Grid de quatro cards com ícone e uma linha de explicação **do benefício para o dentista**, não só o nome do equipamento:

- **Scanner intraoral** — `Fim da moldagem em silicone: o paciente sai do consultório com o caso já digitalizado.`
- **Fresadora CAD/CAM** — `Usinagem em zircônia e PMMA com precisão de micra e repetibilidade total.`
- **Impressora 3D** — `Modelos, guias cirúrgicas e ensaios restauradores prontos em horas.`
- **Forno de sinterização de zircônia** — `Ciclo controlado dentro de casa — sem terceirizar a etapa mais crítica da peça.`

Bloco de materiais logo abaixo, como chips/badges: `Zircônia` · `E-max (dissilicato de lítio)` · `PMMA` · `Metalocerâmica`

### 6.6 Diferenciais
Três blocos, texto curto:

- **Fluxo 100% digital** — `Do escaneamento à entrega sem uma única etapa analógica. Menos variável, menos retrabalho, menos cadeira.`
- **Consultoria lado a lado** — `Visitamos seu consultório e acompanhamos o caso junto com você. Não somos um laboratório que só recebe arquivo e devolve peça.`
- **Experiência de mercado** — `Mais de 15 anos dedicados exclusivamente à prótese. Você conversa com quem produz, não com um atendente.`

### 6.7 Galeria de casos + vídeo
A seção mais importante da página — é a prova para o dentista.

**Galeria:**
- Grid masonry ou 3 colunas (1 no mobile, 2 em tablet).
- Lightbox nativo simples ao clicar (sem biblioteca pesada — `<dialog>` + JS mínimo). Navegação por setas e ESC.
- Estrutura pronta para receber de **12 a 20 fotos**. Enquanto o cliente não envia, gerar placeholders numerados `XXX-CASO-01` … `XXX-CASO-12` com aspect ratio 4:5, para o layout já ficar correto.
- Cada foto lê `alt` e `legenda` opcional do arquivo de dados (ex.: `"Protocolo superior em zircônia monolítica"`). Legendas descritivas ajudam o SEO.
- Diretório: `public/casos/`. Documentar no README como o cliente troca as fotos: soltar os arquivos na pasta e editar a lista em `src/data/casos.ts`.

**Vídeo (reels):**
- O cliente tem um vídeo em formato vertical (9:16), estilo reels, dos bastidores/trabalhos.
- Renderizar em destaque ao lado ou acima da galeria, em container 9:16 com largura máxima de ~380px no desktop.
- **Facade obrigatório:** exibir apenas a imagem de poster; o `<video>` (ou iframe do Instagram/YouTube) só carrega após o clique no play. Nunca carregar o vídeo no load da página.
- Suportar dois cenários e deixar documentado qual usar: (a) arquivo `.mp4` local em `public/video/` com `<video controls playsinline poster>`; (b) embed do reels do Instagram. Preferir o **(a)** por performance e por não depender do Instagram.
- Placeholder: `XXX-VIDEO-REELS` e `XXX-VIDEO-POSTER`.

CTA ao final: `Quero um trabalho assim →`

### 6.8 Depoimentos
`XXX` — **o cliente vai preencher depois diretamente no código.**

Construir a seção completa e funcional (3 cards em carrossel simples ou grid), com **3 depoimentos placeholder** claramente marcados:

```ts
{ nome: "XXX", cro: "CRO-RJ XXX", texto: "XXX", foto: null }
```

Cada card: aspas em verde, texto do depoimento, nome do dentista, CRO, e foto circular opcional (fallback com iniciais em fundo `bg-elevated` quando `foto === null`). Se o array estiver com todos os campos em `XXX`, **a seção deve se auto-ocultar em produção** via flag `MOSTRAR_DEPOIMENTOS = false` no arquivo de dados — assim o site pode ir ao ar sem a seção quebrada, e basta virar a flag depois.

### 6.9 Sobre o laboratório
Bloco com foto do laboratório/equipe (`XXX-FOTO-LAB`) e texto:

`O Laboratório NS nasceu em 2017 em Copacabana, mas a história começou antes: nosso COO é formado desde 2008 e dedicou todos esses anos exclusivamente à prótese odontológica. Foram milhares de dentes entregues, e a mesma obsessão por adaptação e estética desde o primeiro caso. Hoje operamos com fluxo totalmente digital e trabalhamos lado a lado com o dentista — inclusive presencialmente, no seu consultório, quando o caso pede.`

### 6.10 Área de atendimento
- Texto: `Atendemos cirurgiões-dentistas da Zona Sul do Rio de Janeiro e da Barra da Tijuca, com retirada e entrega no consultório.`
- Lista de bairros em chips (bom para SEO local): `Copacabana` · `Ipanema` · `Leblon` · `Botafogo` · `Flamengo` · `Laranjeiras` · `Humaitá` · `Gávea` · `Jardim Botânico` · `Leme` · `Urca` · `Barra da Tijuca` · `Recreio`
- **Não** embedar iframe do Google Maps (pesa e o endereço completo não é público). Se quiser referência visual, usar um SVG estilizado ou simplesmente omitir.
- CTA: `Meu consultório é em [bairro]. Vocês atendem? →`

### 6.11 CTA final
Faixa full-width, fundo `bg-elevated` com glow verde.
- **Título:** `Manda seu próximo caso pra gente.`
- **Texto:** `Resposta rápida no WhatsApp, direto com quem produz. Sem formulário, sem espera.`
- Botão grande: **Falar no WhatsApp**

### 6.12 Rodapé
- Logo NS + linha `Laboratório de prótese odontológica · Rio de Janeiro`
- Links de navegação (âncoras)
- Contato: WhatsApp `(21) 97036-4832` (clicável), e-mail `laboratoriodeprotesens@gmail.com`, Instagram `@laboratorio.ns`
- `Copacabana, Rio de Janeiro — RJ`
- `© 2026 Laboratório NS. Todos os direitos reservados.`
- **Sem CNPJ, sem razão social, sem endereço completo.**

---

## 7. SEO

- `<title>`: `Laboratório NS — Prótese Odontológica Digital no Rio de Janeiro`
- `<meta description>`: `Laboratório de prótese odontológica em Copacabana com fluxo 100% digital: CAD/CAM, impressão 3D e zircônia. Entrega em 5 dias úteis para dentistas da Zona Sul e Barra da Tijuca.`
- Open Graph + Twitter Card completos, com `og:image` 1200×630 (usar um caso bonito + logo).
- **Um único H1** na página. Hierarquia H2/H3 correta nas seções.
- `lang="pt-BR"`, `canonical`, `robots.txt` e `sitemap.xml` (integração `@astrojs/sitemap`).
- **JSON-LD `LocalBusiness`** (tipo `MedicalBusiness` ou `ProfessionalService`) com: `name`, `description`, `telephone` `+5521970364832`, `email`, `image`, `url`, `sameAs` (Instagram), `address` com `addressLocality: "Copacabana"`, `addressRegion: "RJ"`, `addressCountry: "BR"` — **sem `streetAddress`**, e `areaServed` listando Zona Sul e Barra da Tijuca. Não incluir `openingHours` nem `priceRange` (dados inexistentes).
- Palavras-chave a trabalhar naturalmente no texto (nada de keyword stuffing): *laboratório de prótese dentária Rio de Janeiro*, *laboratório de prótese digital RJ*, *prótese em zircônia Rio*, *laboratório de prótese Copacabana*, *laboratório de prótese Zona Sul*, *laboratório de prótese Barra da Tijuca*, *lentes de contato dental laboratório RJ*.
- Alt text real e descritivo em todas as fotos de casos.

---

## 8. Tracking

**Ainda não existe** Pixel do Meta, GA4 nem GTM. O cliente vai rodar tráfego pago no futuro (Meta e/ou Google Ads), então **deixe tudo pronto para plugar depois**:

- Variáveis de ambiente em `.env.example`:
  ```
  PUBLIC_GTM_ID=
  PUBLIC_META_PIXEL_ID=
  PUBLIC_GA4_ID=
  ```
- Componente `<Analytics />` que só injeta os scripts se a variável correspondente estiver preenchida. Com as três vazias, **nenhum script de terceiros é carregado**.
- Todos os CTAs de WhatsApp devem disparar um evento padronizado quando houver tracking ativo:
  ```js
  window.dataLayer?.push({ event: 'whatsapp_click', origem: '<contexto do CTA>' })
  ```
  e, se o Pixel estiver ativo, `fbq('track', 'Contact', { origem })`. Envolver em guard para não quebrar quando não houver tracking.
- Documentar no README, em passo a passo, como o cliente ativa cada um depois.

---

## 9. Acessibilidade e qualidade

- Contraste AA em todo texto. Foco visível (`focus-visible` com ring verde) em todos os elementos interativos.
- Navegação completa por teclado, incluindo o lightbox da galeria (trap de foco, ESC fecha).
- `aria-label` no botão flutuante de WhatsApp e em todo botão que seja só ícone.
- Skip link para o conteúdo principal.
- `prefers-reduced-motion: reduce` desativa todas as animações de entrada.
- Testar em 360px, 768px, 1280px e 1920px.

---

## 10. Entregáveis

1. Projeto Astro completo, rodando com `npm install && npm run dev`.
2. `src/data/site.ts` — todo conteúdo editável centralizado (contatos, serviços, passos, tecnologia, materiais, bairros, mensagens de WhatsApp, flags).
3. `src/data/casos.ts` — lista de fotos da galeria.
4. `README.md` em português cobrindo: como rodar, como trocar textos, como adicionar/trocar fotos de casos, como colocar o vídeo, como preencher os depoimentos e ligar a flag, como ativar GTM/Pixel/GA4, como fazer deploy e como apontar o DNS do Registro.br.
5. Lista final e explícita de **todos os `XXX` pendentes**, com o caminho do arquivo e a linha de cada um.

---

## 11. Checklist de "não faça"

- ❌ Não invente CNPJ, razão social, endereço completo, horário de funcionamento ou número de clientes.
- ❌ Não invente depoimentos, nomes de dentistas ou CROs — só `XXX`.
- ❌ Não crie formulário de contato. Todo caminho vai para o WhatsApp.
- ❌ Não crie área de login, orçamento online ou tabela de preços.
- ❌ Não use seção de fundo claro. O site é dark do topo ao rodapé.
- ❌ Não use imagem de banco de imagens com dentista genérico sorrindo. Se faltar foto, use placeholder marcado — é melhor um espaço vazio identificado do que stock photo.
- ❌ Não carregue o vídeo no load da página.
- ❌ Não coloque preços, prazos diferentes de 5 dias úteis, ou promessas de garantia que não foram informadas.
