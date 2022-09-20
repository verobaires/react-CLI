import React from 'react';
import useCartContext from '../Context/CartContext'

const CartWidget = () => {

  const {totalProducts} = useCartContext();

  return (

<>
    <span className="material-icons">
    add_shopping_cart
    </span>
  <span>{totalProducts() || ' '}</span>
</>
  )
}

export default CartWidget