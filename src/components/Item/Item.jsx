import React from 'react';
import estilos from './Item.module.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const Item = ({ item }) => {
    const name = useContext(CartContext);
    return (
        <Link to={'detail/${item.id}'}>
            <img src={item.img} alt="" />
            <div>
                <h2>{item.title}</h2>
            </div>
        </Link>


    );

    export default Item



  /* <div>
            
          
                <h4>{item.price}</h4>
                <h5>{item.category}</h5>
                <button>Ver detalles</button>
            </div>
    </div> */