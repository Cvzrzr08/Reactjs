import React from 'react';
import './App.css';

//fx1
/*
function Mifuncion(props) {
    console.log(props)
    return (
        <div id="Mifx">
            <h3>{props.subtitle}</h3>
        {props.mytext}
        </div>
    );
}*/
 
class Mifuncion extends React.Component {
    state = {
        show: true 
    }

toggleShow = () => {
    //this.setState({show : false})
    this.setState({show : !this.state.show})//cambio de valores de true a false y viceversa
}

    render() {
        if (this.state.show) {
             return (
            <div id="Mifx">
                <h3>{this.props.subtitle}</h3>
                {this.props.mytext}
                <button onClick={this.toggleShow}>toggle show</button>
            </div>
            );

        } else {
            return <h1>
                there are not elements
                <button onClick = {this.toggleShow}>
                ToggleShow
                </button>
                </h1>;
        }

    }
}



//fx1.2 similar a fx1
const MifuncionFlecha = () => <div id="MifxF">Mi funcion flecha</div>
//fx0
function App() {
  return (
      <div>
      This is my componet: 
      <Mifuncion mytext="Pasando entradas albitrarias" subtitle="Lorem ipsum"/> 
      <Mifuncion mytext="Por aqui paso una vaca" subtitle="component II"/> 
      <Mifuncion mytext="entro por donde quizo" subtitle="comppnent III"/> 
      <Mifuncion/> 
      <MifuncionFlecha/>
      </div>
  );
}



export default App;
