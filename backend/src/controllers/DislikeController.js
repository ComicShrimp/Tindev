const Dev = require('../models/Dev');

// Ver Likecontroller, é a mesma lógica, somente trocando o array para dislike 
module.exports = {
    async store(request, response) {
        const { devId } = request.params;
        const { user } = request.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return response.status(400).json({ error: "Dev not Exists" });
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        return response.json(loggedDev)
    }
}