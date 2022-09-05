
import  {product}  from '../mock/products';

 const Item = ({items}) => {
  return (
    <div>
               
        <h2>{items.title}</h2>
        <h2>{items.category}</h2>
        <img src={items.img} alt='' />
        <h3>{items.price}</h3>
        <p>{items.stock}</p>

    </div>
  )
}

export default Item;





