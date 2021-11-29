import { Link } from "react-router-dom";
import "./Item.css";

const Item = ( {name, price, picURL, id} ) => {

    return (
    
        <span className="itemBox">
            <Link to={"/products/details/item-"+id}>
                <img src={picURL} alt={name}/>
            </Link>
            <h1>{name}</h1>
            <h2>${price}</h2>
            <button>comprar</button>
            <button>agregar</button>
        </span>
    
    )
};

export default Item;