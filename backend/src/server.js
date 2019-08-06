// Importações
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

// Inicia o server
const server = express();

// Faz com que utilize apenas javascript para interagir com DB
mongoose.connect('mongodb+srv://mario:mario123@tindev-ao31x.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

// Libera para o server ser utilizado em qualquer ip
server.use(cors());

// Diz pro express utilizar json
server.use(express.json());

//Adiciona as rotas que estão no outro arquivo (routes.js)
server.use(routes);

//Porta de escuta
server.listen(3333);