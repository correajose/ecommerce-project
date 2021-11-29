import Item from '../Item/Item';
import stock from '../../data/stock';
import { useEffect, useState } from 'react';
import { getData } from '../../helpers/getData';
// import loaderGif from "../../img/loader.gif";

const ItemList = ( {category} ) => {

    const [productsData, setProductsData] = useState("cargando productos...");
    // const [loader, setLoader] = useState([true]);
    const [filteredStock, setFilteredStock] = useState([]);
     
    useEffect ( () => {
        getData(stock)
            .then( (resp) => {
                setFilteredStock(category === "null" ? resp : resp.filter(p => p.category === category));
                setProductsData(filteredStock.map(p => <Item key={p.id} {...p}/>));
            })
            .catch( (err) => {
               console.log(err); 
            })
            /* .finally( () => {
                setLoader(false);
            }) */
    }, [filteredStock, category]);

    return productsData;
};

export default ItemList;