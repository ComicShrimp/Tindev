// Arquivo para lidar com a API externa

import axios from 'axios'; // Importação da biblioteca necessária

// Criação do componente passando o baseURL como padrão
// assim não será necessário quem digite a todo momento
const api = axios.create({
    baseURL: 'http://localhost:3333',
});

// Exportação do componente
export default api;