import React from 'react'
import {Item} from '../Item/Item'

const ItemList = ({Item}) => {
   
    
  
    return (
      <div >
        {
        Item.map(items => <items key={items.id} img={items.img} title={items.title} stock={items.stock} price={items.price} />) 
        }
      </div>
  
    )
  }

export default ItemList

 