const controller = require ('../controllers/autoresControllers.js');

server.get('/autores', controller.autoresMenu)

server.get('/autores/listar', controller.autoresGetAll)

server.get('/autores/consultar/:codigo', controller.autoresGetById)

server.get('/autores/ativoInativo/:codigo', controller.autoresAtivoInativo)