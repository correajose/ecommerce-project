import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router';
import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

    const [itemShown, setItemShown] = useState({});
    const [loading, setLoading] = useState([true]);

    const { itemId } = useParams()

    useEffect( () => {
        setLoading(true);
        
        const itemDoc = doc(db, "products", itemId);

        getDoc(itemDoc)
        .then( (doc) => {
                setItemShown({id: doc.id, ...doc.data()});
            })
            .catch( (err) => {
                console.log(err);
            })
            .finally( () => {
                setLoading(false);
            });

    }, [itemId]);
    
    return (
            loading ?
            <Loader />
            : <ItemDetail ItemShown={itemShown} />
        )
}

export default ItemDetailContainer;