import { useContext, useEffect,  } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartActionAlert.css"


const CartActionAlert = ( { action } ) => {

    const { cartActionDisplay, setCartActionDisplay } = useContext(CartContext);

    useEffect(() => {
        setTimeout(() => {
            setCartActionDisplay("hidden");
        }, 7000);
        
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={"cartAlertTag "+cartActionDisplay}>
            <p> {action} </p>
        </div>
    )
}

export default CartActionAlert;