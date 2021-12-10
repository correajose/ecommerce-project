import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";

const CategoriesLinks = () => {

    const [catRepeated, setCatRepeated] = useState([])
    const [catFiltered, setCatFiltered] = useState([])
    const [categories, setCategories] = useState([]);
    const [requestCompleted, setRequestCompleted] = useState(false);
    const productsCollection = collection(db, "products")
    
    useEffect(() => {
        getDocs(productsCollection)
            .then( (resp) => {   
                setCatRepeated(resp.docs.map(p => p.data().category));
            })
            .finally( () => {
                setRequestCompleted(true);
            });
            
    }, []);   
        
    useEffect(() => {
        setCatFiltered(catRepeated.filter( (ele, pos)=> catRepeated.indexOf(ele) === pos));
    }, [catRepeated]) 
    
    useEffect(() => {        
        setCategories(catFiltered.map(cat => <Link to={"/products/"+cat}><li className="categoryLink">{cat}</li></Link>));
    }, [catFiltered])

    return requestCompleted ? categories : null
}

export default CategoriesLinks;
