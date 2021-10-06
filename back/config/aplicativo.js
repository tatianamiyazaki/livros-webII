const express = require('express');
const consign = require('consign');

server = express(); //start o server

server.set('porta', 3001); //define a porta que vai iniciar

consign({ cwd: 'api'}) // isso é uma promise
    .include('models')
    .then('controllers')
    .then('routes')
    .into(server)
;
//consign vai verificando as comunicações a medida que os arquivos são adicionados no projeto (verifica se tem alguma comunicação irregular)
module.exports = server;

