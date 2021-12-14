import { useState } from "react";
import CheckOutComplete from "../CheckOutComplete/CheckOutComplete";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import "./CheckOut.css";

const CheckOut = () => {

    const[order, setOrder] = useState({})
    const[orderCreated, setOrderCreated] = useState(false);

    const[buyer, setBuyer] = useState({
        name: "",
        lastName: "",
        idNumber: "",
        emailAddress: "",
        phoneNumber: ""
    });

    const[address, setAddress] = useState({
        addressStreet: "",
        addressNumber: "",
        floorDoor: "",
        country: "",
        state: "",
        city: "",
        postalCode: ""
    });

    return (
            orderCreated
                        ? <CheckOutComplete order={order} />
                        : <CheckOutForm buyer={buyer} setBuyer={setBuyer} address={address} setAddress={setAddress} setOrder={setOrder} orderCreated={orderCreated} setOrderCreated={setOrderCreated}/>
    )

}
export default CheckOut;