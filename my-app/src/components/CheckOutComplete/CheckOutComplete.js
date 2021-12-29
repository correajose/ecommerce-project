import { addDoc, collection, doc, getDocs, writeBatch } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";
import "./CheckOutComplete.css";

const CheckOutComplete = ( { order } ) => {

    const[orderId, setOrderId] = useState();
    const[orderWritten, setOrderWritten] = useState(false);
    const[stock, setStock] = useState(false);
    const[alert, setAlert] = useState("verificando stock...")
    
    let outOfStock = [];

    const ordersCollection = collection(db, "orders");
    const batch = writeBatch(db);


    useEffect(() => {
        const productsCollection = collection(db, "products")
        
        getDocs(productsCollection) 
            .then((resp) => {

                for (let item of order.items) {
                    const itemDoc = doc(db, "products", item.id);
                    let it = resp.docs.find(ele => ele.id === item.id);

                    if (it.data().qtty >= item.addedQtty) {

                        let newQtty = it.data().qtty - item.addedQtty;
                        batch.update(itemDoc, { qtty: newQtty });

                    } else {
                        outOfStock.push(item.name);
                    }
                }
            })
            .catch((err) => {
                console.log("Error actualizando stock: ", err);
            })
            .finally(() => {

                if (outOfStock.length === 0) {

                    setStock(true);
                    batch.commit();

                    addDoc(ordersCollection, order)
                        .then((resp) => {
                            setOrderId(resp.id);
                        })
                        .catch((err) => {
                            console.log("Error al crear orden: ", err);
                        })
                        .finally(() => {
                            setOrderWritten(true);
                        });
                } else {
                    setAlert("No se pudo crear su orden :(")
                }
            });
           
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        
        !stock
            ? <div className="checkOutCompleteViewBox"> <h2> {alert} </h2> </div>
            : !orderWritten
                    ? <div className="checkOutCompleteViewBox"> <h1>creando orden...</h1> </div>
                    : <div className="checkOutCompleteViewBox">
                        <h1>Pedido realizado con éxito!</h1>
                        <p>El código de su orden es: {orderId}</p>
                        <Link to="/"><button id="back2HomeButton">volver a inicio</button></Link>
                    </div>
    )
};

export default CheckOutComplete;
