import React from 'react'/* shortcut rafce */
import { useState, useEffect } from 'react';
/* import { Item } from '../Item/Item'; */
/* import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'; */



const ItemDetail = ({item}) => {

    /* necesito un component para renderizarlo en el dom con usestate */
const[articulos, setArticulos] = useState([]);

const[istLoading, setisLoading] = useState(true)/* si es true es porque esta cargando */

/* uso useEffect para que haga primero el return*/
useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) =>res.json()  )/* recibo info y la paso a json */
    
    .then((res) =>{setArticulos(res); console.log(res)} )/* ahora puedo ver el contenido de ese json */

    .catch((error) =>{console.log(error)})
    .finally( () => {
        setisLoading(false)
       }

    );
  
        }, [])
/* dejo los corchetes vacios para que haga la carga una sola vez */


  return (
    <div>
                 {
            istLoading ? (<h1>Cargando productos...</h1> ) : <ItemDetailContainer articulos={articulos}/>
                /* por operador ternario le decimos que si es true muestre el h1 si es false carga todos los items */    
        }
    
    </div>
    
  )
};

export default ItemDetail


/* Esta es una opcion por operador ternario le decimos que si isLoading es true entonces pasamos el mensaje del h1
En cambio si es false realiza la bajada de todos los items

return (
    <div>

                 {
            istLoading ? (<h1>Cargando productos...</h1> ) : (
                
                <>
                    {
            articulos.map((losItems) => {
                return(
                    <div key={losItems.id}>
                        <img src="{losItems.image}" width="200px" alt="{losItems.title}" />
                        <h3>{losItems.title}</h3>
                    </div>
                );
            })
                
                }
                </>
            ) 

        }
    
    </div> 
    
  )*/