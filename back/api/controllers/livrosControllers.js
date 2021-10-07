const models = require('../models/livrosModels.js');

module.exports = {
    livrosMenu,
    livrosGetAll,
    livrosGetById
    
}

function livrosMenu(req, res){
    res.json('Rota Menu de Livros Encontrada!');
    console.log('Rota Menu de Livros Encontrada!')
}

//lista todos livros
function livrosGetAll(req, res){
    //res.send('Rota de Listagem de Livros Encontrada!');
    console.log('Acessando listagem de livros { M O D E L }')
    models.getAllLivros(function(err,resposta){
        console.log('Retornando da { M O D E L }', resposta)
        if(err){
            throw err;
        }else{
            res.json(resposta)
        }
    })
}

//lista livros por ID 
function livrosGetById (req, res){
    const id = req.params.codigo;
    console.log('Parametro esperado ' + id)
    models.getByIdLivros(id, function(err, resposta){
        console.log('Retornando da Consulta de Livros { M O D E L }', resposta)
        if(err){
            throw err;
        } else {
            res.json(resposta)
        }
    })
}