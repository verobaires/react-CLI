import estilos from './ItemListContainer.module.css';
import React, { useState, useEffect } from 'react';
/* import { product } from '../../mock/products'; */
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ItemListContainer = ({ welcome }) => {

    const [items, setItems] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {
        /* const getProducts = () => new Promise((res, rej) => {
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

    }, [categoryName]); */

        const itemCollection = collection(db, 'productos');

        const referencia = categoryName
            ? query(itemCollection, where('category', '==', categoryName))
            : itemCollection;

        getDocs(referencia)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error)
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