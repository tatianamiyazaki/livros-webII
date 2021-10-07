var conexao = require('../../config/conexao.js');

module.exports = {
    getAllLivros,
    getByIdLivros
}

function getAllLivros(callback){
    conexao.query('select * from livros', callback);
}

function getByIdLivros (id, callback){
    conexao.query('select * from livros where liv_codigo = ' + id, callback);
}


