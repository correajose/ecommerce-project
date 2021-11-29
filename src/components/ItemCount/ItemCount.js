import { useEffect, useState } from "react";
import "./ItemCount.css";

const QuantitySelector = ( { remainingQtty } ) => {

    const [qtty, setQtty] = useState();

    useEffect( () => {
        setQtty(remainingQtty > 0 ? 1 : 0);
    }, [remainingQtty] );

    return (
        <span className="itemCountBox">
            <button onClick={() => qtty > 1 && setQtty(qtty-1)} className="btn">-</button>
            <p>{qtty}</p>
            <button onClick={() => qtty < remainingQtty && setQtty(qtty+1)}>+</button>
            {qtty === 0 && <p className="sinStockLabel">{qtty === 0 && "sin stock"}</p>}
        </span>
    )

};

export default QuantitySelector;