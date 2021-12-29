import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar.js';
import AppRouter from './router/AppRouter';
import Footer from './components/Footer/Footer.js';
import { BrowserRouter }  from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  
  return (
    
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <NavBar/>
          <AppRouter/>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
    
  )
}

export default App;
