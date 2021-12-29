import { Link } from 'react-router-dom';
import CategoriesLinks from '../CategoriesLinks/CategoriesLinks';
import './NavBar.css';

const NavBar = () => {
    return  (
        <div className="navBar container-row">
            <ul className="sectionList container-row">
                <li className="section-nav">
                    <Link to="/us" >NOSOTROS</Link>
                </li>
                <li className="section-nav dropdown-cat">
                    <Link to="/products/all">
                            PRODUCTOS
                    </Link> 
                    <ul className="sub-menu">
                        <li><Link to="/products/all">Ver todos</Link></li>
                        <CategoriesLinks/>
                    </ul>
                </li>

                <li className="section-nav">
                    <Link to="/sale" >SALE</Link>
                </li>

                <li className="section-nav dropdown-info">
                    <Link to="/info">
                        INFO
                    </Link>
                    <ul className="sub-menu">
                        <li><Link to="/info/como-comprar">Cómo comprar</Link></li>
                        <li><Link to="/info/envios">Envíos</Link></li>
                        <li><Link to="/info/faqs">Preguntas frecuentes</Link></li>
                    </ul>
                </li>

                <li className="section-nav">
                    <Link to="/contact" className="section-nav">CONTACTO</Link>
                </li>
            </ul>
        </div>
    );
};


export default NavBar;