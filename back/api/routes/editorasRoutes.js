const controller = require ('../controllers/editorasControllers.js');

server.get('/editoras', controller.editorasMenu)

server.get('/editoras/listar', controller.editorasGetAll)

server.get('/editoras/consultar/:codigo', controller.editorasGetById)

server.get('/editoras/ativoInativo/:codigo', controller.editorasAtivoInativo)