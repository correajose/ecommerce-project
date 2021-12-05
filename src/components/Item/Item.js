import { Link } from "react-router-dom";
import "./Item.css";

const Item = ( {id, name, price, picURL, category} ) => {

    return (
    
        <span className="itemBox">
            <img src={picURL} alt={name}/>
            <h1>{name}</h1>
            <h2>${price}</h2>
            {/* <button>comprar</button> */}
            <Link to={"/products/"+category+"/details/item-"+id}>
                <button className="itemCardButton">ver más</button>
            </Link>
        </span>
    
    )
};

export default Item;