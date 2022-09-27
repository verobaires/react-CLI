import React from 'react';
import{addDoc, collection, doc, serverTimestamp, updateDoc} from 'firebase/firestore'
import { useState } from 'react';
import {db} from '../../firebaseConfig';

const Form = ({cart, total, clearCart, handleId}) => {

    const [nombre, setNombre] = useState('');/* hay que hacer un estado por cada input y despues poner en value que coincida con este y agregar el evento onChange para capturar el valor del input
    
    name es optativo, value es obligatorio
    */
    const [apellido, setApellido] = useState('');

    const hacerSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer: {nombre: nombre, apellido: apellido},
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const orderCollection = collection(db, 'orders');

        addDoc(orderCollection, order).then( (res) => {
            handleId(res.id);
            clearCart();
            updateDoc();
        });
    };

    const updateprod = ( ) => {
        const orderDoc = doc(db, 'orders', '39MNE0z9ffSUnhg3HgML');
        updateDoc(orderDoc, {total: 100});
    })

  
    const hacerCambioNombre = (evento) => {
        setNombre(evento.target.value);
    }

    const hacerCambioApellido = (evento) => {
        setApellido(evento.target.value);
    }


    return (
        <div>
            <form action="" onSubmit={hacerSubmit}>
                <input type="text" name="nombre" id="" placeholder='Nombre' value={nombre} onChange={hacerCambioNombre} />
                <input type="text" name="apellido" id="" placeholder='Apellido' value={apellido} onChange={hacerCambioApellido} />
                <button>Send</button>
            </form>
        </div>
    );
};

export default Form