import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./ContactView.css";

const ContactView = () => {

    const[send, setSend] = useState(false);
    const[mailListSub, setMailListSub] = useState(false);

    const[message, setMessage] = useState({
        subject: "",
        name: "",
        lastName: "",
        email: "",
        phoneNum: "",
        bodyMessage: ""
    });

    return <div className="contactViewBox section-view">
                <h1 className="hierarchy-2">Contacto</h1>
                <ContactForm
                    send={send}
                    message={message}
                    mailListSub={mailListSub}
                    setSend={setSend}
                    setMessage={setMessage}
                    setMailListSub={setMailListSub}
                />
           </div>
};

export default ContactView;