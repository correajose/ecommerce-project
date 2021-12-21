import { Timestamp } from "firebase/firestore/lite";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import verifData from "../../helpers/verifForm";

const CheckOutForm = ( {buyer, setBuyer, address, setAddress, setOrder, setOrderCreated} ) => {
    
    const { cart, totalPrice, setCart } = useContext(CartContext);

    const[idNumberWarning, setIdNumberWarning] = useState(false);
    const[emailWarning, setEmailWarning] = useState(false);
    const[phoneNumberWarning, setPhoneNumberWarning] = useState(false);

    const warnings = {setIdNumberWarning,
                      setEmailWarning,
                      setPhoneNumberWarning};

    const handleBuyerInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const handleAddressInputChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!verifData(warnings, buyer, address)) { return }

        console.log("cart", cart)

        setOrder({
            dateAndTime: Timestamp.fromDate(new Date()),
            buyer: {
                ...buyer
            },
            address: {
                ...address
            },
            items: cart,
            total: totalPrice
        })
        setCart([]);
        setOrderCreated(true);
    };

    return (
        cart.length === 0 ?
        <Navigate to="/" />
        :<div>
            CheckOut

            <form onSubmit={handleSubmit}>
                <label>
                    Datos del comprador
                    <input
                        onChange={handleBuyerInputChange}
                        type="text" name="name"
                        value={buyer.name}
                        placeholder="nombre/s"
                        required
                    />
                    <input
                        onChange={handleBuyerInputChange}
                        type="text"
                        name="lastName"
                        value={buyer.lastName}
                        placeholder="apellido/s"
                        required
                    />
                    <input
                        onChange={handleBuyerInputChange}
                        type="number"
                        name="idNumber"
                        value={buyer.idNumber} 
                        placeholder="n° de documento"
                        style={{border: idNumberWarning && "rgb(197, 38, 38, 0.9) .2px solid"}}
                        
                    />
                    <input
                        onChange={handleBuyerInputChange}
                        type="email"
                        name="emailAddress"
                        value={buyer.emailAddress}
                        placeholder="email"
                        style={{border: emailWarning && "rgb(197, 38, 38, 0.9) .2px solid"}}
                        required
                    />
                    <input
                        onChange={handleBuyerInputChange}
                        type="email"
                        name="emailConfirm"
                        value={buyer.emailConfirm}
                        placeholder="confirme email"
                        style={{border: emailWarning && "rgb(197, 38, 38, 0.9) .2px solid"}}
                        required
                    />
                    <input
                        onChange={handleBuyerInputChange}
                        type="number"
                        name="phoneNumber"
                        value={buyer.phoneNumber}
                        placeholder="número de teléfono"
                        style={{border: phoneNumberWarning && "rgb(197, 38, 38, 0.9) .2px solid"}}
                    />
                </label>

                <label>
                    Dirección
                    <input
                        onChange={handleAddressInputChange}
                        type="text"
                        name="addressStreet"
                        value={address.street}
                        placeholder="calle"
                        required/>
                    <input
                        onChange={handleAddressInputChange}
                        type="number"
                        name="addressNumber"
                        value={address.number}
                        placeholder="número"
                        required/>
                    <input
                    onChange={handleAddressInputChange}
                    type="text"
                    name="floorDoor"
                    value={address.floorDoor}
                    placeholder="piso/dpto"
                    />
                
                    <input
                        onChange={handleAddressInputChange}
                        type="text"
                        name="country"
                        value={address.country}
                        placeholder="país"
                        required
                    />
                    <input
                        onChange={handleAddressInputChange}
                        type="text"
                        name="state"
                        value={address.state}
                        placeholder="provincia"
                        required
                    />
                    <input
                        onChange={handleAddressInputChange}
                        type="text" 
                        name="city"
                        value={address.city}
                        placeholder="ciudad"
                        required
                    />
                    <input
                        onChange={handleAddressInputChange}
                        type="text"
                        name="postalCode"
                        value={address.postalCode}
                        placeholder="código postal"
                        required
                    />
                </label>

                <button type="submit">Confirmar orden</button>

            </form>
        </div>
    )
};

export default CheckOutForm;
