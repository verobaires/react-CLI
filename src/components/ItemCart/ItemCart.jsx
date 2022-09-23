import React from 'react'
import {useCartContext} from '../Context/CartContext'

const ItemCart = ({product}) => {
    const{removeProduct} = useCartContext();
  return (
    
    <div>
        <img src={product.img} alt={product.title} />
      

            <div>
                <h2>Titulo: {product.title}</h2>
                <p>Cantidad: {product.quantity}</p>
                <h3>Precio: {precio.price}</h3>
                <p>Subtotal: ${product.quantity*product.price}</p>
                <button onClick={() => removeProduct(product.id) }>Eliminar</button>

            </div>

      
    </div>



    
  )
}

export default ItemCart