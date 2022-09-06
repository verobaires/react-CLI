import React, { useEffect, useState } from 'react'
import { product } from '../mock/products'
import  ItemList  from '../ItemList/ItemList'


import estilos from './ItemListContainer.module.css'



const ItemListContainer = ({welcome}) =>{

    const [items, setItems] = useState([])

    useEffect( () => {
        const getProducts = new Promise ( (res, rej)  =>  {    
            
            setTimeout( () => {res(product);}, 2000  ); 

        }
        );
  
  getProducts 
    
      .then((data) => {setItems(data);})
      .catch((error) => console.error(error))
      .finally(() => {});
    }, []);  

    return(
        <ItemList item={items} />
    )
}

export default ItemListContainer




    
