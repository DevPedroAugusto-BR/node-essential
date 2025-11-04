//Carrega o módulo HTTP
const http = require('http');
var url = require('url');
var fs = require('fs');

function readFile(filePath, response){
    fs.readFile(filePath, function(err, data){
        //Quando ler, escreve na response o conteúdo do arquivo JSON
        response.end(data);
    });
}

//Cria um servidor HTTP que vai responder com "Hello World" para todas as requisições
var server = http.createServer(function (request, response) {
    //Define o cabeçalho (Header) da resposta e o corpo da mensagem
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

    var parts = url.parse(request.url);
    var path = parts.path;

    if(path == '/carros/classicos'){
        //Mensagem de retorno
        readFile('./carros_classicos.json', response);
    } else if (path == '/carros/esportivos'){
        readFile('./carros_esportivos.json', response);
    } else if(path == '/carros/luxo'){
        readFile('./carros_luxo.json', response);
    } else {
        response.end('Rota inválida. Tente /carros/classicos, /carros/esportivos ou /carros/luxo' + path);
    }
    
});

//Porta onde o servidor vai escutar as requisições
server.listen(3000);

//Mensagem exibida no console
console.log('Server running at http://localhost:3000/');
