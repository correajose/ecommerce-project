import Item from '../Item/Item';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../../firebase/config';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

const ItemList = ( {category} ) => {

    let { catId } = useParams();
    
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState([true]);
     
    useEffect ( () => {
        setLoading(true);

        const productsCollection = collection(db, "products");
        const q = query(productsCollection, where("category", "==", catId));
        
        getDocs(catId === "all" ? productsCollection : q)
            .then((resp) => {

                const items = resp.docs.map(doc => ({id: doc.id, ...doc.data()}));

                setProductsData(items.map(prod => <Item key={prod.id} {...prod}/>));

            })
            .catch( (err) => {
                console.log(err);
            })
            .finally( () => {
                setLoading(false);
            });

    }, [catId]);

    return (
            loading ?
            <Loader/>
            : productsData
        )
};

export default ItemList;