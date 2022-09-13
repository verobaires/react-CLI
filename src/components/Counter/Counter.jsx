import React, { useState } from 'react';

/* paso los parametros los props */

/* paso initial en lugar de 0 porque en esta ya defino la cantidad minima */

const Counter = ({ stock, inicial, onAdd }) => {


    const [contador, setContador] = useState(inicial);

    const sumar = () => contador < stock ? setContador(contador + 1) : alert('Sin Stock');

    console.log(sumar)

    const restar = () => contador > inicial ? setContador(contador - 1) : alert('quito todos los articulos');

    console.log(restar)


    return (
        <div >
            <button onClick={sumar}  >+</button>

            <h2 > Contador: {contador}</h2>

            <button onClick={restar}  >-</button>

            <button onClick={() => onAdd (contador)} >Agregar al carrito</button>
        </div>
    );
};



export default Counter