import React from 'react'

const ItemList = ({items}) => {  
  
    return (
      <div >
        {
          items.map(item => <item key={item.id} item={item} />)
        }
      </div>
  
    )
  }

export default ItemList;