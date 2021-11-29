import { Link } from "react-router-dom";
import stock from "../data/stock.js";

export const categoriesLinks = () => {

    let categories = [];
    stock.map(p => { 
        categories.push(p.category)
        categories = [...new Set(categories)];
        return categories;
    })

    return (
        
        categories.map(cat => {
            return <Link to={"/products/category/"+cat}><li className="categoryLink">{cat}</li></Link>;
        })
    )
};