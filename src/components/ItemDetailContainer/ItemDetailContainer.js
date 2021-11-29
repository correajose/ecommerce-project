import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import stock from '../../data/stock';

const ItemDetailContainer = ( {id} ) => {

    const [prodShown, setProdShown] = useState({});

    useEffect( () => {
        setProdShown(stock[id-1])
    }, [id]);

    return <ItemDetail {...prodShown}/>
}

export default ItemDetailContainer;