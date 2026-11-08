/* ============================================================================
   FOTOS E TEXTOS DO SITE — Júlio & Grazielly
   ----------------------------------------------------------------------------
   Este é o único arquivo que você precisa mexer para trocar as fotos e os
   textos das seções "Nossa História" e "Galeria".

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
    confirmar: 'fotos/foto-099.webp'   // faixa do "Confirme sua presença"
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
  ]
};
