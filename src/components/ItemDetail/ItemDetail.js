import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount.js';
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import back from '../../img/arrowBack.png';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const ItemDetail = ( { ItemShown } ) => {

    const [amount, setAmount] = useState(ItemShown.qtty === 0 ? 0 : 1);
    const { addItem, isInCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    return <div className="itemDetailBox">
                <button onClick={handleBack} className="goBackButton"><img src={back} alt="back-arrow" /></button>
                <img src={ItemShown.picURL} alt={ItemShown.name} style={{width: "460px", height: "460px"}}/>
                <span className="itemData">
                    <h1>{ItemShown.name}</h1>
                    <h2>${ItemShown.price}</h2>
                    
                    {!isInCart(ItemShown)
                        ? <span className="counterBox">
                            <ItemCount maxStock={ItemShown.qtty} amount={amount} setAmount={setAmount}/>
                            {ItemShown.qtty === 0 && <p className="sinStockLabel">sin stock</p>}   
                        </span>
                        : <Link to="/cart">
                            <button className="buyAddBtns" disabled={ItemShown.qtty === 0}>ir a finalizar compra</button>
                        </Link>
                    }
                        <button className="buyAddBtns" onClick={ () => addItem(ItemShown, amount) } disabled={ItemShown.qtty === 0 | isInCart(ItemShown)}>agregar al carrito</button>
                    
                    <p className="itemDescription">{ItemShown.desc}</p>
                </span>
           </div>
};

export default ItemDetail;