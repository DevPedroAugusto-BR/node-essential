var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    var parts = url.parse(request.url);
    var path = parts.path;

    if(path == '/teste') {
        response.end(JSON.stringify({mensagem: 'Olá Mundo!'}));
    } else {
        response.end(JSON.stringify({erro: '404 - Not found'}));
    }
})

server.listen(3003);

console.log('JSON Server running at http://localhost:3003/teste... ')