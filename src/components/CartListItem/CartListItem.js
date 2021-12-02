import ItemCount from "../ItemCount/ItemCount.js";
import trashCan from "../../img/trashCan.png";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext.js";
import "./CartListItem.css";

const CartListItem = ( { itemAdded } ) => {

    const [amount, setAmount] = useState(itemAdded.addedQtty);
    const { removeItem, cart } = useContext(CartContext);

    useEffect( () => {
        cart[cart.findIndex(e => e.id === itemAdded.id)].addedQtty = amount;
    }, [amount, cart, itemAdded.id])

    return (
        <div className="addedItemBox">
            <img className="itemPic" src={itemAdded.picURL} alt={itemAdded.name}/>
            <span className="addedItemDetailsBox">
                <h4>{itemAdded.name}</h4> <br/>
                {/* <p>cantidad: {itemAdded.addedQtty}</p> <br/> */}
                {/* <p>precio: ${itemAdded.price}</p> <br/> */}
                <p>total-item: ${itemAdded.price*itemAdded.addedQtty}</p> <br/>
                <ItemCount maxStock={itemAdded.qtty} amount={amount} setAmount={setAmount}/>
            </span>
            <button id="trashCanBtn" onClick={ () => removeItem(itemAdded.id)}>
                <img src={trashCan} alt="trash-can-button"/>
            </button>
        </div>
    )

};

export default CartListItem;