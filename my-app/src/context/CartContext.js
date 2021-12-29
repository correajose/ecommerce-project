import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ( { children } ) => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItem = (item, quantity) => {

    item.qtty !== 0 &&
      isInCart(item) ?
      cart[cart.findIndex(e => e.id === item.id)].addedQtty += quantity
        : setCart(cart === [] ? 
            [{ ...item, addedQtty: quantity}]
            : [...cart, { ...item, addedQtty: quantity}]);
    };
  
    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };


    const clear = () => {
        setCart([]);
    };

    const isInCart = (item) => {
        let verif = false;

        for (let items of cart) {
            if(items.id === item.id) verif = true;
        }

        return verif;
    };

    const computeTotalPrice = () => {
        let total = 0;
        
        for (let item of cart) {
        total += item.addedQtty * item.price;
        }

        setTotalPrice(total);
    };
    
    
    return(
        <CartContext.Provider
        value={{
            cart,
            totalPrice,
            addItem,
            removeItem,
            clear,
            isInCart,
            computeTotalPrice,
            setCart
        }}>
            {children}
        </CartContext.Provider>
    )
};