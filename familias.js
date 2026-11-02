/* ============================================================================
   LISTA DE CONVIDADOS (FAMÍLIAS) — Júlio & Grazielly
   ----------------------------------------------------------------------------
   Aqui ficam as famílias / convites. Quando o convidado abrir o site e digitar
   o NOME dele (pode ser só o primeiro nome), o site acha a família dele e mostra
   TODAS as pessoas do convite para marcar quem vai e quem não vai.

   A confirmação é ABERTA: quem não estiver nesta lista também pode confirmar
   (preenche nome, acompanhantes etc.). No painel essas pessoas aparecem com a
   etiqueta "fora da lista".

   A busca não diferencia acento nem maiúsculas/minúsculas
   ("agata", "Ágata" e "ÁGATA" acham a mesma pessoa) e aceita nome parcial.

   COMO ESCREVER
   • Cada família é um bloco { familia: '...', membros: [ ... ] }
   • Em "membros", escreva o nome de CADA pessoa do convite (a própria pessoa,
     cônjuge, filhos, netos — todo mundo que está convidado naquele convite).
   • "grupo" é opcional (ajuda vocês a filtrar no painel).

   Você também pode adicionar/editar famílias pelo PAINEL DO CASAL
   (aba 👥 Convidados → "+ Adicionar família"). O que estiver aqui e o que
   estiver no painel aparecem juntos.

   EXEMPLO (pode copiar para criar uma nova família):
     // { familia: 'Família Silva', grupo: 'Amigos', membros: ['João Silva', 'Maria Silva'] },
============================================================================ */

window.FAMILIAS = [

  {
    familia: 'Tia Miriam',
    membros: [
      'Tia Miriam',
      'Danilo',    // esposo
      'Dandara'    // filha
    ]
  },

  {
    familia: 'Tio Sidnei',
    membros: [
      'Tio Sidnei',
      'Hilma',     // esposa
      'Maiara'     // filha
    ]
  },

  {
    familia: 'Tio Valdinei',
    membros: [
      'Tio Valdinei',
      'Suzana',    // esposa
      'Jorge',     // filho
      'Daniele'    // esposa do Jorge
    ]
  },

  {
    familia: 'Vanderlei',
    membros: [
      'Vanderlei',
      'Regina'     // esposa
    ]
  },

  {
    familia: 'Daniel Dias',
    membros: [
      'Daniel Dias',
      'Leni',      // esposa
      'Daniele',   // filha
      'Regi',      // esposo da Daniele
      'Ágata'      // filha
    ]
  },

  {
    familia: 'Dailson',
    membros: [
      'Dailson',
      'Suzane',    // esposa
      'Analice'    // filha
    ]
  },

  {
    familia: 'Rafaela e Ruan',
    membros: [
      'Rafaela',
      'Ruan'
    ]
  },

  {
    familia: 'Giovanna',
    membros: [
      'Giovanna'
    ]
  },

  {
    familia: 'Beatriz e Guilherme',
    membros: [
      'Beatriz',
      'Guilherme'
    ]
  },

  {
    familia: 'Silvia e Antônio',
    membros: [
      'Silvia',
      'Antônio'
    ]
  },

  {
    familia: 'Paulo e Joana',
    membros: [
      'Paulo',
      'Joana'
    ]
  },

  {
    familia: 'Renato',
    membros: [
      'Renato'
    ]
  },

  {
    familia: 'Irmão Sérgio',
    membros: [
      'Irmão Sérgio',
      'Irmã Martha',
      'Gustavo',
      'Katiane'
    ]
  },

  {
    familia: 'Renata e Rodrigo',
    membros: [
      'Renata',
      'Rodrigo'
    ]
  },

  {
    familia: 'Mayara e Gabriel',
    membros: [
      'Mayara',
      'Gabriel'
    ]
  },

  {
    familia: 'Priscila e Adilson',
    membros: [
      'Priscila',
      'Adilson'
    ]
  },

  {
    familia: 'Lúcia e Samuel',
    membros: [
      'Lúcia',
      'Samuel'
    ]
  },

  {
    familia: 'Cristiane e Pedro',
    membros: [
      'Cristiane',
      'Pedro'
    ]
  }

];
