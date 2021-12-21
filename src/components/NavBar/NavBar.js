import { Link } from 'react-router-dom';
import CategoriesLinks from '../CategoriesLinks/CategoriesLinks';
import './NavBar.css';

const NavBar = () => {
    return  (
        <div className="navBar container-row">
            <ul className="sectionList container-row">
                <li className="section-nav">
                    <Link to="/us" >nosotros</Link>
                </li>
                <li className="section-nav dropdown-cat">
                    <Link to="/products/all">
                            productos
                    </Link> 
                    <ul className="sub-menu">
                        <li><Link to="/products/all">ver todos</Link></li>
                        <CategoriesLinks/>
                    </ul>
                </li>

                {/* <li> <Link to="/payment" className="section-nav">payment</Link> </li>*/}

                <li className="section-nav">
                    <Link to="/sale" >sale</Link>
                </li>

                <li className="section-nav dropdown-info">
                    <Link to="/info">
                        info
                    </Link>
                    <ul className="sub-menu">
                        <li><Link to="/info/como-comprar">cómo comprar</Link></li>
                        <li><Link to="/info/envios">envíos</Link></li>
                        <li><Link to="/info/faqs">preguntas frecuentes</Link></li>
                    </ul>
                </li>

                <li className="section-nav">
                    <Link to="/contact" className="section-nav">contacto</Link>
                </li>
            </ul>
        </div>
    );
};


export default NavBar;