import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import cartIcon from "./cart.png";
import "./CartWidget.css";

const CartWidget = ({ w, h }) => {

    const { cart } = useContext(CartContext);
    
    const [cartIsEmpty, setCartIsEmpty] = useState(true);

    useEffect( () => {
        setCartIsEmpty(cart.length === 0);
    }, [cart, cartIsEmpty]);

    return  (
            <Link to="/cart" style={{visibility: cartIsEmpty &&  "hidden"}}>
                {cart.length > 0 && <span className="itemsInCartLabel">{cart.length}</span>}
                <img src={cartIcon} alt="cart-icon" style={{width: w, height: h, marginRight: "15px"}}/>
            </Link>
    )

};

export default CartWidget;