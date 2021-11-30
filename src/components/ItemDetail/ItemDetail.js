import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount.js';
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ( {name, desc, picURL, price, qtty} ) => {

    const [amount, setAmount] = useState(qtty === 0 ? 0 : 1); //no se pq no funciona este condicional que mostraría 0 en el contador si no hay stock del producto, y 1 como cantidad incial si sí lo hubiera.

    // console.log(qtty)
    console.log(amount)

    return <div className="itemDetailBox">
                <img src={picURL} alt={name} style={{width: "460px", height: "460px"}}/>
                <span className="itemData">
                    <h1>{name}</h1>
                    <h2>${price}</h2>
                    <ItemCount maxQtty={qtty} amount={amount} setAmount={setAmount}/>
                    <span>
                        <Link to="/cart">
                            <button className="buyAddBtns" onClick={ () => {}}>comprar</button>
                        </Link>

                        <button className="buyAddBtns" onClick={ () => {}}>agregar al carrito</button>
                    </span>
                    <p className="itemDescription">{desc}</p>
                </span>
           </div>
};

export default ItemDetail;