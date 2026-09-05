/**
 * =====================================================================
 * LABORATÓRIO NS — CONTEÚDO CENTRAL DO SITE
 * ---------------------------------------------------------------------
 * Este é o único arquivo que precisa ser editado para mudar textos,
 * contatos, serviços, bairros e mensagens de WhatsApp do site.
 * Nenhum componente precisa ser aberto. Ver README.md.
 *
 * Tudo marcado com XXX é pendência a preencher. A lista completa está
 * no final do README.
 * =====================================================================
 */

/* ---------------------------------------------------------------------
 * 1. DADOS OFICIAIS
 * Não invente nada aqui. Ver docs/BRIEFING.md seção 4.
 * NÃO EXISTE: CNPJ, razão social, endereço completo, horário de
 * funcionamento, número de dentistas atendidos ou de casos entregues.
 * ------------------------------------------------------------------ */

export const NEGOCIO = {
  nome: 'Laboratório NS',
  segmento: 'Laboratório de prótese odontológica',
  desde: 2017,
  /**
   * Quem está à frente do laboratório.
   *
   * O CARGO É "PROTESISTA", NÃO "COO". Decisão do cliente, e ela está
   * certa: o dentista que lê este site sabe o que um protesista faz e
   * não tem por que traduzir sigla de organograma. "COO" fala com
   * investidor; "protesista" fala com quem vai mandar o caso.
   */
  responsavel: 'André Nascimento',
  responsavelCargo: 'Protesista',
  /** Ano de formação do André — base do cálculo de experiência. */
  protesistaFormadoEm: 2008,
  whatsapp: '(21) 97036-4832',
  whatsappE164: '+5521970364832',
  whatsappNumero: '5521970364832',
  email: 'laboratoriodeprotesens@gmail.com',
  instagram: 'https://www.instagram.com/laboratorio.ns/',
  instagramHandle: '@laboratorio.ns',
  bairro: 'Copacabana',
  cidade: 'Rio de Janeiro',
  estado: 'RJ',
  localizacao: 'Copacabana, Rio de Janeiro, RJ',
  /* Duas regiões, sem mais nada em volta. O cliente foi explícito:
     Zona Sul e Barra, só. Ampliar a promessa de cobertura para caber
     mais dentista é o tipo de coisa que quebra na primeira entrega. */
  atendimento: 'Zona Sul e Barra da Tijuca',
  prazoMedio: '5 dias úteis',
  /** XXX-HORARIO — não há horário de funcionamento definido. */
  horario: 'XXX',
} as const;

/**
 * XXX-DOMINIO — o domínio ainda não foi registrado.
 * Enquanto isto for string vazia:
 *   - o sitemap.xml NÃO é gerado (evita sitemap com URL errada);
 *   - a tag <link rel="canonical"> é omitida;
 *   - og:url e og:image usam caminho relativo.
 * Sugestões a validar: laboratoriodeprotesens.com.br,
 * laboratoriens.com.br, protesens.com.br
 */
export const SITE_URL = '';

/* ---------------------------------------------------------------------
 * 2. FLAGS
 * ------------------------------------------------------------------ */

/**
 * LIGADA. As avaliações do Google são reais e estão em
 * src/data/depoimentos.ts. Virar para `false` remove o bloco inteiro do
 * HTML, sem deixar seção quebrada.
 */
export const MOSTRAR_DEPOIMENTOS = true;

/* ---------------------------------------------------------------------
 * 2b. GOOGLE
 *
 * Números COPIADOS do perfil, não estimados. O cliente colou
 * "5,020 avaliações", que é a formatação brasileira de nota 5,0 com 20
 * avaliações — confirmado contando os 20 nomes da lista que ele enviou.
 *
 * A nota é string, não number: "5,0" com vírgula é como o Google
 * escreve em português, e é como o dentista reconhece.
 * ------------------------------------------------------------------ */

export const GOOGLE = {
  nota: '5,0',
  total: 20,
  /**
   * Link curto de compartilhamento do perfil, e é ele de propósito.
   * Resolve para a ficha do "Laboratório de prótese Digital N.S"
   * (kgmid /g/11sstvnmr_), verificado. A URL final do redirecionamento
   * carrega `sxsrf`, `rlz` e `utm_source` — parâmetros de SESSÃO de
   * quem copiou o link, que apodrecem. O link curto redireciona novo a
   * cada clique e não envelhece.
   */
  url: 'https://share.google/a4xbedsC9TW4mkFBJ',
} as const;

/**
 * REMOVIDA a flag `MOSTRAR_VIDEO`. O `VideoFacade` agora é dirigido por
 * props (src, poster, transcrição), então cada vídeo é renderizado no
 * lugar onde vive, e não existe mais um "vídeo da galeria" global para
 * ligar ou desligar. A seção Casos não tem mais vídeo nenhum.
 */

/* ---------------------------------------------------------------------
 * 3. CONVERSÃO PARA WHATSAPP
 * Cada CTA leva uma mensagem diferente para o laboratório saber de onde
 * o lead veio. Ver docs/BRIEFING.md seção 5.
 * ------------------------------------------------------------------ */

export const WA_MESSAGES = {
  header:
    'Olá! Vim pelo site do Laboratório NS e gostaria de falar com vocês.',
  hero:
    'Olá! Sou dentista e quero conhecer o fluxo digital do Laboratório NS.',
  proteseFixa:
    'Olá! Tenho interesse em prótese fixa / protocolo. Podemos conversar?',
  estetica:
    'Olá! Quero falar sobre casos de estética: lentes e facetas.',
  fluxoDigital:
    'Olá! Quero saber como funciona o envio de casos digitais para o laboratório.',
  /* Era o CTA da galeria de fotos, que saiu. Agora fecha o bloco de
     avaliacoes, e a mensagem precisa dizer de onde o lead veio sem
     citar casos que o site nao mostra mais. */
  galeria:
    'Olá! Vi as avaliações no site e gostaria de conversar sobre um trabalho.',
  ctaFinal:
    'Olá! Quero começar a trabalhar com o Laboratório NS.',

  /**
   * As três portas de entrada (docs/REPOSICIONAMENTO.md). Cada perfil
   * de dentista tem seu próprio contexto, porque é assim que o
   * laboratório sabe qual porta o lead usou antes de responder.
   */
  analogico:
    'Olá! Eu trabalho com moldagem convencional e queria entender como funciona a retirada dos modelos.',
  visita:
    'Olá! Quero agendar uma visita de vocês no meu consultório para escanear um paciente.',
  digital:
    'Olá! Já escaneio no consultório e queria mandar um caso para vocês.',

  /** Modelagem em CAD avulsa — quarto serviço, seção Serviços. */
  cad: 'Olá! Preciso só da modelagem em CAD de um STL. Como funciona?',

  /**
   * Consultoria de migração para o digital. Substituiu o sentido do
   * antigo `consultoria`, que servia à pergunta genérica de bairro na
   * Área de Atendimento — essa pergunta agora usa o contexto `bairro`,
   * abaixo, porque não é mais a mesma pergunta.
   */
  consultoria:
    'Olá! Quero conversar sobre a consultoria para migrar meu consultório para o digital.',

  /** Pergunta de cobertura geográfica — Área de Atendimento. */
  bairro:
    'Olá! Gostaria de agendar uma visita/consultoria no meu consultório.',
} as const;

export type WaContext = keyof typeof WA_MESSAGES;

/**
 * Monta o link do WhatsApp com a mensagem pré-preenchida do contexto.
 * Use sempre via <CtaButton context="..." /> para que o evento de
 * tracking seja disparado junto.
 */
export function waLink(ctx: WaContext): string {
  return `https://wa.me/${NEGOCIO.whatsappNumero}?text=${encodeURIComponent(
    WA_MESSAGES[ctx],
  )}`;
}

/* ---------------------------------------------------------------------
 * 4. NAVEGAÇÃO
 * "Contato" aponta para a faixa de CTA final, que é onde o fechamento
 * acontece — não existe seção de contato separada (não há formulário).
 * ------------------------------------------------------------------ */

export const NAV = [
  { label: 'Como entrar', href: '#portas' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#contato' },
] as const;

/* ---------------------------------------------------------------------
 * 5. HERO
 * ------------------------------------------------------------------ */

export const HERO = {
  /**
   * H1 e subtítulo em duas camadas, de propósito (docs/REPOSICIONAMENTO.md):
   * o H1 carrega a entrada sem atrito ("com ou sem scanner"), o subtítulo
   * carrega a transformação ("a gente coloca o digital lá dentro"). As
   * três portas ficam para a seção seguinte — o subtítulo não lista os
   * três caminhos, só evita que o dentista saia da página.
   */
  h1: 'Prótese digital, com ou sem scanner no seu consultório.',
  subtitulo:
    'E, se você quiser, a gente coloca o digital lá dentro. Gesso, migração ou STL: entrega em 5 dias úteis.',
  /** O terceiro badge é o mais importante da página: é o que remove a
      objeção de quem ainda não escaneia. O prazo de 5 dias já está no
      subtítulo, então não repete aqui como quarto badge. */
  badges: ['Desde 2017', 'Zona Sul e Barra', 'Vamos até o seu consultório'],
  /**
   * SEM USO NO MOMENTO. A colagem do herói foi removida a pedido do
   * cliente, então nenhum componente lê este campo hoje. Ele fica aqui
   * junto com a foto em src/assets/hero/ para que reintroduzir a imagem
   * seja uma linha, não uma reescrita.
   *
   * Se voltar a ser usado: descreve o que a foto MOSTRA, é lido por
   * leitor de tela, e troca junto com o arquivo.
   */
  fotoAlt:
    'Escaneamento intraoral em andamento no consultório: o scanner captura o caso direto na boca do paciente, sem moldagem em silicone.',
} as const;

/* ---------------------------------------------------------------------
 * 5b. PORTAS DE ENTRADA
 * A seção mais importante do site: mostra que o laboratório atende o
 * dentista analógico, o que quer migrar e o que já escaneia — não só o
 * último. Ver docs/REPOSICIONAMENTO.md.
 *
 * `destaque` marca a porta 2 (migração), que é a prioridade comercial.
 * O realce é só de cor/fundo (ver PorOndeEntra.astro): sem selo, sem
 * badge, sem escala maior.
 *
 * As três descrições têm comprimento e estrutura de frase diferentes
 * de propósito — paralelismo perfeito entre elas seria o mesmo tique de
 * texto gerado que a Parte 2 da revisão de direção proíbe nos cards.
 * ------------------------------------------------------------------ */

export const PORTAS = [
  {
    rotulo: 'Você molda em silicone ou gesso',
    texto:
      'Continua exatamente como está. O motoboy busca o modelo no seu consultório, a gente escaneia aqui e o caso segue digital do nosso lado. Você recebe uma peça fresada sem ter mudado nada na sua rotina.',
    ctaLabel: 'Combinar a retirada',
    contexto: 'analogico',
    destaque: false,
  },
  {
    rotulo: 'Você quer entrar no digital',
    texto:
      'A gente vai até o seu consultório com o scanner intraoral, escaneia o paciente na cadeira e planeja o caso junto com você. Sem comprar equipamento, sem curso, sem risco. Você vê o digital funcionando no seu próprio paciente antes de decidir qualquer investimento.',
    ctaLabel: 'Agendar uma visita',
    contexto: 'visita',
    destaque: true,
  },
  {
    rotulo: 'Você já escaneia',
    texto: 'Manda o STL e pronto. Se quiser só a modelagem, a gente entrega o arquivo em CAD para você fresar onde preferir.',
    ctaLabel: 'Mandar um caso',
    contexto: 'digital',
    destaque: false,
  },
] as const satisfies readonly {
  rotulo: string;
  texto: string;
  ctaLabel: string;
  contexto: WaContext;
  destaque: boolean;
}[];

/* ---------------------------------------------------------------------
 * 6. FAIXA DE CREDIBILIDADE
 * SEM NÚMEROS INVENTADOS. Ver docs/BRIEFING.md seção 6.2.
 *
 * Os anos de carreira do André são CALCULADOS a partir de 2008, não
 * fixos: publicar "+15" quando já são 18 subestima a experiência, e um
 * número fixo envelhece sozinho.
 * ------------------------------------------------------------------ */

/** Anos de carreira do André Nascimento, sempre atual. */
export const ANOS_EXPERIENCIA =
  new Date().getFullYear() - NEGOCIO.protesistaFormadoEm;

export const CREDIBILIDADE = [
  {
    destaque: '2017',
    legenda: 'Laboratório em operação',
  },
  {
    destaque: `${ANOS_EXPERIENCIA} anos`,
    legenda: 'De André Nascimento, só em prótese',
  },
  {
    destaque: '5 dias',
    legenda: 'Prazo médio de entrega',
  },
  {
    destaque: 'Milhares',
    legenda: 'De dentes entregues',
  },
] as const;

/* ---------------------------------------------------------------------
 * 7. SERVIÇOS
 * ------------------------------------------------------------------ */

export const SERVICOS = [
  {
    /** Materiais ou técnicas da frente. Vira leitura de dado no card,
        não sobretítulo de categoria. */
    rotulo: 'Zircônia · Metalocerâmica · PMMA',
    titulo: 'Prótese fixa e protocolo',
    descricao:
      'Coroas, pontes e protocolos sobre implante com adaptação passiva. Zircônia monolítica e estratificada, metalocerâmica e PMMA para provisórios de longa duração. Planejamento digital antes da usinagem. O que você aprova é o que chega no consultório.',
    contexto: 'proteseFixa',
  },
  {
    rotulo: 'Dissilicato de lítio',
    titulo: 'Estética: lentes e facetas',
    descricao:
      'Lentes de contato dental e facetas em dissilicato de lítio (E-max), com caracterização e escolha de cor acompanhada de perto. Mock-up digital e ensaio restaurador para o paciente ver o resultado antes de qualquer desgaste.',
    contexto: 'estetica',
  },
  {
    rotulo: 'STL · CAD/CAM · Impressão 3D',
    titulo: 'Fluxo digital: CAD/CAM, 3D e guias',
    descricao:
      'Recebemos seu escaneamento intraoral direto do consultório. Modelagem em CAD, usinagem em fresadora, impressão 3D de modelos e guias, sinterização em forno de zircônia próprio. Sem moldagem convencional, sem retrabalho por distorção de gesso.',
    contexto: 'fluxoDigital',
  },
  {
    /** Serviço novo (docs/REPOSICIONAMENTO.md): não é laboratório
        próprio, é mão de modelagem para quem já tem fresadora ou
        impressora e só precisa do CAD. */
    rotulo: 'Para quem já tem fresadora ou impressora',
    titulo: 'Modelagem em CAD (avulso)',
    descricao:
      'Recebeu um STL e não tem quem modele? A gente faz só a etapa de CAD e devolve o arquivo pronto para fresagem ou impressão. Serve para dentista com fresadora no consultório, para clínica com estrutura própria e para outro laboratório que precisa de mão em modelagem.',
    contexto: 'cad',
    /** Preço e prazo não informados (docs/REPOSICIONAMENTO.md seção 7). */
    ctaLabel: 'Mandar um STL',
  },
] as const satisfies readonly {
  rotulo: string;
  titulo: string;
  descricao: string;
  contexto: WaContext;
  ctaLabel?: string;
}[];

/* ---------------------------------------------------------------------
 * 8. COMO FUNCIONA
 * ------------------------------------------------------------------ */

export const PASSOS = [
  {
    titulo: 'O caso chega',
    descricao:
      'Do jeito que for: STL pelo WhatsApp, modelo de gesso pelo motoboy, ou a gente escaneia o paciente no seu consultório.',
  },
  {
    titulo: 'Planejamento digital',
    descricao:
      'Modelamos o caso em CAD e alinhamos com você o que for necessário antes de produzir.',
  },
  {
    titulo: 'Produção',
    descricao:
      'Fresagem, impressão 3D e sinterização em zircônia, tudo no nosso parque próprio.',
  },
  {
    titulo: 'Acabamento e conferência',
    descricao:
      'Caracterização, ajuste de cor e conferência final peça por peça.',
  },
  {
    titulo: 'Entrega em 5 dias úteis',
    descricao:
      'Trabalho pronto no seu consultório, com suporte direto se precisar de qualquer ajuste.',
  },
] as const;

/* ---------------------------------------------------------------------
 * 8b. VÍDEO DO PROCESSO
 *
 * O arquivo CHEGOU. 177MB de origem viraram 6,89MB (CRF 24, 720×1280,
 * áudio mono 96k, `+faststart`), e o `<video>` continua fora do DOM
 * inicial: nada de mp4 é baixado até alguém tocar no play. Ver
 * VideoFacade.astro.
 *
 * A TRANSCRIÇÃO abaixo é o que o André fala, no roteiro que o cliente
 * enviou por escrito. Não foi reescrita nem resumida: só levou
 * pontuação e a correção de "frezado" para "fresado". Ela existe por
 * três motivos — leitor de tela, quem assiste sem som (a maioria, no
 * celular, entre pacientes) e busca: o Google não lê nada de dentro de
 * um mp4, então sem isto o argumento falado é invisível.
 * ------------------------------------------------------------------ */

export const VIDEO_PROCESSO = {
  /** 720×1280, 70s, 6,89MB. Original em midia-original/, fora do build. */
  src: '/video/processo-consultorio.mp4',
  /** Confirmado por ffprobe: 1080×1920 no original, 9:16. */
  proporcao: '9/16',
  ariaLabel:
    'Assistir: como o Laboratório NS escaneia o paciente no seu consultório',
  legenda: 'O vídeo só é carregado depois que você toca no play.',
  /**
   * O pôster é o quadro de 13,5s, não o primeiro. Aos 13,5s o André
   * está escaneando um paciente de verdade, de máscara, com o scanner
   * na boca; nos primeiros segundos ele está sentado falando. Um pôster
   * de cabeça falante diz "alguém vai explicar", e o do escaneamento diz
   * "isto acontece" — que é a promessa da página inteira, provada antes
   * de o dentista tocar no play.
   */
  posterAlt:
    'André Nascimento, de máscara, escaneando a arcada de um paciente com scanner intraoral em consultório',
  transcricao: `Você, dentista do Rio de Janeiro, que está preso no analógico e quer chegar no fluxo digital: aqui no Laboratório NS você tem e pode conseguir isso. Nós trabalhamos com escaneamento direto no consultório, para você, dentista, que não tem o scanner.

Então, como é que funciona isso? Nós vamos até o seu consultório, fazemos todo o processo do escaneamento e mostramos para você como é que fica. Tá vendo? Então isso é o que nós vamos apresentar para você: um scanner de alta qualidade. E depois de todo esse processo nós vamos mostrar para você como é que fica. Fica desse jeito.

Nós temos um modelo que é escaneado e vai virar diretamente no digital, que é impresso numa impressora 3D. E todo o nosso trabalho é fresado. Então, nesse caso aqui, nós temos um trabalho que vai fazer um teste de prova, e depois disso, estando satisfeito, o dentista olhou, ficou legal, nós fresamos direto, ou direto em ponte. Nesse caso é uma ponte.

Se você não trabalha hoje com digital e ainda está só no analógico, você está perdendo dinheiro. Entre em contato conosco, Laboratório NS.`,
} as const;

/* ---------------------------------------------------------------------
 * 9. TECNOLOGIA / PARQUE DIGITAL
 * A explicação é do BENEFÍCIO para o dentista, não do equipamento.
 * ------------------------------------------------------------------ */

export const TECNOLOGIA = [
  {
    /** Arquivo em src/assets/maquinas/. Ausente: mostra placeholder. */
    arquivo: 'scanner.jpg',
    titulo: 'Scanner intraoral',
    /** O que a máquina resolve. Vira chip sobre a foto. */
    resolve: 'Sem moldagem',
    descricao:
      'Fim da moldagem em silicone: o paciente sai do consultório com o caso já digitalizado.',
  },
  {
    arquivo: 'fresadora.jpg',
    titulo: 'Fresadora CAD/CAM',
    resolve: 'Precisão de micra',
    descricao:
      'Usinagem em zircônia e PMMA com repetibilidade total, peça após peça.',
  },
  {
    arquivo: 'impressora-3d.jpg',
    titulo: 'Impressora 3D',
    resolve: 'Modelo em horas',
    descricao:
      'Modelos, guias cirúrgicas e ensaios restauradores prontos no mesmo dia.',
  },
  {
    arquivo: 'forno.jpg',
    titulo: 'Forno de sinterização',
    resolve: 'Ciclo em casa',
    descricao:
      'Ciclo controlado dentro de casa, sem terceirizar a etapa mais crítica da peça.',
  },
] as const;

export const MATERIAIS = [
  'Zircônia',
  'E-max (dissilicato de lítio)',
  'PMMA',
  'Metalocerâmica',
] as const;

/* ---------------------------------------------------------------------
 * 9b. FICHA DE PRAZOS — FORA DA PÁGINA
 *
 * NÃO ESTÁ RENDERIZADA EM LUGAR NENHUM. O cliente pediu para tirar o
 * cartão da seção "Como funciona", que era onde ela vivia. Os dados
 * ficam aqui de propósito, e não foram apagados por duas razões: as
 * três pendências de preço/prazo abaixo continuam sendo perguntas
 * abertas para o cliente (e estão na tabela de pendências do README),
 * e devolver a ficha para a página é reimportar `FICHA_PRAZOS` e
 * remontar o `<dl>`, já que o CSS dela (`.ficha-linha`, `.conducao`)
 * segue em global.css.
 *
 * O prazo de 5 dias úteis não se perdeu do site: está no subtítulo do
 * herói, na quinta etapa de "Como funciona" e no selo giratório da
 * Área de Atendimento.
 *
 * ATENÇÃO: 5 dias úteis é o ÚNICO prazo confirmado pelo cliente.
 * Qualquer linha cujo prazo não foi informado fica `XXX`. Não preencher
 * por analogia: um prazo errado numa ficha com cara de documento é pior
 * que um prazo ausente.
 * ------------------------------------------------------------------ */

export const FICHA_PRAZOS = [
  { item: 'Prótese fixa / coroa', valor: '5 dias úteis' },
  { item: 'Protocolo sobre implante', valor: '5 dias úteis' },
  { item: 'Lentes e facetas', valor: '5 dias úteis' },
  /** XXX-PRAZO-IMPRESSAO — prazo de modelo e guia não informado. */
  { item: 'Modelo / guia impressa', valor: 'XXX' },
  { item: 'Retirada e entrega', valor: 'Inclusa' },
  /** XXX-PRECO-VISITA e XXX-PRAZO-CAD (docs/REPOSICIONAMENTO.md
      seção 7) — nem preço nem prazo foram informados para nenhuma
      das duas linhas abaixo. */
  { item: 'Visita ao consultório', valor: 'XXX' },
  { item: 'Modelagem em CAD (avulso)', valor: 'XXX' },
] as const;

/* ---------------------------------------------------------------------
 * 10. DIFERENCIAIS
 * ------------------------------------------------------------------ */

export const DIFERENCIAIS = [
  {
    titulo: 'Não exigimos que você seja digital',
    descricao:
      'A maior parte dos laboratórios digitais só aceita arquivo. A gente aceita gesso, silicone e paciente na cadeira. A conversão para digital é problema nosso.',
    /** Único bloco com CTA: é o que fala diretamente com quem está
        pensando em migrar. Os outros dois ficam sem CTA de propósito,
        para não competir com este. */
    cta: { contexto: 'consultoria', label: 'Conversar sobre migrar' },
  },
  {
    titulo: 'Consultoria lado a lado',
    descricao:
      'Visitamos seu consultório e acompanhamos o caso junto com você. Não somos um laboratório que só recebe arquivo e devolve peça.',
  },
  {
    titulo: 'Experiência de mercado',
    descricao: `Mais de ${ANOS_EXPERIENCIA} anos dedicados exclusivamente à prótese. Você conversa com quem produz, não com um atendente.`,
  },
] as const;

/* ---------------------------------------------------------------------
 * 11. SOBRE O LABORATÓRIO
 * ------------------------------------------------------------------ */

/**
 * Dois blocos, e a separação é de propósito: primeiro o laboratório,
 * depois a pessoa. O dentista escolhe laboratório por confiança, e
 * confiança tem nome — a foto ao lado é do André, não da bancada.
 *
 * A carreira militar entra porque explica a virada, não como enfeite
 * biográfico: alguém que trocou de profissão e ficou desde 2008 só em
 * prótese escolheu isso, não caiu aqui.
 */
export const SOBRE = {
  titulo: 'Sobre o laboratório',
  texto: `O Laboratório NS nasceu em 2017 em Copacabana e opera hoje com fluxo totalmente digital, do planejamento em CAD à conferência final. Trabalhamos lado a lado com o dentista, inclusive presencialmente, no seu consultório, quando o caso pede.`,
  pessoa: {
    nome: NEGOCIO.responsavel,
    cargo: NEGOCIO.responsavelCargo,
    texto: `Antes da bancada, ${NEGOCIO.responsavel} foi militar. Trocou de carreira, formou-se protesista em ${NEGOCIO.protesistaFormadoEm} e desde então não fez outra coisa: são ${ANOS_EXPERIENCIA} anos dedicados exclusivamente à prótese odontológica, milhares de dentes entregues e a mesma obsessão por adaptação e estética desde o primeiro caso.`,
    /** Alt da foto. Descreve quem é, não a composição da imagem. */
    fotoAlt: `${NEGOCIO.responsavel}, protesista responsável pelo Laboratório NS, sentado ao lado de um scanner intraoral com a arcada escaneada na tela`,
  },
} as const;

/* ---------------------------------------------------------------------
 * 12. ÁREA DE ATENDIMENTO
 * A lista de bairros é boa para SEO local.
 * ------------------------------------------------------------------ */

export const AREA_ATENDIMENTO = {
  texto:
    'Atendemos cirurgiões-dentistas da Zona Sul do Rio de Janeiro e da Barra da Tijuca, com retirada e entrega no consultório.',
  /** Reforço pedido em docs/REPOSICIONAMENTO.md: deixa claro que a
      área de cobertura vale tanto para quem manda molde quanto para
      quem recebe a visita com o scanner. */
  reforco:
    'A visita com scanner e a retirada de modelos cobrem Zona Sul e Barra da Tijuca.',
  bairros: [
    'Copacabana',
    'Ipanema',
    'Leblon',
    'Botafogo',
    'Flamengo',
    'Laranjeiras',
    'Humaitá',
    'Gávea',
    'Jardim Botânico',
    'Leme',
    'Urca',
    'Barra da Tijuca',
  ],
} as const;

/* ---------------------------------------------------------------------
 * 13. CTA FINAL
 * ------------------------------------------------------------------ */

export const CTA_FINAL = {
  titulo: 'Manda seu próximo caso do jeito que for mais fácil.',
  texto:
    'Arquivo, molde ou visita no consultório. Resposta rápida no WhatsApp, direto com quem produz.',
  botao: 'Falar no WhatsApp',
} as const;

/* ---------------------------------------------------------------------
 * 14. SEO
 * ------------------------------------------------------------------ */

export const SEO = {
  titulo: 'Laboratório NS | Prótese Digital para Dentistas no Rio de Janeiro',
  descricao:
    'Laboratório de prótese em Copacabana com fresadora, impressão 3D e zircônia. Aceita STL, molde de gesso ou visita ao consultório com scanner intraoral. Entrega em 5 dias úteis na Zona Sul e Barra.',
  /**
   * XXX-OG-IMAGE — o og-image.jpg atual foi gerado a partir do
   * monograma e é um placeholder. O definitivo precisa de um caso
   * bonito + logo (briefing seção 7). Sem isso, o link do site
   * compartilhado no WhatsApp e no Instagram aparece sem thumb.
   */
  ogImage: '/og-image.jpg',
} as const;
