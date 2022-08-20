import estilos from './ItemListContainer.module.css'

const ItemListContainer = ({welcome}) =>{
    return(
        <>
        <h2 className={estilos.welcome}>{welcome}</h2>
        <p className={estilos.welcomeParrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, similique illum dolorem explicabo a aperiam?</p>
        </>
    )
}

export default ItemListContainer