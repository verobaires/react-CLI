import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
   
    
  
    return (
      <div >
        {
        Item.map(item => <Item key={item.id} img={item.img} title={item.title} stock={item.stock} price={item.price} item={item} />) 
        }
      </div>
  
    )
  }

export default ItemList

 