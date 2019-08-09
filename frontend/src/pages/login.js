// Arquivo de gerenciamento da tela de login

// Importação do userState para habilitar o uso do state
import React, { useState } from 'react'; // Impotação da biblioteca obrigatória
import './login.css'; // Importação do arquivo de estilo da página de login
import logo from '../assets/logo.svg'; // Importação da imagem
import api from '../services/api'; // Importação do arquivo que gerencia conexão com API

// Exportação do componente de Login
export default function Login({ history }) {

    // Variavel que estará com state
    // setUsername será usado para mudar o valor da variavel
    // e entre as '' é o estado inicial
    const [ username, setUsername ] = useState('');

    // Função que vai lidar com o botão enviar
    async function handleSubmit(e) {
        e.preventDefault();

        // Consulta a API pra pegar o ID do usuario e ja cadastra-lo
        const response = await api.post('/devs', {
            username,
        });

        // Pega a resposta da API e tira somente o ID para ir para proxima página
        const { _id } = response.data;

        // Chama a próxima página passando o ID como parâmetro
        history.push(`/dev/${_id}`);
    }

    // Parte que será exportada
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} >
                <img src={logo} alt="Tindev" />
                <input
                    placeholder="Digite seu usuario no Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

