import React from 'react'; // Biblioteca Básica do React
import ReactDOM from 'react-dom'; // Biblioteca mais específica para DOM's
import App from './App'; // Importação do componente utilizado

// Chamada do react para fazer a renderização na tela.
// É recomendado que seja chamado apenas uma vez na aplicação
ReactDOM.render(<App />, document.getElementById('root'));
