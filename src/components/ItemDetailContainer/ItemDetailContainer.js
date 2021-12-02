import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import stock from '../../data/stock';
import getData from '../../helpers/getData';
import Loader from '../Loader/Loader';

const ItemDetailContainer = ( {id} ) => {

    const [prodShown, setProdShown] = useState({});
    const [loading, setLoading] = useState([true]);


    useEffect( () => {
        getData(stock[id-1])
        .then( (item) => {
            setProdShown(item);
        })
        .finally( () => {
            setLoading(false);
        });

    }, [id]);

    return (
            loading ?
            <Loader />
            : <ItemDetail prodShown={prodShown} />
        )
}

export default ItemDetailContainer;