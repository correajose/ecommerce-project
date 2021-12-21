import { Link } from "react-router-dom";
import "./Item.css";
import productImg from "../../img/placeholder-product-img.png";

const Item = ( {id, name, price, picURL, category} ) => {

    return (
    
        <span className="itemBox">
            <div className="wrapper container-col">
                <span className="imgBox">
                    <img src={productImg} alt={name}/>
                </span>
                <span className="itemInfo container-row">
                    <p className="hierarchy-3">{name}</p>
                    <p className="hierarchy-4">${price}</p>
                </span>
                <Link to={"/products/"+category+"/details/item/"+id}>
                    <button className="btn-outline hierarchy-4">ver más</button>
                </Link>
            </div>
        </span>
    )
};

export default Item;