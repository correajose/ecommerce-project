import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
// import cartIcon from "./cart.png";
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
                {/* <span className="itemsInCartLabel">{cart.length}</span> */}
                <p className="hierarchy-4">carrito ({cart.length > 0 && cart.length}) </p>
                {/* <img src={cartIcon} alt="cart-icon" style={{width: "100%", height: "100%"}} /> */}
            </Link>
    )

};

export default CartWidget;