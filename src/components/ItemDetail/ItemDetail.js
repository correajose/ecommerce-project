import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount.js';
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
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
                
                <p onClick={handleBack} className="backControl"> ← volver </p>

                <img src={ItemShown.picURL} alt={ItemShown.name} className="productImage"/>

                <span className="nameAndPrice container-col hierarchy-1">
                    <p className="hierarchy-1">{ItemShown.name}</p>
                    <p className="hierarchy-2">${ItemShown.price}</p>
                </span>
                    
                <span className="buttons container-col">
                    {!isInCart(ItemShown)
                        ? <span>
                                <span className="container-row qtty-selector">
                                    <ItemCount maxStock={ItemShown.qtty} amount={amount} setAmount={setAmount} />

                                    {(ItemShown.qtty > 0 && ItemShown.qtty < 4) &&
                                    <p id="catchyTag" className="hierarchy-4">
                                        sólo {ItemShown.qtty} disponible{ItemShown.qtty > 1 && "s"}!
                                    </p>}   

                                    {ItemShown.qtty === 0 &&
                                    <p className="sinStockLabel hierarchy-4">
                                        sin stock
                                    </p>}   
                                </span>
                          </span>

                        : <button className="btn-outline" disabled={ItemShown.qtty === 0}>
                                <Link to="/cart" className="hierarchy-4">ir a finalizar compra</Link>
                          </button>
                    }
                        
                    <button
                        className="btn hierarchy-4"
                        onClick={() => addItem(ItemShown, amount)}
                        disabled={ItemShown.qtty === 0 | isInCart(ItemShown)}>

                        agregar al carrito

                    </button>
                </span>
                    
                <p className="itemDescription normal-text">{ItemShown.desc}</p>

           </div>
};

export default ItemDetail;