import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"

const ItemListContainer = ( {category} ) => {

    return(  
            <div className="itemListContainer">
                <ItemList category={category} />
            </div>
    )
}

export default ItemListContainer;