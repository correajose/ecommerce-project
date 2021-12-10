import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

    const [itemShown, setItemShown] = useState({});
    const [loading, setLoading] = useState([true]);

    const { itemId } = useParams()

    useEffect( () => {
        setLoading(true);
        
        const productsCollection = collection(db, "products");

        getDocs(productsCollection)
            .then( (resp) => {
                console.log(resp.docs)
                const item = resp.docs.filter(p => p.id === itemId);
                setItemShown({...item[0].data()})
                
                
            })
            .catch( (err) => {
                console.log(err);
            })
            .finally( () => {
                setLoading(false);
            });

    }, [itemId]);

    console.log(itemShown)

    return (
            loading ?
            <Loader />
            : <ItemDetail ItemShown={itemShown} />
        )
}

export default ItemDetailContainer;