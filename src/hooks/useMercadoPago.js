import { useEffect, useState } from "react";
import useScript from "./useScript";

function useMercadoPago() {

    const [resultPayment, setResultPayment] = useState(undefined);

    const { MercadoPago } = useScript(
        "https://sdk.mercadopago.com/js/v2",
        "MercadoPago"
    );

    console.log(MercadoPago)

    useEffect(() => {
        if (MercadoPago) {
            const mp = new MercadoPago(/* import.meta.env.VITE_PUBLIC_KEY_MP */"TEST-87acf690-89b9-4a01-969c-9296d7040a0c");
            const cardForm = mp.cardForm({
                amount: "100.5",
                autoMount: true,
                form: {
                    id: "form-checkout",
                    cardholderName: {
                      id: "form-checkout__cardholderName",
                      placeholder: "Titular de la tarjeta",
                    },
                    cardholderEmail: {
                      id: "form-checkout__cardholderEmail",
                      placeholder: "E-mail",
                    },
                    cardNumber: {
                      id: "form-checkout__cardNumber",
                      placeholder: "Número de la tarjeta",
                    },
                    cardExpirationMonth: {
                      id: "form-checkout__cardExpirationMonth",
                      placeholder: "Mes de vencimiento",
                    },
                    cardExpirationYear: {
                      id: "form-checkout__cardExpirationYear",
                      placeholder: "Año de vencimiento",
                    },
                    securityCode: {
                      id: "form-checkout__securityCode",
                      placeholder: "Código de seguridad",
                    },
                    installments: {
                      id: "form-checkout__installments",
                      placeholder: "Cuotas",
                    },
                    identificationType: {
                      id: "form-checkout__identificationType",
                      placeholder: "Tipo de documento",
                    },
                    identificationNumber: {
                      id: "form-checkout__identificationNumber",
                      placeholder: "Número de documento",
                    },
                    issuer: {
                      id: "form-checkout__issuer",
                      placeholder: "Banco emisor",
                    }
                  },
                callbacks: {
                    onFormMounted: (error) => {
                        if (error)
                            return console.warn(
                                "Form Mounted handling error: ",
                                error
                            );
                    },

                    onSubmit: (event) => {
                        event.preventDefault();

                        const {
                            paymentMethodId: payment_method_id,
                            issuerId: issuer_id,
                            cardholderEmail: email,
                            amount,
                            token,
                            installments,
                            identificationNumber,
                            identificationType,
                        } = cardForm.getCardFormData();

                        fetch(
                            /* ${  import.meta.env.VITE_URL_PAYMENT_MP } */
                            "/process-payment",
                            {
                                // entry point backend
                                method: "POST",
                                headers: {
                                    "Access-Control-Allow-Origin": "*",
                                    "Access-Control-Request-Method":
                                        "GET, POST, DELETE, PUT, OPTIONS",
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    token,
                                    issuer_id,
                                    payment_method_id,
                                    transaction_amount: 1000,
                                    installments: Number(installments),
                                    description: "Descripción del producto",
                                    payer: {
                                        email,
                                        identification: {
                                            type: identificationType,
                                            number: identificationNumber,
                                        },
                                    },
                                }),
                            }
                        )
                            .then((res) => res.json())
                            .then((data) => setResultPayment(data))
                            .catch((err) => {
                                setResultPayment(err);
                            });
                    },
                    onFetching: (resource) => {
                        // Animate progress bar
                        const progressBar =
                            document.querySelector(".progress-bar");
                        progressBar.removeAttribute("value");

                        return () => {
                            progressBar.setAttribute("value", "0");
                        };
                    },
                },
            });
        }
    }, [MercadoPago]);

    return resultPayment;
}

export default useMercadoPago;