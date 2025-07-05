import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Acordeon from "./Componenetes/Acordeon";
import Navegacion from "./Componenetes/Navegacion";

function App() {
  return (
    <div className="App">

      <Navegacion />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.educacionit.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      <Acordeon />

      </header>


    </div>
  );
}

export default App;
