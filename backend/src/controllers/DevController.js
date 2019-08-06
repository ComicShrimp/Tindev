const axios = require('axios');
const Dev = require('../models/Dev');

// Metodos Utilizados em um controller
// INDEX, SHOW, STORE, UPDATE, DELETE

module.exports = {
    // Lista os usuarios da plataforma
    async index(request, response) {
        // Recebe o usuario logado do header do json
        const { user } = request.headers;

        // Recebe usuario logado
        const loggedDev = await Dev.findById(user);

        // Filtro na requisição do DB
        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } }, // Não igual a ele mesmo
                { _id: { $nin: loggedDev.likes } }, // Não incluso nos likes
                { _id: { $nin: loggedDev.dislikes } } // Não incluso nos deslikes
            ]
        });

        // Retorna os usuarios
        return response.json(users);
    },

    // Gurada um novo usuario
    async store(request, response) {

        // Pega username do corpo do json
        const { username } = request.body;

        // Verifica se existe o usuario
        const userExists = await Dev.findOne({ user: username });

        if(userExists){
            return response.json(userExists);
        }

        // Pega o usuario do github
        const APIResponse = await axios.get(`https://api.github.com/users/${username}`);

        //Pega somente os campos "uteis" no cadastro
        const { name, bio, avatar_url: avatar } = APIResponse.data;

        // Cria o usuário de acordo com o create definido no Dev.js
        const dev = await Dev.create({ 
            name,
            user: username,
            bio,
            avatar,
         });

        // Retorna o usuario criado
        return response.json(dev);
    }
};
