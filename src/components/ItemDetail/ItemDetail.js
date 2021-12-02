import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount.js';
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ( { prodShown } ) => {

    const [amount, setAmount] = useState(prodShown.qtty === 0 ? 0 : 1);
    const { addItem } = useContext(CartContext);

    return <div className="itemDetailBox">
                <img src={prodShown.picURL} alt={prodShown.name} style={{width: "460px", height: "460px"}}/>
                <span className="itemData">
                    <h1>{prodShown.name}</h1>
                    <h2>${prodShown.price}</h2>
                    <ItemCount maxStock={prodShown.qtty} amount={amount} setAmount={setAmount}/>
                    <span>
                        <Link to="/cart">
                            <button className="buyAddBtns" onClick={ () => addItem(prodShown, amount)} disabled={prodShown.qtty === 0}>comprar</button>
                        </Link>

                        <button className="buyAddBtns" onClick={ () => addItem(prodShown, amount) } disabled={prodShown.qtty === 0}>agregar al carrito</button>
                    </span>
                    <p className="itemDescription">{prodShown.desc}</p>
                </span>
           </div>
};

export default ItemDetail;