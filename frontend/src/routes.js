// Arquivo que irá lidar com todas as rotas da aplicação,
// As rotas são a url, exemplo: localhost:3333/devs

import React from 'react'; // Importação da biblioteca necessária

// Biblioteca necessária para fazer as rotas e importação somente 
// dos componentes necessários.
import { BrowserRouter, Route } from 'react-router-dom';

// Importação das páginas gerenciadas pela biblioteca
import Login from './pages/login';
import Main from './pages/main';

// Exportação e criação do componente Routes
export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/dev/:id" component={Main} />
        </BrowserRouter>
    );
}

// Obs: A flag "exact" exige com que o endereço seja exatamente a fornecida no PATH
// e para passar uma variavel utiliza-se :nome_da_variavel
