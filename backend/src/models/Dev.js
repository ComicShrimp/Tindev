// Funciona como se fosse a classe, porem mais especifico para mongodb
const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true,
});

// Timestamps: true cria automaticamente a data de criação e de modificação

// Exporta o modulo para ser acessivel em outros arquivos
module.exports = model('Dev', DevSchema);
