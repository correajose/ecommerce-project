import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import stock from '../../data/stock';
import getData from '../../helpers/getData';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router';

const ItemDetailContainer = () => {

    const [itemShown, setItemShown] = useState({});
    const [loading, setLoading] = useState([true]);

    const { itemId } = useParams()

    useEffect( () => {
        setLoading(true);
        
        getData(stock[itemId-1])
        .then( (item) => {
            setItemShown(item);
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