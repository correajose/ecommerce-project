import Item from '../Item/Item';
import stock from '../../data/stock';
import { useEffect, useState } from 'react';
import getData from '../../helpers/getData';
import Loader from '../Loader/Loader';


const ItemList = ( {category} ) => {
    
    const [productsData, setProductsData] = useState();
    const [loading, setLoading] = useState([true]);
    const [filteredStock, setFilteredStock] = useState([]);
     
    useEffect ( () => {
        setLoading(true);

        getData(stock)
            .then( (resp) => {
                setFilteredStock(category === "all" ?
                                    resp
                                    : resp.filter(p => p.category === category));
                setProductsData(filteredStock.map(p => <Item key={p.id} {...p}/>));
            })
            .catch( (err) => {
               console.log(err); 
            })
            .finally( () => {
                setLoading(false);
            })
    }, [filteredStock, category]);

    return (
            loading ?
            <Loader/>
            : productsData
        )
};

export default ItemList;