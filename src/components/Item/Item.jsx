import React from 'react';
import estilos from './Item.module.css';

const Item = ({ item }) => {
    return (
        <div>
            <img src={item.img} alt="" />
            <div>
                <h2>{item.title}</h2>
                <h4>{item.price}</h4>
                <h5>{item.category}</h5>
                <button>Ver detalles</button>
            </div>
        </div>
    );
};

export default Item