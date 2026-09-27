/* ============================================================================
   FOTOS E TEXTOS DO SITE — Júlio & Grazielly
   ----------------------------------------------------------------------------
   Este é o único arquivo que você precisa mexer para trocar as fotos e os
   textos das seções "Nossa História", "Galeria" e "Padrinhos".

   COMO TROCAR UMA FOTO
   1. Coloque o arquivo novo dentro da pasta  fotos/
   2. Escreva o nome dele aqui embaixo, ex.:  'fotos/minha-foto.jpg'
      (funciona com .jpg, .png ou .webp)

   COMO ADICIONAR OU TIRAR FOTOS DA GALERIA
   • Adicionar: escreva mais uma linha na lista "galeria".
   • Tirar: apague a linha (ou coloque // na frente para desativar).
   • A galeria funciona com qualquer quantidade — 3, 8, 20 fotos.

   DICA: fotos muito grandes deixam o site lento no celular.
   O ideal é no máximo ~1500px de largura e até ~300 KB por foto.
============================================================================ */

window.SITE = {

  /* ---------- FOTO PRINCIPAL (a primeira tela do site) ---------- */
  capa: 'fotos/foto-070.webp',

  /* ---------- FOTOS GRANDES DE FUNDO (efeito parallax) ---------- */
  faixas: {
    convite:   'fotos/foto-101.webp',  // faixa depois de "Nossa História"
    confirmar: 'fotos/foto-099.webp',  // faixa do "Confirme sua presença"
    padrinhos: 'fotos/foto-016.webp'   // fundo da área dos padrinhos
  },

  /* ---------- NOSSA HISTÓRIA (linha do tempo) ----------
     Cada item vira um bloco com foto + texto.
     Pode ter quantos itens você quiser. Os textos abaixo são
     um exemplo — troque pela história de vocês!                */
  historia: [
    {
      foto:   'fotos/foto-104.webp',
      data:   'Onde tudo começou',
      titulo: 'O primeiro olhar',
      texto:  'Foi sem aviso e sem plano nenhum. Um encontro comum, uma conversa que não queria acabar — e a sensação estranhamente boa de já conhecer aquela pessoa há muito tempo.'
    },
    {
      foto:   'fotos/foto-063.webp',
      data:   'E então, o sim',
      titulo: 'Escolher todo dia',
      texto:  'Vieram as viagens curtas, as risadas no carro, os domingos sem pressa e as conversas de madrugada. Descobrimos que amar é uma escolha que a gente refaz, feliz, todos os dias.'
    },
    {
      foto:   'fotos/foto-088.webp',
      data:   'O pedido',
      titulo: 'Um sim que mudou tudo',
      texto:  'O coração acelerado, as mãos tremendo e uma pergunta só. A resposta veio antes mesmo da frase terminar — e a aliança no dedo virou a promessa mais bonita que já fizemos.'
    },
    {
      foto:   'fotos/foto-093.webp',
      data:   '19 de dezembro de 2026',
      titulo: 'O nosso grande dia',
      texto:  'Agora só falta você. Vamos dizer sim diante de Deus e das pessoas que amamos — e queremos muito que você esteja ali para ver.'
    }
  ],

  /* ---------- GALERIA (mosaico + clique para ampliar) ---------- */
  galeria: [
    'fotos/foto-101.webp',
    'fotos/foto-099.webp',
    'fotos/foto-104.webp',
    'fotos/foto-024.webp',
    'fotos/foto-007.webp',
    'fotos/foto-063.webp',
    'fotos/foto-082.webp',
    'fotos/foto-016.webp',
    'fotos/foto-070.webp'
  ],

  /* ---------- ÁREA DOS PADRINHOS ----------
     Área protegida por senha. A senha é: padrinhos
     (para mudar a senha, veja a linha PADRINHOS_HASH no index.html) */
  padrinhos: {
    recado: 'Vocês são as pessoas que caminharam com a gente até aqui. Ter cada um de vocês ao nosso lado no altar é um presente — obrigado por dizerem sim junto com a gente. 💛',

    // Lista dos padrinhos e madrinhas (edite à vontade)
    casais: [
      { madrinha: 'Ana Clara',  padrinho: 'Rafael',   relacao: 'Irmã da noiva & cunhado' },
      { madrinha: 'Beatriz',    padrinho: 'Lucas',    relacao: 'Amigos de infância' },
      { madrinha: 'Camila',     padrinho: 'Thiago',   relacao: 'Amigos da faculdade' },
      { madrinha: 'Larissa',    padrinho: 'Gabriel',  relacao: 'Primos do noivo' },
      { madrinha: 'Mariana',    padrinho: 'Pedro',    relacao: 'Amigos da igreja' },
      { madrinha: 'Sofia',      padrinho: 'Matheus',  relacao: 'Amigos de sempre' }
    ],

    // Informações práticas (cards)
    avisos: [
      { icone: '👗', titulo: 'Traje das madrinhas', texto: 'Vestido na cor rosa fúcsia.' },
      { icone: '🤵', titulo: 'Traje dos padrinhos', texto: 'Terno cinza médio, camisa branca\ne gravata combinando com o terno.' },
      { icone: '⏰', titulo: 'Horário de chegada', texto: 'Pedimos que estejam no local às 11h,\numa hora antes do início da cerimônia.' }
    ],

    // Link do grupo (deixe '' para esconder o botão)
    grupoUrl: '',
    grupoTexto: 'Entrar no grupo dos padrinhos'
  }
};
