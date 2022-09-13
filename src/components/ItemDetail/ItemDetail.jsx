import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import {Link} from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [cant, setCant] = useState(0);

    const onAdd = (argumento) => { setCant(argumento) };



    return (
        <div>

            <img src={item.img} alt={item.title} />

            <div>
                <h2>{item.title}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam libero, impedit voluptatum iure qui cumque nulla voluptas architecto doloribus. Modi ratione laborum ipsam praesentium eius saepe sapiente necessitatibus qui iure.</p>
                <h3>{item.price}</h3>
                {cant === 0 ? ( <Counter stock={item.stock} inicial={1} onAdd={onAdd}/>  )         : (<Link to="/cart">Ir a Carrito</Link>)}

            </div>

        </div>
    );
};

export default ItemDetail


