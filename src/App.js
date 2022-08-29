
import './App.css';

/* export const Constante =() => 'Hola constante'; ESTE ES EXPORT NOMBRADO*/
import Header from './components/Header/Header';


import Main from './components/Main/Main'

import ItemCount from './components/ItemCount/ItemCount';/* CONTADOR */

import ItemListContainer from './components/ItemListContainer/ItemListContainer';


import Footer from './components/Footer/Footer'




const App = () => {
  const saludo='Bienvenidos gracias por visitarnos'

//ahora defino la funcion para el boton agregar en carrito
const onAdd = () =>{alert('Gracias por comprar')}


  return (
    <>
      <Header />
      <Main />
      <ItemListContainer welcome={saludo} /> 
   <ItemCount stock={20} inicial={0} onAdd={onAdd}/>  
      <Footer />
    </>/* esto es un fragment */

    /* reveer porque onAdd le paso el parametro del nombre de la funcion */
  )
}


export default App;/* necesitamos siempre exportar para poder importar en index.js ESTE EXPORT DEFAULT Y SOLO PUEDE HABER UNO */

