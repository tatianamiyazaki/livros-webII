const http = require('http');
const servidor = require('./config/aplicativo.js');
//const conexao = require('./config/conexao.js')

server.get('/editoras', (req, res) => {
    res.send('Rota Editoras Encontrada!');
})

server.get('/livros', (req, res) => {
    res.send('Rota Livros Encontrada!');
})

http.createServer(servidor).listen(servidor.get('porta'), function(){
    console.log('\nServidor Executando na Porta ' + server.get('porta')); //busca a porta configurada no arquivo aplicativo.js
})