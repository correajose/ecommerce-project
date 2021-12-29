import { Timestamp } from "firebase/firestore/lite";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import verifData from "../../helpers/verifForm";
import "./CheckOutForm.css"

const CheckOutForm = ( {buyer, setBuyer, address, setAddress, setOrder, setOrderCreated} ) => {
    
    const { cart, totalPrice, setCart } = useContext(CartContext);

    const[idNumberWarning, setIdNumberWarning] = useState(false);
    const[emailWarning, setEmailWarning] = useState(false);
    const[phoneNumberWarning, setPhoneNumberWarning] = useState(false);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

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
            <p className="hierarchy-2">CheckOut</p>

            <form onSubmit={handleSubmit} className="checkoutForm container-row">
                <label>
                    <p className="hierarchy-4">Datos del comprador</p>
                    <input
                        className="my-input"
                        onChange={handleBuyerInputChange}
                        type="text"
                        name="name"
                        value={buyer.name}
                        placeholder="nombre/s"
                        required
                    />
                    <input
                        className="my-input"
                        onChange={handleBuyerInputChange}
                        type="text"
                        name="lastName"
                        value={buyer.lastName}
                        placeholder="apellido/s"
                        required
                    />
                    <input
                        className="my-input"
                        onChange={handleBuyerInputChange}
                        type="number"
                        name="idNumber"
                        value={buyer.idNumber} 
                        placeholder="n° de documento"
                        style={{border: idNumberWarning && "rgb(197, 38, 38, 0.9) .2px solid"}}
                        
                    />
                    <input
                        className="my-input"
                        onChange={handleBuyerInputChange}
                        type="email"
                        name="emailAddress"
                        value={buyer.emailAddress}
                        placeholder="email"
                        style={{border: emailWarning && "rgb(197, 38, 38, 0.9) .2px solid"}}
                        required
                    />
                    <input
                        className="my-input"
                        onChange={handleBuyerInputChange}
                        type="email"
                        name="emailConfirm"
                        value={buyer.emailConfirm}
                        placeholder="confirme email"
                        style={{border: emailWarning && "rgb(197, 38, 38, 0.9) .2px solid"}}
                        required
                    />
                    <input
                        className="my-input"
                        onChange={handleBuyerInputChange}
                        type="number"
                        name="phoneNumber"
                        value={buyer.phoneNumber}
                        placeholder="número de teléfono"
                        style={{border: phoneNumberWarning && "rgb(197, 38, 38, 0.9) .2px solid"}}
                    />
                </label>

                <label>
                    <p className="hierarchy-4">Dirección</p>

                    <input
                        className="my-input"
                        onChange={handleAddressInputChange}
                        type="text"
                        name="addressStreet"
                        value={address.street}
                        placeholder="calle"
                        required/>

                    <input
                        className="my-input"
                        onChange={handleAddressInputChange}
                        type="number"
                        name="addressNumber"
                        value={address.number}
                        placeholder="número"
                        required/>

                    <input
                        className="my-input"
                        onChange={handleAddressInputChange}
                        type="text"
                        name="floorDoor"
                        value={address.floorDoor}
                        placeholder="piso/dpto"
                    />
                
                    <input
                        className="my-input"
                        onChange={handleAddressInputChange}
                        type="text"
                        name="country"
                        value={address.country}
                        placeholder="país"
                        required
                    />
                    <input
                        className="my-input"
                        onChange={handleAddressInputChange}
                        type="text"
                        name="state"
                        value={address.state}
                        placeholder="provincia"
                        required
                    />
                    <input
                        className="my-input"
                        onChange={handleAddressInputChange}
                        type="text" 
                        name="city"
                        value={address.city}
                        placeholder="ciudad"
                        required
                    />
                    <input
                        className="my-input"
                        onChange={handleAddressInputChange}
                        type="text"
                        name="postalCode"
                        value={address.postalCode}
                        placeholder="código postal"
                        required
                    />
                </label>

                <span className="checkoutBtnsBox">
                    <button className="btn hierarchy-4" type="submit" onClick={handleBack}> Volver </button>
                    <button className="btn-outline hierarchy-4" type="submit"> Confirmar orden </button>
                </span>

            </form>
        </div>
    )
};

export default CheckOutForm;
