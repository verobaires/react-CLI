import React from 'react';
import estilos from './button.mdoule.css';

const Button = ({value, variant}) => {
  return (
    <button className={estilos[variant]}>{value}</button>
  )
}

export default Button