import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import estilos from './header.module.css';

/* import CartWidget from './CartWidget/CartWidget'; */


const Header = () => {
    /* recordar que luego de la clase para llamar al nombre de la variable y la clase que esta en module hay que usar parentesis */
    return (
        <>
            <header className={estilos.contendorPpal}>
                <nav className={estilos.nav}>
                    <div>
                        <h1>LOGO</h1>
                    </div>
                    <ul className={estilos.listaDesordenada}>
                        <li>COMBOS</li>
                        <li>EDADES</li>
                        <li>TIENDA</li>
                        <li>NOSOTROS</li>
                        <li>FAQ</li>
                    </ul>
                    <div className={estilos.login}>
                        <p>LOGIN</p>
                    </div>

                    <CartWidget />
                </nav>
            </header>
        </>


    )

}

export default Header;