
import './App.css';

/* export const Constante =() => 'Hola constante'; ESTE ES EXPORT NOMBRADO*/
import Header from './components/Header/Header';


import Main from './components/Main/Main'

import ItemListContainer from './components/ItemListContainer/ItemListContainer';


import Footer from './components/Footer/Footer'

const App = () => {
  const saludo='Bienvenidos gracias por venir'
  return (
    <>
      <Header />
      <Main />
      <ItemListContainer welcome={saludo} /> 
      <Footer />
    </>/* esto es un fragment */
  )
}


export default App;/* necesitamos siempre exportar para poder importar en index.js ESTE EXPORT DEFAULT Y SOLO PUEDE HABER UNO */

