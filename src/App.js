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

function App() {

  return (

    <BrowserRouter>
      <div className="App">

        <Header/>
        <NavBar/>

        <Routes>

          <Route path="/" element={<>Home</>} />
          <Route path="/products" element={ <ItemListContainer category="null"/> } />
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
    
  )
}

export default App;
