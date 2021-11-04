import logo from './logo700.png';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import './components/NavBar/NavBar.css';
import ProductCard from './components/ProductCard/ProductCard.js';
import './components/ProductCard/ProductCard.css';

function App() {

  let prodNums = [1,2,3,4,5,6,7,8,9,10,11];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      <NavBar />

      <ProductCard prodNums={prodNums}/>


    </div>
  );
}

export default App;
