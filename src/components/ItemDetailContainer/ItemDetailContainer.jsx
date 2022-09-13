import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { product } from '../../mock/products';
import { useState } from 'react';
import { useEffect } from 'react';
/* import { useParams } from 'react-router-dom'; */

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

 /*  const { idProd } = useParams(); */

  useEffect( () => {

    const getProduct = () =>
    new Promise(  (res, rej) => {
      const prod = product.find((prod) => prod.id === Number(idProd)
    );
    });


    getProduct()
      .then((data) => { setItem(data); })
      .catch((error) => { console.error(error); })

  }, []);

  return (
    <div>
      <ItemDetail />
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