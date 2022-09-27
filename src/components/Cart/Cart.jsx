import React from 'react';
import Form from './Form/Form'
import {CartContext, useCartContext} from '../Context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import { useState } from 'react';

const Cart = () => {
  const [idCompra, setIdCompra] = useState('');

  const {cart, emptyCart, removeProduct, totalPrice} = useCartContext(CartContext);

/*   if(cart.lengh === 0) {
    return(
      <>
      <p>No hay elementos en el carrito</p>
      <Link to='/'>Comprar</Link>
      </>
    );
  }
 */
const total = totalPrice();

const handleId = (id) => {setIdCompra(id);};

if(idCompra){return <h1>Gracias por la compra tu id es: {idCompra}</h1>}
if(cart.length === 0){return <h1> Hay mucho por elegir visita <Link to='/'>Home</Link></h1>}
  return (
    <div>
        
       {
        cart.map(product => 
        <ItemCart key={product.id} product={product}/>)
       }
       <p>
        total: {totalPrice()}
       </p>
       
<Form cart={cart} total={total} emptyCart={emptyCart} handleId={handleId}/>
    </div>
  );
};

export default Cart