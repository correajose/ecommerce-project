import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {

    const { cart, totalPrice} = useContext(CartContext);

    const order = {
        buyer: {
            name: "papapa",
            email: "papa@perfo.pa",
            phoneNumber: 1452452
        },
        items: cart,
        total: totalPrice
    }

    return order

};

export default Checkout;