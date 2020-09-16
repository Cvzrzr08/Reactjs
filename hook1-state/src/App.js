import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    //def de state contiene var contador con edo. 0
state = {
    contador: 0,
}

// metodo que actualizará la var de contador
incrementar = () => {
    this.setState({contador: this.state.contador + 1})
}
  render() {

      //sacar la var contador para poder renderizar
       const {contador} = this.state 
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {contador}
        </p>
          <button onClick={this.incrementar}>Incrementar</button>
      </header>
    </div>
        );
    }
}
  
export default App;
