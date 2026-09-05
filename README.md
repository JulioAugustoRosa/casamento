# 💍 Site de Casamento — Júlio & Grazielly

Site de casamento completo: landing page com fotos e efeitos de rolagem, confirmação de presença (RSVP), área dos padrinhos e painel do organizador.

## ✨ O que o site tem

**Para os convidados** (basta enviar o link):
- **Capa em tela cheia** com foto, contagem regressiva e os nomes surgindo em animação
- **Nossa História**: linha do tempo com fotos que aparecem conforme você rola a tela
- **Faixas em parallax**: fotos grandes que se movem mais devagar que o conteúdo
- **Detalhes da celebração**: data, local (com botão para o Google Maps), traje e presentes
- **Galeria** em mosaico — clique numa foto para ampliar (arrasta o dedo para trocar de foto)
- **Área dos padrinhos** protegida por senha
- **Confirmar Presença**: a pessoa digita o nome, informa acompanhantes, telefone e deixa um recado — sem precisar de login. Quem já respondeu vê os dados registrados e pode editá-los (sem duplicar)
- **Mural de recados** para deixar mensagens aos noivos, com os recados aparecendo na própria página

**Para os noivos** (Área do casal, no rodapé do site):
- Login: usuário `casal` (a senha é conhecida por vocês)
- 📊 Visão geral: estatísticas em tempo real, gráfico de confirmações, últimas respostas
- 👥 Convidados: adicionar/editar/excluir, busca, filtros por status e grupo, exportar CSV
- ✅ Checklist de planejamento (com sugestões prontas)
- 💰 Orçamento: despesas, valores orçados x pagos
- 💌 Recados deixados pelos convidados
- ⚙️ Configurações: editar nomes, data, horário, local, traje, mensagem e presentes — tudo reflete no site na hora

## 📸 Trocar as fotos e os textos

Tudo o que é foto, história e padrinhos fica em **um único arquivo: `fotos.js`**.
Não é preciso mexer no `index.html`.

1. Coloque a foto nova dentro da pasta **`fotos/`**
2. Abra o **`fotos.js`** e escreva o nome dela, por exemplo: `'fotos/minha-foto.jpg'`

Dentro do `fotos.js` você controla:

| O quê | Onde |
|---|---|
| Foto da capa (primeira tela) | `capa` |
| Fotos grandes de fundo (parallax) | `faixas` |
| Linha do tempo "Nossa História" (foto + data + título + texto) | `historia` |
| Galeria (quantas fotos quiser: 3, 8, 20...) | `galeria` |
| Padrinhos, madrinhas, trajes, horários e recado | `padrinhos` |

Para **tirar** uma foto da galeria, apague a linha dela (ou coloque `//` na frente).
Para **adicionar**, escreva mais uma linha. A galeria se ajusta sozinha.

> Deixe cada foto com no máximo ~1500px de largura e ~300 KB, senão o site fica lento no celular dos convidados. As fotos que já estão na pasta foram otimizadas (formato `.webp`).

A imagem `fotos/capa-link.jpg` é a **prévia que aparece ao compartilhar o link no WhatsApp**.

## 🔐 Área dos padrinhos

- Senha atual: **`padrinhos`** (não diferencia maiúsculas de minúsculas)
- Para mudar a senha: gere o código SHA-256 da nova senha (por exemplo em `emn178.github.io/online-tools/sha256.html`, tudo em minúsculas) e substitua o valor de `PADRINHOS_HASH` no `index.html`
- O conteúdo dessa área (nomes, trajes, horários) fica em `fotos.js`, dentro de `padrinhos`

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
Lembre-se de enviar também a pasta `fotos/` e o arquivo `fotos.js`.

## 🗂️ Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | o site inteiro (visual + confirmação de presença + painel do casal) |
| `fotos.js` | **fotos e textos** — o arquivo que você vai editar no dia a dia |
| `fotos/` | as imagens do site |
| `firebase-config.js` | chaves do banco de dados |
| `firestore.rules` | regras de acesso do banco |

## ⚠️ Nota de segurança

Este é um site estático: a proteção do painel e da área dos padrinhos é uma barreira de conveniência (senha verificada no navegador) e as regras do banco são abertas para permitir RSVP sem login. Adequado para um site de casamento; não guarde dados sensíveis nele.
