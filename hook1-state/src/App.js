import React, { useState }from 'react';
import logo from './logo.svg';
import './App.css';

function App () {
            //edo.     fx(f5-edo)
    const [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador(contador + 1);
    }
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {contador}
        </p>
          <button onClick={incrementar}>Incrementar</button>
      </header>
    </div>
        );
}
export default App;
