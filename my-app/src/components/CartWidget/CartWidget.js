import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = ({ w, h, r, t }) => {

    const { cart } = useContext(CartContext);
    
    const [cartIsEmpty, setCartIsEmpty] = useState(true);

    const styles = {visibility: cartIsEmpty &&  "hidden",
                    width: w,
                    height: h,
                    right: r,
                    top: t};

    useEffect( () => {
        setCartIsEmpty(cart.length === 0);
    }, [cart, cartIsEmpty]);

    return  (
            <Link to="/cart" className="cartWidget" style={styles} >
                <p className="hierarchy-4">carrito ({cart.length > 0 && cart.length}) </p>
            </Link>
    )

};

export default CartWidget;