/**
 * =====================================================================
 * AVALIAÇÕES DO GOOGLE
 * ---------------------------------------------------------------------
 * São avaliações REAIS, copiadas do perfil do Google do laboratório.
 * O texto de cada uma está VERBATIM: nada foi reescrito, encurtado ou
 * "melhorado". A única mexida foi tirar espaço antes de pontuação.
 *
 * NÃO INVENTE avaliação, nome ou nota. Se for trocar, copie do perfil.
 *
 * POR QUE ESTAS TRÊS, entre as 20 que existem:
 * o site fala com DENTISTA, não com paciente. Boa parte das avaliações
 * é de paciente ("minha prótese ficou perfeita"), e isso convence menos
 * um dentista do que a palavra "adaptados". As três escolhidas cobrem
 * as três ansiedades de quem terceiriza prótese:
 *
 *   Luisa     -> adaptação e pontualidade
 *   Paulo     -> parceria, dentista falando de laboratório
 *   Jefferson -> prazo e material
 *
 * SEM CRO. Avaliação do Google não traz CRO, e inventar um seria
 * falsificar credencial. O rótulo honesto é a origem: Google.
 *
 * SEM DATA. As avaliações reais vão de "uma semana" a "3 anos"; marcar
 * "3 anos atrás" num card envelhece a prova sem necessidade, e data
 * relativa escrita à mão fica errada sozinha com o tempo.
 * =====================================================================
 */

export interface Avaliacao {
  nome: string;
  texto: string;
}

export const AVALIACOES: Avaliacao[] = [
  {
    nome: 'Luisa Vasconcelos Alves',
    texto:
      'Muito pontual e ótimo atendimento. Fiz casos unitários de prótese e vieram bem adaptados. Indico!',
  },
  {
    nome: 'Paulo Montoliu',
    texto: 'Laboratório parceiro, trabalhando sério!!',
  },
  {
    nome: 'Jefferson Luiz',
    texto:
      'Profissional muito dedicado e qualificado. Sempre trabalha com bons produtos e cumpre os prazos estabelecidos.',
  },
];

/* ---------------------------------------------------------------------
 * Resolução — nada abaixo precisa ser editado.
 * ------------------------------------------------------------------ */

export interface AvaliacaoResolvida extends Avaliacao {
  /** Iniciais para o avatar, ex.: 'LV'. */
  iniciais: string;
}

function iniciaisDe(nome: string): string {
  const partes = nome.trim().split(/\s+/).filter(Boolean);
  if (partes.length === 0) return '?';
  return partes
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('');
}

export const avaliacoes: AvaliacaoResolvida[] = AVALIACOES.map((a) => ({
  ...a,
  iniciais: iniciaisDe(a.nome),
}));
