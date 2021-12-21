import { useState } from "react";
import useMercadoPago from "../../hooks/useMercadoPago";
import "./PaymentForm.css";

const PaymentForm = () => {

    const INITIAL_STATE = {
        focus: "cardNumber",
        cardNumber: "",
        cardExpirationMonth: "",
        cardExpirationYear: "",
        cardholderName: "",
        cardholderEmail: "",
        securityCode: "",
        issuer: "",
    };

    const [state, setState] = useState(INITIAL_STATE)
    const resultPayment = useMercadoPago();

    const handleInputChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    };

    return <div className="paymentFormContainerBox layout-element container-row">
                <form id="paymentForm form-checkout" >
                    <input
                        type="text"
                        name="cardNumber"
                        id="form-checkout__cardNumber"
                        onChange={handleInputChange}
                        className="hierarchy-4"
                    />
                    <input
                        type="text"
                        name="cardExpirationMonth"
                        id="form-checkout__cardExpirationMonth"
                        onChange={handleInputChange}
                        className="hierarchy-4"
                    />
                    <input
                        type="text"
                        name="cardExpirationYear" 
                        id="form-checkout__cardExpirationYear"
                        onChange={handleInputChange}
                        className="hierarchy-4"
                    />
                    <input
                        type="text"
                        name="cardholderName"
                        id="form-checkout__cardholderName"
                        onChange={handleInputChange}
                        className="hierarchy-4"
                    />
                    <input
                        type="email"
                        name="cardholderEmail"
                        id="form-checkout__cardholderEmail"
                        onChange={handleInputChange}
                        className="hierarchy-4"
                    />
                    <input
                        type="text"
                        name="securityCode"
                        id="form-checkout__securityCode"
                        onChange={handleInputChange}
                        className="hierarchy-4"
                    />

                    <select
                        name="issuer"
                        id="form-checkout__issuer"
                        onChange={handleInputChange}
                        className="hierarchy-4">
                    </select>

                    <select
                        name="identificationType"
                        id="form-checkout__identificationType" 
                        className="hierarchy-4">
                    </select>

                    <input
                        type="text"
                        name="identificationNumber"
                        id="form-checkout__identificationNumber" 
                        className="hierarchy-4"
                    />
                    
                    <select
                        name="installments"
                        id="form-checkout__installments" 
                        className="hierarchy-4">
                    </select>

                    <button type="submit" id="form-checkout__submit" className="hierarchy-4 btn btn-sqz">Pagar</button>
                    <progress value="0" className="progress-bar">Cargando...</progress>

                    {resultPayment && <p>{JSON.stringify(resultPayment)}</p>}
                </form>
    </div>

};

export default PaymentForm;