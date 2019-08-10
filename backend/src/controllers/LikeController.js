const Dev = require('../models/Dev');

module.exports = {
    // Guarda a informação de quando derem um like
    async store(request, response) {
        // Pega do corpo e do header do json o usuario e usuario q receberá o like
        // devId será adicionado à url, por isso utiliza-se o metodo params
        const { devId } = request.params;
        const { user } = request.headers;

        // Pega os usuarios do banco de dados
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        // Verifica se o usuário que receberá o like existe
        if(!targetDev){
            return response.status(400).json({ error: "Dev not Exists" });
        }

        // Verifica se deu match
        if(targetDev.likes.includes(loggedDev._id)) {
            const loggedSocket = request.connectUsers[user];
            const targetSocket = request.connectUsers[devId];

            if (loggedSocket) {
                request.io.to(loggedSocket).emit('match', targetDev);
            }

            if (targetSocket) {
                request.io.to(targetSocket).emit('match', loggedDev);
            }

        }

        // Adiciona à lista de likes do logged dev o targetdev
        loggedDev.likes.push(targetDev._id);

        // Salva as alterações
        await loggedDev.save();

        // Retorna o usuário logado para verificação de dados
        return response.json(loggedDev)
    }
}