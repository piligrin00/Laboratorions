# Reposicionamento — Laboratório NS

Este documento corrige um erro de posicionamento do `docs/BRIEFING.md`. Onde houver conflito, **este documento vence**. A `docs/REVISAO.md` (direção visual e regras de texto) continua valendo integralmente.

Não é ajuste de copy. É mudança de quem o site atende.

---

## O erro

O briefing tratou "fluxo 100% digital" como a promessa central. Na prática isso funciona como **filtro de entrada**: o dentista que ainda molda em silicone lê "100% digital" e conclui que o laboratório não é para ele. Esse dentista é o público prioritário do NS.

O laboratório atende três perfis, e o site só fala com um:

| Perfil | Como o caso chega | Status no site atual |
|---|---|---|
| Molda em gesso/silicone | Motoboy leva o modelo, o lab digitaliza | Invisível |
| Quer migrar para o digital | O lab vai ao consultório com o intraoral e escaneia o paciente | Uma linha perdida em "diferenciais" |
| Já escaneia | Manda o STL | É o único que o site atende |

Prioridade comercial: **os dois primeiros**. O que ainda não é digital, porque abre venda de consultoria e cria dependência de longo prazo. O que já é digital, porque converte rápido.

## A virada

O fluxo digital deixa de ser exigência e passa a ser **infraestrutura do laboratório**, não do consultório.

> **O fluxo digital é nosso. Não precisa ser o seu.**

Essa frase é o eixo do novo posicionamento. Ela transforma o mesmo parque de máquinas de barreira em benefício, e serve aos três perfis de uma vez.

---

## 1. Hero

Texto **aprovado pelo cliente**, usar exatamente assim.

**H1:** `Prótese digital, com ou sem scanner no seu consultório.`

**Subtítulo:** `E, se você quiser, a gente coloca o digital lá dentro. Gesso, migração ou STL: entrega em 5 dias úteis.`

**Badges:** `Desde 2017` · `Zona Sul e Barra` · `Vamos até o seu consultório` (três, não quatro — o prazo de 5 dias já está no subtítulo).

**Duas regras deste hero:** o subtítulo não lista os três caminhos (isso é trabalho da seção seguinte, o hero só precisa impedir o dentista de sair da página); e o H1 carrega a entrada sem atrito enquanto o subtítulo carrega a transformação — as duas promessas ficam em camadas separadas, não fundidas numa frase só.

*(Uma primeira versão deste hero, "Prótese digital sem você comprar um scanner", foi implementada e depois substituída por esta, que é a aprovada.)*

## 2. Seção nova: as três portas

Logo depois do hero, antes de Serviços. Faixa clara, três colunas no desktop, empilhadas no mobile. Título aprovado, não reescrever: `Atendemos três tipos de dentista. Nenhum precisou mudar nada para começar.` O "para começar" é deliberado — sustenta a promessa de transformação do hero sem contradizer a promessa de entrada sem atrito.

- **Porta 1** — `Você molda em silicone ou gesso`: retirada por motoboy, o laboratório digitaliza. CTA `Combinar a retirada` (contexto `analogico`).
- **Porta 2** — `Você quer entrar no digital`: visita com scanner intraoral no consultório do dentista, sem comprar equipamento. CTA `Agendar uma visita` (contexto `visita`). É a prioridade comercial e recebe destaque visual discreto (cor/fundo, sem selo nem badge).
- **Porta 3** — `Você já escaneia`: manda o STL. CTA `Mandar um caso` (contexto `digital`).

As três descrições têm comprimento e estrutura de frase diferentes de propósito (regra da revisão de direção contra paralelismo perfeito).

## 3. CAD avulso — serviço novo

Quarto card de Serviços. `Modelagem em CAD (avulso)`: recebe um STL de quem já tem fresadora/impressora e devolve só o arquivo modelado. CTA `Mandar um STL` (contexto `cad`). Preço e prazo não informados.

## 4. Ajustes nas seções existentes

- **Tecnologia:** nova linha de abertura, "Esse parque é nosso, não seu. Você usa ele sem ter que comprar nada." Conteúdo dos cards inalterado.
- **Como funciona:** passo 1 reescrito para não pressupor arquivo digital: "O caso chega" — aceita STL, gesso pelo motoboy, ou visita com scanner.
- **Diferenciais:** sai o bloco "Fluxo 100% digital" (virou o eixo do hero); entra "Não exigimos que você seja digital", com CTA próprio para a conversa de migração.
- **Ficha de prazos:** duas linhas novas, ambas `XXX` — "Visita ao consultório" e "Modelagem em CAD (avulso)".
- **Área de atendimento:** reforço — "A visita com scanner e a retirada de modelos cobrem Zona Sul e Barra da Tijuca."
- **CTA final:** título e texto reescritos para não pressupor digital.

## 5. WhatsApp — contextos novos

`analogico`, `visita`, `digital`, `cad` entram; `consultoria` passa a significar a conversa sobre migração para o digital (mensagem redefinida).

## 6. SEO

Título, descrição e termos-alvo ajustados para incluir a intenção de quem ainda não é digital, não só quem já escaneia.

## 7. Pendências novas

Preço/formato da visita ao consultório, preço/prazo do CAD avulso, se a consultoria de migração é produto à parte, e se a retirada por motoboy é inclusa ou cobrada. Todas marcadas `XXX` — sem gratuidade nem valor inventado.

---

## Nota de implementação (desta sessão)

O contexto `consultoria` já existia com outro sentido: era o CTA "Perguntar se atendem meu bairro" na Área de Atendimento. Este documento redefine `consultoria` para a mensagem de migração. Para não quebrar aquele CTA, criei um contexto novo, `bairro`, que herdou a mensagem antiga do `consultoria`. O CTA de bairro agora usa `bairro`; `consultoria` ficou livre para a migração e foi conectado ao bloco "Não exigimos que você seja digital" em Diferenciais, que é o lugar da página onde essa conversa faz sentido.

Serviços foi de 3 para 4 cards; o grid mudou de 3 colunas para 2×2 (`sm:grid-cols-2`) para o card do CAD avulso não ficar espremido, e o título mudou de "Três frentes" para "Quatro frentes" pela mesma razão.

O nav ganhou o item "Como entrar", apontando para `#portas`: a seção nova é, segundo este documento, "a mais importante do site novo", e deixá-la fora do menu seria escondê-la.
