import Item from '../Item/Item';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../firebase/config';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const ItemList = ( {category} ) => {
    
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [filteredStock, setFilteredStock] = useState([]);
     
    useEffect ( () => {
        setLoading(true);

        const productsCollection = collection(db, "products");

        getDocs(productsCollection)
            .then((resp) => {

                const items = resp.docs.map(p => ({id: p.id, ...p.data()}));

                setFilteredStock(category === "all"
                            ? items
                            : items.filter(p => p.category === category)
                );

            })
            .catch( (err) => {
                console.log(err);
            })
            .finally( () => {
                setLoading(false);
            });

    }, [category]);

    useEffect( () => {
        setProductsData(filteredStock.map(p => <Item key={p.id} {...p}/>));
    }, [filteredStock])

    return (
            loading ?
            <Loader/>
            : productsData
        )
};

export default ItemList;