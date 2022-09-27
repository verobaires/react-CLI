import React from 'react';
import{addDoc, collection,  serverTimestamp, updateDoc} from 'firebase/firestore'
import { useState } from 'react';
import {db} from '../../firebaseConfig';

const Form = ({cart, total, emptyCart, handleId}) => {

    const [nombre, setNombre] = useState('');/* hay que hacer un estado por cada input y despues poner en value que coincida con este y agregar el evento onChange para capturar el valor del input
    
    name es optativo, value es obligatorio
    */
    const [apellido, setApellido] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const hacerSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer: {nombre: nombre, apellido: apellido, phone:phone, email:email},
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const orderCollection = collection(db, 'orders');

        addDoc(orderCollection, order).then( (res) => {
            handleId(res.id);/* aca tengo el id de mi nueva compra */
            emptyCart();
            updateDoc();
        });
    };

  /*   const updateprod = ( ) => {
        const orderDoc = doc(db, 'orders', '39MNE0z9ffSUnhg3HgML');
        updateDoc(orderDoc, {total: 200});
    }
 */
  
    const hacerCambioNombre = (evento) => {
        setNombre(evento.target.value);
    }

    const hacerCambioApellido = (evento) => {
        setApellido(evento.target.value);
    }

    const hacerCambioPhone = (evento) => {
        setPhone(evento.target.value);
    }
    const hacerCambioEmail = (evento) => {
        setEmail(evento.target.value);
    }


    return (
        <div>
            <form action="" onSubmit={hacerSubmit}>
                <input type="text" name="nombre" id="" placeholder='Nombre' value={nombre} onChange={hacerCambioNombre} />
                <input type="text" name="apellido" id="" placeholder='Apellido' value={apellido} onChange={hacerCambioApellido} />
                <input type="number" name="phone" id="" placeholder='phone' value={phone} onChange={hacerCambioPhone} />
                <input type="email" name="email" id="" placeholder='Email' value={email} onChange={hacerCambioEmail} />
                <button>Send</button>
            </form>
        </div>
    );
};

export default Form