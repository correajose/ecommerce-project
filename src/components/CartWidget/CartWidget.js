import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import cart from "./cart.png";
import "./CartWidget.css";

const CartWidget = ({ w, h }) => {

    const { cart: kart } = useContext(CartContext);

    return  (
            <Link to="/cart">
                {kart.length > 0 && <span className="itemsInCartLabel">{kart.length}</span>}
                <img src={cart} alt="cart-icon" style={{width: w, height: h, marginRight: "15px"}}/>
            </Link>
    )

};

export default CartWidget;