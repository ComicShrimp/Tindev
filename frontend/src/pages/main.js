// Página princiapal onde aparecerá todos os usuários

// Importação da biblioteca padrão e userState e useEffect
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'; // Importação da imagem
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
import './main.css'; // Importação do css

import api from '../services/api'; // Importação da classe da API

// Exportação do componente, porém, recebe um parametro obrigatoriamente
// A variavel match recebe todos os parametros passados a ele
export default function Main({ match }) {

    // Inicia a variavel users e setUsers com um array vazio
    const [users, setUsers] = useState([]);

    // Faz uma chamada API quando a tela for carregada
    // Recebe dois parametros(função a ser executada, quando  vai ser executada)
    // Passando uma variavel, quando ela for alterada será executada a função
    useEffect(() => {
        // Criada função interna para carregar usuarios e utilizar o async
        async function loadUsers() {
            // Pega da API a lista de usuarios, passando o header e tudo
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            });

            // Atualiza a variavel users com os dados da API
            setUsers(response.data);
        }

        loadUsers();
    }, [match.params.id]);

    // Lida com a ação do butão de like
    async function handleLike(id) {
        // Manda para API adicionar o like com a estrutura (url, body, header)
        await api.post(`/devs/${id}/likes`, null, {
            headers: {
                user: match.params.id,
            }
        });

        // Atualiza a lista de usuarios tirando o usuário que foi interajido
        setUsers(users.filter(user => user._id !== id));
    }

    // Lida com a ação do butão deslike (Mesmo do like)
    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: {
                user: match.params.id,
            }
        });

        setUsers(users.filter(user => user._id !== id));

    }

    // Corpo que será retornado pelo componente

    // A tag link adiciona um link à logo
    // Com as {} é possivel declarar o corpo dependendo do estado
    // se a lista for maior que 0, ele retorna um map dos users com a key do user._id
    // assim o corpo sempre será repetido para cada usuario.
    return (
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt="Tindev" />
            </Link>
            {useEffect.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name} />
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>

                            <div className="buttons">
                                <button type="button" onClick={() => handleDislike(user._id)}>
                                    <img src={dislike} alt="dislike" />
                                </button>
                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={like} alt="like" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                    <div className="empty">Acabou :(</div>
                )}
        </div>
    );
}