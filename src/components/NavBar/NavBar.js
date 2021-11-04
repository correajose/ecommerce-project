//este file es un modulo que contiene un bloque de codigo jsx. este bloque de codigo es el componente que exportaremos a la funcion App() del file App.js para que se renderice y se incorpore al DOM, y asi se visualice.

/* que contenga:
Brand (título/nombre de la tienda)
Un listado de categorías clickeables
Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia (opcional). */


const NavBar = () => {
    return  (
        <div className="NavBar">
            <h1 id="shopName">shop name</h1>

            <ul id="categoriesList">
                <li><button className="NavBarButton">productos</button></li>
                <li><button className="NavBarButton">ofertas</button></li>
                <li><button className="NavBarButton">carrito</button></li>
                <li><button className="NavBarButton">info</button></li>
                <li><button className="NavBarButton">contacto</button></li>
            </ul>
        </div>
    );
};


export default NavBar;