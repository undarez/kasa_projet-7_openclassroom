import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/utils/ContainerIndex/_index.scss';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//ReactDOM.createRoot() pour créer une racine pour le rendu React. Cette méthode permet de passer à React un élément DOM qui sera utilisé pour le rendu des composants React. Dans ce cas, l'élément est récupéré par la méthode document.getElementById('root') qui recherche un élément du DOM avec l'id "root". et root ce trouve dans le ficheir html