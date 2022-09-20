import React from 'react';
import Form from './Form/Form'
import {useCartContext} from '../Context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {

  const {cart, totalPrice} = useCartContext();

  if(cart.lengh === 0) {
    return(
      <>
      <p>No hay elementos en el carrito</p>
      <Link to='/'>Comprar</Link>
      </>
    );
  }



  return (
    <div>
        
       {
        cart.map(product => 
        <ItemCart key={product.id} product={product}/>)
       }
       <p>
        total: {totalPrice()}
       </p>
       

    </div>
  );
};

export default Cart