import { useContext, useState } from "react";

export const CartContext = React.createContext([]);

const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);    

    const addProduct = (item, quantity) => {
        if (isInCart(item.id){
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...item, quantity }])
        }
    }
/* me dice costo total */
    const totalPrice = () => {
        return cart.reduce(
            (prev, act) => prev + act.quantity * act.price, 0
        );
    };
/* me dice cuantos productos */
    const totalProducts = () => {
        return cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
      };


      const emptyCart = () => { setCart([]); };

    const isInCart = (id) =>
        cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    /* const addToCart = (item, quantity , description) => {
      if (isInCart(item.id)) {
        return setCartList(
          cartList.map((product) =>
            product.id === item.id
              ? { ...product, quantity: product.quantity + quantity }
              : product
          )
        );
      }
      setCartList([...cartList, { ...item, quantity }]);
    };
  
   
  
    const deleteById = (id) => {
      setCartList(cartList.filter((item) => item.id !== id));
    };
  
    const removeOneUnit = (id) => {
      if (unitsPerProduct(id) === 1) {
        return deleteById(id);
      }
      setCartList(
        cartList.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    };
  

  */

    /*
      const unitsPerProduct = (id) => {
        const foundInCart = cartList.find((item) => item.id === id);
        return foundInCart ? foundInCart.quantity : 0;
      };
     */
    return (
        <CartContext.Provider
            value={{
                isInCart,
                addProduct,
                emptyCart,
                removeProduct,
                totalPrice,
                totalProducts

            }}  >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;