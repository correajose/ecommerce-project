import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar.js';
import AppRouter from './router/AppRouter';
import { BrowserRouter }  from 'react-router-dom';
import { CartContext } from './context/CartContext.js';
import { useState } from 'react';
import CartActionAlert from './components/CartActionAlert/CartActionAlert';

function App() {

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartAction, setCartAction] = useState("");
  const [cartActionDisplay, setCartActionDisplay] = useState("hidden");

  const addItem = (item, quantity) => {

    item.qtty !== 0 &&
      isInCart(item) ?
      cart[cart.findIndex(e => e.id === item.id)].addedQtty += quantity
        : setCart(cart === [] ? 
            [{ ...item, addedQtty: quantity}]
            : [...cart, { ...item, addedQtty: quantity}]);
                
    setCartAction("se ha agregado un item");
    setCartActionDisplay("shown");
  };
  
  const removeItem = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));

    setCartAction("se ha eliminado un item");
    setCartActionDisplay("shown");
  };


  const clear = () => {
    setCart([]);

    setCartAction("se ha vaciado el carrito");
    setCartActionDisplay("shown");
  };

  const isInCart = (item) => {
    let verif = false;

    for (let items of cart) {
      if(items.id === item.id) verif = true;
    }

    return verif;
  };

  const computeTotalPrice = () => {
    let total = 0;
    
    for (let item of cart) {
      total += item.addedQtty * item.price;
    }

    setTotalPrice(total);
  };

  

  return (

    <CartContext.Provider value={{ cart, totalPrice, cartActionDisplay, addItem, removeItem, clear, isInCart, computeTotalPrice, setCartActionDisplay, setCart }}>
    
      <BrowserRouter>
        <div className="App">

          { cartActionDisplay === "shown" && <CartActionAlert action={cartAction} /> }

          <Header/>
          <NavBar/>
          <AppRouter/>

        </div>

      </BrowserRouter>
    </CartContext.Provider>
    
  )
}

export default App;
