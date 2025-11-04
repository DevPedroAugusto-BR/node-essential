# npmChapter

Projeto exemplo com uma API HTTP mínima em Node.js que retorna JSON. Serve como material didático para conceitos básicos de Node, npm, nodemon e uso de dependências (ex.: mysql).

## Conteúdo
- learning-json.js — servidor HTTP puro (http, url, fs) com um endpoint de exemplo.
- package.json — scripts e dependências.
- base_de_conhecimento.txt — notas e recomendações do projeto.

## Requisitos
- Node.js (>= 12)
- npm

## Instalação
1. Abrir o terminal na pasta do projeto:
   - Windows (PowerShell/Prompt): cd "c:\Users\User\Documents\Livro Node\npmChapter"
2. Instalar dependências:
   - npm install

> Observação: a dependência `mysql` está listada em package.json, mas não é usada no exemplo atual.

## Execução
- Executar diretamente o arquivo de exemplo:
  - node learning-json.js
- Usando o script npm (ajuste necessário):
  - O package.json atual aponta `start` para `app.js`. Para usar o script padrão, atualize `package.json` para `"start": "node learning-json.js"` ou rode `node learning-json.js`.
- Usar nodemon para desenvolvimento (recarrega automaticamente):
  - Instalar globalmente: npm install -g nodemon
  - Ou instalar como devDependency: npm install --save-dev nodemon
  - Executar: npm run nodemon

## Scripts úteis (package.json)
- npm run start — iniciar a aplicação (ajustar para o arquivo correto).
- npm run nodemon — iniciar com nodemon (requer instalação).

## Endpoints (learning-json.js)
- GET /teste
  - 200 OK
  - Content-Type: application/json; charset=utf-8
  - Body: {"mensagem":"Olá Mundo!"}
- Outros caminhos
  - Atualmente retornam JSON com erro (sugestão: alterar para status 404)

Exemplos com curl:
- curl http://localhost:3003/teste
- curl -i http://localhost:3003/qualquer

## Notas e boas práticas
- Use variáveis de ambiente para configurar a porta (process.env.PORT).
- Retorne códigos HTTP adequados (200, 404, 500).
- Considere usar Express para roteamento e melhor organização.
- Separe lógica de rotas e conexões em módulos.
- Adicione .gitignore e inclua node_modules/.
- Documente endpoints ou gere OpenAPI/Swagger para APIs maiores.

## Sockets e tempo real
- Este exemplo não usa sockets. Para tempo real, considerar:
  - socket.io ou ws (npm install socket.io)

## Autor e licença
- Autor: Pedro Augusto Mendes
- Licença: ISC

Fim.
