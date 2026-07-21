# 💍 Site de Casamento — Júlio & Grazielly

Site de casamento completo com confirmação de presença (RSVP) e painel do organizador.

## ✨ Funcionalidades

**Para os convidados** (basta enviar o link):
- Página elegante com data, local, contagem regressiva e mensagem do casal
- Botão "Confirmar Presença": a pessoa digita o nome, informa acompanhantes, telefone e deixa um recado — sem precisar de login

**Para os noivos** (Área do organizador, no rodapé do site):
- Login: usuário `organizador` (a senha é conhecida por vocês)
- 📊 Visão geral: estatísticas em tempo real, gráfico de confirmações, últimas respostas
- 👥 Convidados: adicionar/editar/excluir, busca, filtros por status e grupo, exportar CSV
- ✅ Checklist de planejamento (com sugestões prontas)
- 💰 Orçamento: despesas, valores orçados x pagos
- 💌 Recados deixados pelos convidados
- ⚙️ Configurações: editar nomes, data, horário, local, traje, mensagem e presentes — tudo reflete no site na hora

## 🗄️ Banco de dados

O site usa **Firebase Firestore** (gratuito). A configuração fica em `firebase-config.js`.
Enquanto a config estiver vazia, o site roda em *modo demonstração* (dados só no navegador local).

### Como conectar o Firebase
1. Acesse https://console.firebase.google.com e crie um projeto (ex.: `casamento-julio-grazielly`)
2. Crie um **Firestore Database** (modo produção, região `southamerica-east1`)
3. Em *Configurações do projeto → Seus apps → Web (`</>`)*, registre um app e copie o objeto `firebaseConfig`
4. Cole em `firebase-config.js` no formato `window.FIREBASE_CONFIG = { ... }`
5. Em *Firestore → Regras*, cole o conteúdo de `firestore.rules` e publique

## 🚀 Hospedagem

Hospedado no **GitHub Pages** — qualquer alteração enviada ao branch `main` atualiza o site.

## ⚠️ Nota de segurança

Este é um site estático: a proteção do painel é uma barreira de conveniência (senha verificada no navegador) e as regras do banco são abertas para permitir RSVP sem login. Adequado para um site de casamento; não guarde dados sensíveis nele.
