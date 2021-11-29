import { Link } from "react-router-dom";
import cart from "./cart.png";

const CartWidget = ({ w, h }) => {

    return  (
            <Link to="/cart">
                <img src={cart} alt="cart-icon" style={{width: w, height: h, marginRight: "15px"}}/>
            </Link>
    )

};

export default CartWidget;