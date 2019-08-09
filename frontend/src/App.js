// Primeiro Arquivo a ser chamado pela função principal a aplicação

import React from 'react'; //Necessário em todas as páginas
import './App.css'; // Importação do CSS de costumização da Página
import Routes from './routes'; // Importação do componente Routes

// Componente em si
function App() {
  return (
    <Routes />
  );
}

// Exporta o componente App para outros arquivos
export default App;
