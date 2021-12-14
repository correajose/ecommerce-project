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
            
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
        
    useEffect(() => {
        setCatFiltered(catRepeated.filter( (ele, pos) => catRepeated.indexOf(ele) === pos));
    }, [catRepeated]) 
    
    useEffect(() => {
        setCategories(catFiltered.map(cat => <li key={cat}>
                                                <Link to={"/products/"+cat}>
                                                    {"• "+cat} 
                                                </Link>
                                            </li>
        ));

    }, [catFiltered])

    return requestCompleted ? categories : null
}

export default CategoriesLinks;
