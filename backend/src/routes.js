const express = require('express');
const routes = express.Router(); // Express especial somente para as rotas
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

// Requisição é tudo o q vem com ?, por exemplo : ?nome=mario
// Response é a resposta
routes.get('/', (request, response) => {
    // Recebe parametro name
    let name = request.query.name;
    return response.json({ message: `Olá ${name}` });
});

// Cria as Rotas
routes.get('/devs', DevController.index); // Pede a lista de usuarios
routes.post('/devs', DevController.store); // Cadastra novo usuario usando json 
routes.post('/devs/:devId/likes', LikeController.store); // Da like em um usuario
routes.post('/devs/:devId/dislikes', DislikeController.store); // Da deslike em um usuario

// Deixa essa variavel exposta para ser consultada por qualquer ums
module.exports = routes;