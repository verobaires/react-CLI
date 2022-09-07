import React, { useEffect, useState } from 'react'
import { product } from '../../mock/products'
import  {ItemList}  from '../ItemList/ItemList'


import estilos from './ItemListContainer.module.css'



export const ItemListContainer = ({welcome}) =>{

    const [bookList, setBookList] = useState([])

        const getProducts = () => new Promise ( (res, rej)  =>  {    
            
            setTimeout( () => res(product), 2000  )

        }   )   

        useEffect(() => {
            getProducts()
            .then(data => setBookList(data))
            .catch(error => console.error(error))
            .finally(()=> {}) 
          }, [])  
        
          return (
            <ItemList bookList={bookList} />
          )
          
            }




    
