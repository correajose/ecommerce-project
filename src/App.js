import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar.js';
import AppRouter from './router/AppRouter';
import { BrowserRouter }  from 'react-router-dom';
import { CartContext } from './context/CartContext.js';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item, quantity) => {

    item.qtty !== 0 &&
      isInCart(item) ?
      cart[cart.findIndex(e => e.id === item.id)].addedQtty += quantity
        : setCart(cart === [] ? 
            [{ ...item, addedQtty: quantity}]
            : [...cart, { ...item, addedQtty: quantity}]);
    

    console.log("se agregó un item al carrito")
  };

  // console.log(cart);

  const removeItem = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (item) => {
    let verif = false;

    for (let items of cart) {
      if(items.id === item.id) verif = true;
    }

    return verif;
  };


  return (

    <CartContext.Provider value={{cart, totalPrice, addItem, removeItem, clear, isInCart, setTotalPrice}}>
    
      <BrowserRouter>
        <div className="App">

          <Header/>
          <NavBar/>
          <AppRouter/>

        </div>

      </BrowserRouter>
    </CartContext.Provider>
    
  )
}

export default App;
