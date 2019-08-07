import React from 'react';
import './login.css';
import logo from '../assets/logo.svg'; // Importação da imagem


export default function Login() {
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="Tindev" />
                <input
                    placeholder="Digite seu usuario no Github"
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

