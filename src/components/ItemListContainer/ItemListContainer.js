import { useParams } from 'react-router';
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"

const ItemListContainer = ( ) => {

    let { catId } = useParams();

    return(  
            <div className="itemListContainer">
                <ItemList category={catId}/>
            </div>
    )
}

export default ItemListContainer;