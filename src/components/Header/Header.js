import "./Header.css";
import logo from '../../img/logo700.png';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="App-header">
          <span id="logoContainer"><Link to="/"><img src={logo} id="App-logo" alt="logo" /></Link></span>
          <CartWidget w="30px" h="30px"/>
        </header>
    )

};

export default Header;