import { Route } from "react-router";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import stock from "../data/stock";

export const categoriesRoutes = () => {

    let categories = [];
    stock.map(p => { 
        categories.push(p.category)
        categories = [...new Set(categories)];
        return categories;
    })

    return (
        categories.map(cat => {
            return <Route path={"/products/category/"+cat} element={<ItemListContainer category={cat} />}/>
        })
    )

};