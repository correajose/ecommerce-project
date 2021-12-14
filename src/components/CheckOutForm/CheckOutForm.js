import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CheckOutForm = ( {buyer, setBuyer, address, setAddress, setOrder, orderCreated, setOrderCreated} ) => {

    const { cart, totalPrice, setCart } = useContext(CartContext);

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
        setOrder({
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
        <div>
            CheckOut

            <form onSubmit={handleSubmit}>
                <label>
                    Datos del comprador
                    <input onChange={handleBuyerInputChange} type="text" name="name" value={buyer.name} placeholder="nombre/s" required/>
                    <input onChange={handleBuyerInputChange} type="text" name="lastName" value={buyer.lastName} placeholder="apellido/s" required/>
                    <input onChange={handleBuyerInputChange} type="number" name="idNumber" value={buyer.idNumber} placeholder="n° de documento" required/>
                    <input onChange={handleBuyerInputChange} type="email" name="emailAddress" value={buyer.emailAddress} placeholder="email" required/>
                    <input onChange={handleBuyerInputChange} type="number" name="phoneNumber" value={buyer.phoneNumber} placeholder="número de teléfono"/>
                </label>

                <label>
                    Dirección
                    <input onChange={handleAddressInputChange} type="text" name="addressStreet" value={address.street} placeholder="calle" required/>
                    <input onChange={handleAddressInputChange} type="number" name="addressNumber" value={address.number} placeholder="número" required/>
                    <input onChange={handleAddressInputChange} type="text" name="floorDoor" value={address.floorDoor} placeholder="piso/dpto"/>
                
                    <input onChange={handleAddressInputChange} type="text" name="country" value={address.country} placeholder="país" required/>
                    <input onChange={handleAddressInputChange} type="text" name="state" value={address.state} placeholder="provincia" required/>
                    <input onChange={handleAddressInputChange} type="text" name="city" value={address.city} placeholder="ciudad" required/>
                    <input onChange={handleAddressInputChange} type="text" name="postalCode" value={address.postalCode} placeholder="código postal" required/>
                </label>

                <button type="submit">Confirmar orden</button>

            </form>
        </div>
    )
};

export default CheckOutForm;
