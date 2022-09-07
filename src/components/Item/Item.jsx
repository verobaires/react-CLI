import React from "react";
import ItemCount from "../ItemCount/ItemCount";
/* Hola Osito es info de backup que aparece si no carga products  */
export const Item = (
    {
      title = 'Hola osito',
      img = 'https://res.cloudinary.com/duyahznm2/image/upload/v1662347348/libreria/0-3anios/hola-osito_wiqygj.jpg',
      price = 2400,
      stock = 100,
      category = '0-3 años',
      description = 'libro de sensaciones'
    }
      ) => {
        return (
            <div>
              <h2>{title}</h2>
              <img src={img} alt={`Imagen de ${description}`} />
              <h2>{category}</h2>
              <h3>{price}</h3>
              <p>Stock: {stock}</p>
              <ItemCount stock={100} />
            </div>
        )
          }






