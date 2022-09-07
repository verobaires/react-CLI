import React from 'react'
import {Item} from '../Item/Item'

export const ItemList = ({bookList}) => {    
  
    return (
      <div >
        {
          bookList.map(
            misItems => 
            <Item key={misItems.id} 
                  img={misItems.img} 
                  title={misItems.title} 
                  stock={misItems.stock} 
                  price={misItems.price}
                  description={misItems.description}/>
              ) 
        }
      </div>  
    )
  }



 