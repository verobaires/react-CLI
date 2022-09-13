import React from 'react';
import { useState } from 'react';

const Form = () => {

    const [nombre, setNombre] = useState('');/* hay que hacer un estado por cada input y despues poner en value que coincida con este y agregar el evento onChange para capturar el valor del input
    
    name es optativo, value es obligatorio
    */
    const [apellido, setApellido] = useState('');

    const hacerSubmit = (evento) => {
        evento.preventDefault();
    };

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