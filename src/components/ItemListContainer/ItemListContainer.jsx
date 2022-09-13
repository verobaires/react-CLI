import estilos from './ItemListContainer.module.css';
import React, { useState, useEffect } from 'react';
import { product } from '../../mock/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ welcome }) => {

    const [items, setItems] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {
        const getProducts = () => new Promise((res, rej) => {
            const prodFiltrados = product.filter((prod) => prod.category === categoryName);
            setTimeout(() => {
                res(categoryName ? prodFiltrados : product);
            }, 1000);
        });


        getProducts()
            .then((data) => { setItems(data); })
            .catch((error) => {
                console.error(error);
            });

    }, [categoryName]);

    return (
        <div>
            <h2 className={estilos.welcome}>{welcome}</h2>
            <p className={estilos.welcomeParrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, similique illum dolorem explicabo a aperiam?</p>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer