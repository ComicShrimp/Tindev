// Importações
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

// Inicia o server
const app = express();
// Adiciona o webhook e o http server
const server = require('http').Server(app);
// Passa o server http para a criação da função
const io = require('socket.io')(server); // Biblioteca para WebSocket

const connectUsers = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;
    connectUsers[user] = socket.id;
});

// Faz com que utilize apenas javascript para interagir com DB
mongoose.connect('your_database_here', {
    useNewUrlParser: true,
});

// middleware, fuciona tipo uma rota, para disponibilizar informação para outros lugares
// Irá ser acionando antes de tudo na aplicação e dps ele chama o next para continuar o fluxo normal
app.use((request, response, next) => {
    request.io = io;
    request.connectUsers = connectUsers;

    return next();
});

// Libera para o app ser utilizado em qualquer ip
app.use(cors());

// Diz pro express utilizar json
app.use(express.json());

//Adiciona as rotas que estão no outro arquivo (routes.js)
app.use(routes);

//Porta de escuta
server.listen(3333);
