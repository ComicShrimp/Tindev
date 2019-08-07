import React, { useEffect } from 'react';
import logo from '../assets/logo.svg'; // Importação da imagem
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
import './main.css';

import api from '../services/api';

export default function Main({ match }) {

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            });

            console.log(response);
        }

        loadUsers();
    }, [match.params.id]);

    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
                    <footer>
                        <strong>Diego</strong>
                        <p>Programador</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
                    <footer>
                        <strong>Diego</strong>
                        <p>Programador</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
                    <footer>
                        <strong>Diego</strong>
                        <p>Programador</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
                    <footer>
                        <strong>Diego</strong>
                        <p>Programador</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}