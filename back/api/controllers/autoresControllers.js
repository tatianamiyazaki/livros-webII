const models = require('../models/autoresModels.js');

module.exports = {
    autoresMenu,
    autoresGetAll,
    autoresGetById,
    autoresAtivoInativo
    
}

function autoresMenu(req, res){
    res.json('Rota Menu de Autores Encontrada!');
    console.log('Rota Menu de Autores Encontrada!')
}
//lista todos autores
function autoresGetAll(req, res){
    //res.send('Rota de Listagem de Autores Encontrada!');
    console.log('Acessando listagem de autores { M O D E L }')
    models.getAllAutores(function(err,resposta){
        console.log('Retornando da { M O D E L }', resposta)
        if(err){
            throw err;
        }else{
            res.json(resposta)
        }
    })
}
//lista autores por ID 
function autoresGetById (req, res){
    const id = req.params.codigo;
    console.log('Parametro esperado ' + id)
    models.getByIdAutores(id, function(err, resposta){
        console.log('Retornando da Consulta de Autores { M O D E L }', resposta)
        if(err){
            throw err;
        } else {
            res.json(resposta)
        }
    })
}
//ativar/desativar autor 
function autoresAtivoInativo (req, res){
    const id = req.params.codigo;
    res.json('Ativar/Inativar Autores { M O D E L }')
    console.log('Ativar/Inativar Autores { M O D E L }')
    console.log('Parametro esperado ' + id)

//buscar/extrair o registro correspondente ao identificador "id"
    models.getByIdAutores(id, function(err, resposta){
        console.log('Retornando da Consulta de Autores { M O D E L }', resposta)
        let p_ativo = resposta[0].aut_ativoinativo
        console.log('A/I: ' + p_ativo)
        
//trocar o status de ativo/inativo do registro posicionado
        if(err){
            throw err;
        } else {
            if (p_ativo == "A"){
                p_ativo = "I"
            }else
                p_ativo = "A"
        }
        console.log("A/I: " + p_ativo)

//atualizar o campo com o novo status
        models.ativarInativar(id, p_ativo, function(err, result){
            if(err){
                throw err
            }
            console.log("Registro Atualizado!!!")
        })
    })
}