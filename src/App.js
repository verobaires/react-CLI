
import './App.css';

/* export const Constante =() => 'Hola constante'; ESTE ES EXPORT NOMBRADO*/
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer'

import Main from './components/Main/Main'

const App = () => {
  return (
    <>
    <Header/>    
      <Main/>
      <Footer/>
    </>/* esto es un fragment */
  )
}


export default App;/* necesitamos siempre exportar para poder importar en index.js ESTE EXPORT DEFAULT Y SOLO PUEDE HABER UNO */

