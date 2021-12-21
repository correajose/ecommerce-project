import ItemCount from "../ItemCount/ItemCount.js";
import trashCan from "../../img/trashCan.png";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext.js";
import "./CartListItem.css";
import { Link } from "react-router-dom";

const CartListItem = ( { itemAdded } ) => {

    const [amount, setAmount] = useState(itemAdded.addedQtty);
    const { removeItem, cart, isInCart, computeTotalPrice } = useContext(CartContext);
    
    isInCart(itemAdded) && (cart[cart.findIndex(e => e.id === itemAdded.id)].addedQtty = amount);
    
    useEffect( () => {
        computeTotalPrice();
    }, [itemAdded.addedQtty, computeTotalPrice]);

    return (
        <div className="addedItemBox">
            <Link to={"/products/iluminacion/details/item/"+itemAdded.id}>
                <img className="itemPic" src={itemAdded.picURL} alt={itemAdded.name}/>
            </Link>

            <span className="addedItemDetailsBox">
                <Link to={"/products/iluminacion/details/item/"+itemAdded.id} className="hierarchy-3">
                    {itemAdded.name}
                </Link>

                <ItemCount maxStock={itemAdded.qtty} amount={amount} setAmount={setAmount}/>

                <p className="hierarchy-4">total-item: ${itemAdded.price*itemAdded.addedQtty}</p>

            </span>

            <button id="trashCanBtn" onClick={ () => removeItem(itemAdded.id)}>
                <img src={trashCan} alt="trash-can-button"/>
            </button>
        </div>
    )

};

export default CartListItem;