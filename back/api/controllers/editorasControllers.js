const models = require('../models/editorasModels.js');

module.exports = {
    editorasMenu,
    editorasGetAll,
    editorasGetById,
    editorasAtivoInativo
    
}

function editorasMenu(req, res){
    res.json('Rota Menu de Editoras Encontrada!');
    console.log('Rota Menu de Editoras Encontrada!')
}
//lista todos editoras
function editorasGetAll(req, res){
    //res.send('Rota de Listagem de Editoras Encontrada!');
    console.log('Acessando listagem de editoras { M O D E L }')
    models.getAllEditoras(function(err,resposta){
        console.log('Retornando da { M O D E L }', resposta)
        if(err){
            throw err;
        }else{
            res.json(resposta)
        }
    })
}
//lista editores por ID 
function editorasGetById (req, res){
    const id = req.params.codigo;
    console.log('Parametro esperado ' + id)
    models.getByIdEditoras(id, function(err, resposta){
        console.log('Retornando da Consulta de Editoras { M O D E L }', resposta)
        if(err){
            throw err;
        } else {
            res.json(resposta)
        }
    })
}
//ativar/desativar editoras 
function editorasAtivoInativo (req, res){
    const id = req.params.codigo;
    res.json('Ativar/Inativar Editoras { M O D E L }')
    console.log('Ativar/Inativar Editoras { M O D E L }')
    console.log('Parametro esperado ' + id)

//buscar/extrair o registro correspondente ao identificador "id"
    models.getByIdEditoras(id, function(err, resposta){
        console.log('Retornando da Consulta de Editoras { M O D E L }', resposta)
        let p_ativo = resposta[0].edt_ativoinativo
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