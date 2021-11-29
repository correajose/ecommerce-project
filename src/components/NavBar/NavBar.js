import { Link } from 'react-router-dom';
import { categoriesLinks } from '../../helpers/categoriesLinks';
import './NavBar.css';

const NavBar = () => {
    return  (
        <div className="navBar">
            <h1 id="shopName">shop name</h1>

            <ul>
                <Link to="/products"><li className="navBarLink">productos</li></Link>
                <li>
                    <ul>
                        {categoriesLinks()}
                    </ul>
                </li>
                <Link to="/sale"><li className="navBarLink">ofertas</li></Link>
                <Link to="/info"><li className="navBarLink">info</li></Link>
                <Link to="/contact"><li className="navBarLink">contacto</li></Link>
            </ul>
        </div>
    );
};


export default NavBar;