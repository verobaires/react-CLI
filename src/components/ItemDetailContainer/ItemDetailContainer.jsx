import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
/* import { product } from '../../mock/products'; */
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
/* getDocs devuelve una promesa */
import { dataBase } from '../../firebaseConfig'
/* import { useParams } from 'react-router-dom'; */

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { idProd } = useParams();

    useEffect( () => {
      const itemsCollection = collection(dataBase, "libros-0a3");
      getDocs(itemsCollection)
        .then((respuesta) => { const products = respuesta.docs.map((prod) => {
            return { id: prod.id, ...prod.data(), };
          }    );
  setItems(products);
} )
         .catch ((error) => { console.log(error); })
        .finally(() => {   setIsLoading(false); });


  }, [idProd]);


/* 
    const getProduct = () =>
    new Promise(  (res, rej) => {
      const prod = product.find((prod) => prod.id === Number(idProd)
    );
    });
 
 
    getProduct()
      .then((data) => { setItem(data); })
      .catch((error) => { console.error(error); })
 
  }, []); */

return (
  <div>
    {isLoading ? (
      <>
        <h2>cargando</h2>
      </>
    ) : (
      <>
        <ItemList items={item} />
      </>
    )}
  </div>
);
};


export default ItemDetailContainer
/* OJO el parentesis del map cierra despues del cierre de llaves al terminar el return 
return (
  <div>
      

      {
          articulos.map((losItems) => {
              console.log(losItems)
              return(
                  <div key={losItems.id}>
                      <img src={losItems.image} width="300px" alt={losItems.title} />
                      <h3>{losItems.title}</h3>                       
                  </div>
              );
          })    }

  </div>
);

*/ 