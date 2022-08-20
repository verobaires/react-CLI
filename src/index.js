import React from 'react';
import ReactDOM from 'react-dom/client';


 import './index.css'; /*LO USAMOS SI PONEMOS TODOS LOS ESTILOS EN UN ARCHIVO*/

import App from './App';/* esta es un import con default */

import reportWebVitals from './reportWebVitals';

/* import {Constante} from './App'; esta es la manera de importar con constante en lugar de default  */



const root = ReactDOM.createRoot(document.getElementById('root'));

/* root.render(<App/>); */


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
