import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'



class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>{this.props.valor}</h2>
        <button onClick={()=> this.props.suma(2)}>Suma</button>
        <button onClick={()=> this.props.resta(1)}>Resta</button>
      </div>
    );
  }
}

//Tells to this component which props will be used from the state
const mapStateToProps = (state) => {
  return {
    valor: state.operacionesReducer.valor
  }
}

//Tells which actions would be dispatched in this component
const mapDispatchToProps = (dispatch) => {
  return {
    suma: (numero) => {
      dispatch({
        type: "SUMA",
        payload: numero
      })
    },
    resta: (numero) => {
      dispatch({
        type: "RESTA",
        payload: numero
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
