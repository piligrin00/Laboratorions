# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 com saída estática (`output: 'static'`) + Tailwind CSS 4 via `@tailwindcss/vite`. Sem CMS, sem backend, sem runtime Node. Deploy previsto em Vercel ou Cloudflare Pages; domínio `.com.br` a registrar no Registro.br. Decidido no briefing do cliente (`docs/BRIEFING.md` seção 2), não delegado.

## Users

**Três perfis de cirurgião-dentista, todos na Zona Sul do Rio de Janeiro ou na Barra da Tijuca.** A versão inicial do site falava só com o terceiro; a revisão de posicionamento (`docs/REPOSICIONAMENTO.md`) corrigiu isso porque os dois primeiros são a prioridade comercial.

1. **Ainda molda em silicone ou gesso.** Não tem scanner e não é o trabalho dele ter. O caso chega ao laboratório por retirada com motoboy, e é o próprio laboratório quem digitaliza. É o perfil mais numeroso e o mais fácil de perder: se o site soa "só para quem já é digital", ele conclui sozinho que não é para ele.
2. **Quer migrar para o digital, mas ainda não decidiu.** Este é o alvo comercial prioritário — abre consultoria e cria dependência de longo prazo. O laboratório vai ao consultório dele com o scanner intraoral, escaneia o paciente na cadeira, e ele vê o fluxo funcionar antes de decidir comprar qualquer equipamento.
3. **Já escaneia e manda STL.** É quem o site atendia sozinho antes da revisão. Converte rápido, mas é uma fatia do mercado, não o mercado inteiro.

Situação típica de qualquer um dos três: chegou pelo Instagram, por indicação de outro dentista ou por busca. Está em dúvida se o laboratório tem parque próprio de verdade, se o prazo se sustenta, e se vai ter alguém competente do outro lado quando um caso complicar. Provavelmente está no celular, entre pacientes, com poucos minutos.

O trabalho que ele quer resolver: **decidir se vale mandar o próximo caso para este laboratório**, no formato que ele já usa hoje, sem precisar mudar de rotina primeiro — e, se sim, falar com alguém imediatamente.

**Não é um site para paciente final.** Toda linguagem, prova e argumento se dirigem ao dentista como cliente B2B. Nenhuma seção fala com quem vai usar a prótese.

## Product Purpose

O Laboratório NS é um laboratório de prótese odontológica em Copacabana, em operação desde 2017, com fluxo 100% digital.

O site existe para uma coisa só: **levar o dentista para o WhatsApp**. Não há formulário, área logada, e-commerce, orçamento online ou tabela de preços. O site é peça de credibilidade seguida de conversão — o sucesso é medido em conversas iniciadas no WhatsApp, não em tempo de permanência.

Sucesso: o dentista entende em menos de um minuto que pode mandar o próximo caso **do jeito que já trabalha hoje** — arquivo, molde físico ou visita com scanner — e que o laboratório tem parque digital próprio, prazo de 5 dias úteis e consultoria presencial. E abre o WhatsApp.

## Positioning

**Eixo central (`docs/REPOSICIONAMENTO.md`): "O fluxo digital é nosso. Não precisa ser o seu."** O parque de máquinas deixa de ser pré-requisito do dentista e vira infraestrutura do laboratório. Isso transforma a mesma capacidade técnica de barreira de entrada em benefício, e serve aos três perfis de usuário ao mesmo tempo, em vez de filtrar quem ainda não escaneia.

Três coisas que um laboratório vizinho não poderia copiar honestamente:

1. **Aceita o dentista onde ele está.** Molde físico com retirada por motoboy, visita com scanner intraoral no consultório dele, ou STL direto. A maioria dos laboratórios "digitais" só aceita arquivo — isso sozinho já exclui os dois primeiros perfis.
2. **Parque digital completo dentro de casa** — scanner intraoral, fresadora CAD/CAM, impressora 3D e forno de sinterização de zircônia próprio. A sinterização, a etapa mais crítica da peça, não é terceirizada. A maioria dos laboratórios do porte terceiriza pelo menos uma dessas etapas.
3. **Consultoria lado a lado, inclusive presencial** — o laboratório visita o consultório e acompanha o caso junto com o dentista. Não é "recebe arquivo, devolve peça". E o dentista fala com quem produz, não com um atendente.

Somado a isso: André Nascimento, protesista responsável, é formado desde 2008 e dedicou a carreira inteira à prótese — não é um laboratório generalista que também faz prótese. Ele veio de outra profissão (foi militar) e escolheu essa.

## Operating Context

**Três canais de entrada de caso, não um só (`docs/REPOSICIONAMENTO.md`):**
1. **Molde físico** — o dentista molda em silicone ou gesso como sempre fez; o laboratório busca com motoboy e digitaliza internamente.
2. **Visita com scanner** — o laboratório vai ao consultório do dentista, escaneia o paciente na cadeira com o próprio intraoral, e planeja o caso junto. É o canal comercialmente prioritário: é onde um dentista analógico experimenta o digital sem comprar nada.
3. **Arquivo direto** — o dentista já escaneia e manda o STL pelo WhatsApp ou pela plataforma do próprio scanner.

**Fluxo real de um caso, a partir daí:**
1. O caso chega, por qualquer um dos três canais acima.
2. Modelagem em CAD, com alinhamento com o dentista antes de produzir.
3. Produção: fresagem, impressão 3D, sinterização em zircônia, tudo no parque próprio.
4. Acabamento: caracterização, ajuste de cor, conferência peça por peça.
5. Entrega no consultório em 5 dias úteis, com suporte direto para ajustes.

**Logística:** retirada e entrega no consultório na Zona Sul do Rio e na Barra da Tijuca. Fora dessa área o atendimento é **caso a caso** — não é recusado, é combinado. O texto do site não deve fechar a porta para um dentista da Tijuca, do Centro ou de Niterói.

**Canal de contato:** WhatsApp `(21) 97036-4832`, exclusivamente. É por onde os casos chegam e por onde o suporte acontece. O e-mail e o Instagram existem, mas não são o caminho de conversão.

**Contexto de consumo do site:** majoritariamente mobile, em fração de minuto, entre atendimentos.

## Capabilities and Constraints

**Serviços confirmados:**
- Prótese fixa e protocolo sobre implante — zircônia monolítica e estratificada, metalocerâmica, PMMA para provisórios de longa duração.
- Estética — lentes de contato dental e facetas em dissilicato de lítio (E-max), com mock-up digital e ensaio restaurador.
- Fluxo digital — CAD/CAM, impressão 3D de modelos e guias cirúrgicas, sinterização de zircônia.
- **Modelagem em CAD avulsa** (`docs/REPOSICIONAMENTO.md`) — só a etapa de CAD sobre um STL de terceiro, para quem já tem fresadora ou impressora própria e precisa de mão em modelagem. Preço e prazo não informados.
- **Visita com scanner ao consultório** — não é upsell de "consultoria"; é o próprio canal de entrada de caso do perfil em transição para o digital. Preço/formato não informados.

**Materiais:** zircônia, E-max (dissilicato de lítio), PMMA, metalocerâmica.

**Prazo:** 5 dias úteis. É o único prazo que pode aparecer no site.

**Restrições técnicas:**
- Saída estática, sem servidor Node em runtime, sem CMS.
- Todo conteúdo editável centralizado em `src/data/site.ts`, `casos.ts` e `depoimentos.ts` — o cliente edita textos e fotos sem abrir componente.
- Lighthouse mobile ≥ 95 em Performance, Acessibilidade, Best Practices e SEO.
- Nenhum script de terceiro carrega enquanto as variáveis de tracking estiverem vazias.
- Vídeo nunca carrega no load da página (facade com poster + play sob clique).
- Sem biblioteca de animação; CSS + `IntersectionObserver`.

**Fatos de produto explicitamente indefinidos:**
- **Preço e formato da visita ao consultório** — gratuita, por caso ou cobrada à parte não foi definido (`docs/REPOSICIONAMENTO.md` seção 7).
- **Preço e prazo da modelagem em CAD avulsa** — não definidos.
- **Se a consultoria de migração para o digital é produto pago com escopo próprio, ou está embutida na visita** — em aberto. Se virar produto formal, precisa de nome, escopo e preço antes de virar seção própria do site.
- **Se a retirada por motoboy é inclusa ou cobrada, e em quais bairros exatamente** — não definido.
- **Horário de funcionamento** — não definido. Não inventar.
- **Domínio** — não registrado. Sugestões a validar: `laboratoriodeprotesens.com.br`, `laboratoriens.com.br`, `protesens.com.br`. A titularidade será de CPF (pessoa física pode registrar `.com.br`), o que ainda precisa ser decidido.
- **Tracking** — não existe Pixel, GA4 nem GTM. A estrutura está pronta para plugar quando o tráfego pago começar.

## Brand Commitments

**Nome:** Laboratório NS. É o nome completo que aparece no site — não há razão social a exibir.

**Identidade:** monograma "NS" — "N" off-white e "S" verde-limão, com um traço circular verde envolvendo as duas letras. O arquivo oficial está em `public/logo.png` (raster de 123×119 px com fundo transparente); a versão vetorial ainda não foi entregue e é a única pendência de identidade. Regras: não recolorir, não distorcer, não adicionar sombra, sempre sobre fundo escuro. Todos os ícones derivados são achatados sobre `#0C1014`, porque o "N" claro desapareceria numa aba de tema claro.

**Restrições visuais vinculantes** (definidas pelo cliente, não a reinterpretar):
- Paleta travada, extraída do logo: `#0C1014` fundo, `#191919` elevado, `#22262A` hover, `#70C81A` acento, `#5FAF14` acento hover, `#E3E3E1` texto, `#9CA3A1` texto de apoio.
- Dark do topo ao rodapé. Não existe seção de fundo claro.
- O verde é acento, nunca fundo de bloco inteiro.
- Branco puro (`#FFFFFF`) é proibido em texto.
- Tipografia está aberta; o par de partida sugerido é Sora (títulos) + Inter (corpo), servido localmente.

**Voz:** técnica, direta, de par a par entre profissionais. Fala de adaptação passiva, dissilicato de lítio e sinterização sem traduzir — o leitor é dentista. Sem superlativo publicitário, sem promessa que não foi informada.

## Evidence on Hand

**O que existe e já está no site:** o logo oficial (`public/logo.png`) e uma foto do fluxo em operação — escaneamento intraoral em andamento no consultório (`src/assets/hero/scanner-intraoral.jpg`), usada na primeira tela. É a prova visual de que o parque digital é real e está em uso, não uma alegação.

**O que existe e ainda não foi entregue:** Instagram ativo (`@laboratorio.ns`), o vídeo do André falando à câmera sobre o escaneamento no consultório (transcrição já no site, arquivo pendente), 6 fotos de casos reais, retrato do André, e a versão vetorial do logo. Não existe vídeo de bastidores: o único material gravado é ele falando à câmera.

**O que NÃO existe e não pode ser fabricado:**
- **Sem CNPJ e sem razão social.** A operação é por RPA. O rodapé não leva CNPJ nem razão social.
- **Sem endereço completo divulgado.** Só o bairro: Copacabana. Não inventar rua nem número. Sem iframe de Google Maps.
- **Sem estatística de clientes ou de casos entregues.** Não há número de dentistas atendidos nem de casos. As formulações permitidas são qualitativas: "milhares de dentes entregues", "laboratório em operação desde 2017".
- **Sem depoimentos.** Nenhum nome de dentista, nenhum CRO. A seção existe construída e desligada por flag, com placeholders `XXX`, até o cliente preencher.
- **Sem preço, sem tabela, sem garantia.** Nenhuma promessa que o cliente não informou.
- **Sem stock photo.** Se falta foto, o site mostra um placeholder identificado. Um espaço vazio marcado é melhor que uma foto de banco de imagens de dentista genérico sorrindo.

**Números que podem aparecer:** 2017 (início da operação), 2008 (formação do André, base do cálculo de anos de experiência), 5 dias úteis (prazo).

**Cargo:** "protesista", nunca "COO". O dentista não traduz sigla de organograma, e o site fala com dentista.

**Cobertura:** Zona Sul e Barra da Tijuca. Só.

## Product Principles

1. **Todo caminho vai para o WhatsApp.** Qualquer ponto da página, a qualquer momento, com mensagem pré-preenchida que identifica de onde o lead veio. Nenhum formulário, nenhuma etapa intermediária.
2. **Prova antes de argumento.** O dentista acredita em foto de trabalho e em parque de equipamento, não em adjetivo. A galeria de casos é a seção mais importante da página.
3. **Nada inventado.** Ausência declarada é melhor que dado fabricado. Placeholder marcado é melhor que preenchimento plausível.
4. **Benefício para o dentista, não especificação do equipamento.** "Fim da moldagem em silicone" vence "scanner intraoral de última geração".
5. **O cliente precisa conseguir editar sozinho.** Texto, foto, depoimento e tracking mudam em arquivos de dados, nunca dentro de componente.

## Accessibility & Inclusion

Contraste AA em todo texto (exigência do cliente). Foco visível com ring verde em todo elemento interativo. Navegação completa por teclado, incluindo o lightbox da galeria com trap de foco e ESC. Skip link para o conteúdo principal. `aria-label` em todo botão só-ícone. `prefers-reduced-motion: reduce` desativa todas as animações de entrada. Testado em 360px, 768px, 1280px e 1920px.

Nota de contraste: `#70C81A` sobre `#0C1014` passa AA. `#70C81A` sobre superfície clara **não** passa — se algum dia houver verde sobre claro, usar `#4E9310`.
