import { Route } from "react-router";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import stock from "../data/stock.js";

export const itemDetailRoutes = () => {

    return (
        stock.map( p => { 
            return <Route key={p.id} path={"/products/details/item-"+p.id} element={ <ItemDetailContainer id={p.id}/> } />
          })
    )
};