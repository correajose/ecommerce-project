import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar.js';
import CartView from './components/CartView/CartView';
import SalesView from './components/SalesView/SalesView';
import InfoView from './components/InfoView/InfoView';
import ContactView from './components/ContactView/ContactView';
import ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate}  from 'react-router-dom';
import { itemDetailRoutes } from './helpers/itemDetailRoutes';
import { categoriesRoutes } from './helpers/categoriesRoutes';
import "./context/CartContext.js";
import { CartContext } from './context/CartContext.js';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {

    item.qtty !== 0 &&
      isInCart(item) ?
      cart[cart.findIndex(e => e.id === item.id)].addedQtty += quantity
        : setCart(cart === [] ? 
            [{ ...item, addedQtty: quantity}]
            : [...cart, { ...item, addedQtty: quantity}]);
    

    console.log("se agregó un item al carrito")
  };

  console.log(cart);

  const removeItem = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (item) => {
    let verif = false;

    for (let i of cart) {
      if(i.id === item.id) verif = true;
    }

    return verif;
  };


  return (

    <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
    
      <BrowserRouter>
        <div className="App">

          <Header/>
          <NavBar/>

          <Routes>

            <Route path="/" element={<>Home</>} />
            <Route path="/products" element={ <ItemListContainer category="none"/> } />
            {categoriesRoutes()}
            {itemDetailRoutes()}
            <Route path="/sale" element={ <SalesView/> } />
            <Route path="/cart" element={ <CartView/> } />
            <Route path="/info" element={ <InfoView/> } />
            <Route path="/contact" element={ <ContactView/> } />
            <Route path="*" element={ <Navigate to="/" /> } />

          </Routes>

        </div>

      </BrowserRouter>
    </CartContext.Provider>
    
  )
}

export default App;
