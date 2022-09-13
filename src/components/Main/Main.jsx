import React from 'react'
import Cart from '../Cart/Cart';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
 




const Main = () => {
    return (
        <main >
        <ItemListContainer welcome=""/>
            <ItemDetail/>
            <Cart/>
        </main>
    );
};

export default Main;