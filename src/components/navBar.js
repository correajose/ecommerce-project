//este file es un modulo que contiene un bloque de codigo jsx. este bloque de codigo es el componente que exportaremos a la funcion App() del file App.js para que se renderice y se incorpore al DOM, y asi se visualice.

/* que contenga:
Brand (título/nombre de la tienda)
Un listado de categorías clickeables
Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia (opcional). */


const navBar = () => {
    return  (
        <div>
            <img src="../logo.png" alt="brand logo"/>

            <ul>
                <li><button className="navBarButton">productos</button></li>
                <li><button className="navBarButton">ofertas</button></li>
                <li><button className="navBarButton">carrito</button></li>
                <li><button className="navBarButton">info</button></li>
                <li><button className="navBarButton">contacto</button></li>
            </ul>
        </div>
    )
};


export default navBar;