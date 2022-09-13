import React from 'react'

const ItemDetailContainer = ({articulos}) => {
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
};

export default ItemDetailContainer
/* OJO el parentesis del map cierra despues del cierre de llaves al terminar el return */ 

