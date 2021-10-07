const mysql = require('mysql2'); //mysql2 é instalado com npm install mysql2 --save
const database = 'dadosweb212';

//instanciar objeto de acesso ao banco de dados
const conexao = mysql.createConnection({
    user: 'root',
    password: 'senha',
    host: 'localhost',
    port: 3306 //porta padrão mysql
})

conexao.connect((err) =>{
    if(err){
        console.log('Erro ao conectar ao MySQL')
        return
    }
    conexao.query('USE ' + database);
    console.log('\nConexão estabilizada com sucesso!!!');
})

module.exports = conexao;