import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount.js";
import trashCan from "../../img/trashCan.png";

const CartListItem = ( {name, price, picURL, qtty, amountSelected} ) => {

    const [itemLives, setItemLives] = useState(true);

    useEffect( () => {

    }, [itemLives]);

    return (
        <div>
            <img src={picURL} alt={name}/>
            <h4>{name}</h4>
            {/* <p>cantidad: {amount}</p> */}
            <p>precio: {price}</p>
            {/* <p>total: {price*amount}</p> */}
            <ItemCount remainingQtty={qtty}/>
            <button onClick={ () => setItemLives(false) }>
                <img src={trashCan} alt="trash-can-button"/>
            </button>
        </div>
    )

};

export default CartListItem;