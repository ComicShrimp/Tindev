const express = require('express');
const routes = express.Router();
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
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

// Deixa essa variavel exposta para ser consultada por qualquer ums
module.exports = routes;