import "./Header.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="App-header container-row layout-element">
          <span id="logoContainer" className="container-row hierarchy-1">
            <Link to="/"> DECO SHOP </Link>
          </span>
          <CartWidget w="30px" h="30px" r="2rem" t="0"/>
        </header>
    )
};

export default Header;