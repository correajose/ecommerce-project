import "./ContactForm.css";

const ContactForm = ( { send, message, mailListSub, setSend, setMessage, setMailListSub } ) => {
                      
    const handleChange = (e) => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    };

    const handleSub = () => {
        setMailListSub(!mailListSub)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message)
        setSend(true);
    };

    const handleReset = () => {
        setMessage({
            subject: "",
            name: "",
            lastName: "",
            email: "",
            phoneNum: "",
            bodyMessage: ""
        })
    }

    return (
        send ?
        <p className="hierarchy-2">Mensaje enviado! Gracias por su consulta, nos pondremos en contacto lo antes posible.</p>
        : <div>
            <form className="contactForm" onSubmit={handleSubmit}>
                <select
                    className="subjectSelector my-input"
                    name="subject"
                    value={message.subject}
                    onChange={handleChange}
                    required>
                    <option value="" hidden disabled>motivo</option>
                    <option value="compras">compras</option>
                    <option value="productos">productos</option>
                    <option value="stock">stock</option>
                    <option value="devoluciones">devoluciones</option>
                    <option value="formas de pago">formas de pago</option>
                    <option value="otro">otro</option>
                </select>

                <input
                    className="my-input"
                    name="name"
                    value={message.name}
                    placeholder="Nombre"
                    onChange={handleChange}
                    required />
    
                <input
                    className="my-input"
                    name="lastName"
                    value={message.lastName}
                    placeholder="Apellido"
                    onChange={handleChange}
                    required />
    
                <input
                    className="my-input"
                    type="email"
                    name="email"
                    value={message.email}
                    placeholder="email"
                    onChange={handleChange}
                    required />
    
                <input
                    className="my-input"
                    type="number"
                    name="phoneNum"
                    value={message.phoneNum}
                    placeholder="Teléfono"
                    onChange={handleChange} />
    
                <textarea
                    className="bodyMessage my-input"
                    name="bodyMessage"
                    value={message.bodyMessage}
                    placeholder="Escribe tu consulta..."
                    onChange={handleChange}
                    require />

                <label className="checkBox container-row">
                    <input
                        type="checkbox"
                        onChange={handleSub}
                        style={{display: "inline-block", margin: ".2rem"}}
                        />
                    <p className="normal-text">quiero recibir noticias y futuras promociones</p>
                </label>

                <div className="contactFormBtns container-row">
                    <button className="btn btn-sqz hierarchy-4" onClick={handleReset}>reset</button>

                    <button className="btn-outline btn-sqz hierarchy-4" type="submit">enviar</button>
                </div>

            </form>
        </div>
    )
};

export default ContactForm;