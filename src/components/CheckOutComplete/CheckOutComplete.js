import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";
import "./CheckOutComplete.css";

const CheckOutComplete = ( { order } ) => {

    const[orderId, setOrderId] = useState();
    const[orderWritten, setOrderWritten] = useState(false);
    const orderCollection = collection(db, "orders");

    useEffect(() => {
        
        addDoc(orderCollection, order)
            .then((resp1) => {
                setOrderId(resp1.id);

                for (let item of order.items) {
                    const itemDoc = doc(db, "products", item.id);
                    getDoc(itemDoc)
                        .then((resp2) => {
                                    let newQtty = resp2.data().qtty - item.addedQtty;
                                    updateDoc(itemDoc, { qtty: newQtty});
                        })
                        .catch((err) => {
                            console.log("Error actualizando stock: ", err);
                        });
                }

            })
            .catch((err) => {
                console.log("Error al crear orden: ", err);
            })
            .finally(() => {
                setOrderWritten(true);
            });

    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        !orderWritten
                ? <div className="checkOutCompleteViewBox"> <h1>creando orden...</h1> </div>
                : <div className="checkOutCompleteViewBox">
                    <h1>Pedido realizado con éxito!</h1>
                    <p>El código de su orden es: {orderId}</p>
                    <Link to="/"><button id="back2HomeButton">volver a inicio</button></Link>
                </div>
    )
};

export default CheckOutComplete;
