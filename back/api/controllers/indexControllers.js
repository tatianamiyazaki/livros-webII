const models = require('../models/indexModels.js');

module.exports = {
    index,
}

function index(req, res){
    res.send('Rota Raiz Encontrada!');
    console.log('Rota Raiz Encontrada')
}

