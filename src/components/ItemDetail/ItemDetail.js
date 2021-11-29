import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount.js';
// import { useState } from "react";

const ItemDetail = ( {name, desc, picURL, price, qtty} ) => {

    // const [amount, setAmount] = useState();

    return <div className="itemDetailBox">
                <img src={picURL} alt={name} style={{width: "460px", height: "460px"}}/>
                <span className="itemData">
                    <h1>{name}</h1>
                    <h2>${price}</h2>
                    <ItemCount remainingQtty={qtty}/>
                    <span>
                        <button className="buyAddBtns" onClick={ () => {}}>comprar</button>
                        <button className="buyAddBtns" onClick={ () => {}}>agregar al carrito</button>
                    </span>
                    <p className="itemDescription">{desc}</p>
                </span>
           </div>
}

export default ItemDetail;