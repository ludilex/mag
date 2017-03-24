import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {sumaValor, restaValor, hasLogged} from '../actions/index'
import GoogleLogin from 'react-google-login'

/* Components */
import Profile from '../components/Profile'


class App extends React.Component {

  componentDidMount() {

  }

  _success(response) {
    return () => this.props.hasLogged(response)
  }

  _error(response) {

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
        <button onClick={() => this.props.sumaValor(1)}>Suma</button>
        <button onClick={() => this.props.restaValor(1)}>Resta</button>
        <hr/>
        <GoogleLogin
          clientId="760049322440-1j3bnm8474e8rqn37isbsp3mpohdvj8j.apps.googleusercontent.com"
          buttonText="Login with your Google Account"
          scope="
                https://www.googleapis.com/auth/classroom.profile.photos
                https://www.googleapis.com/auth/classroom.profile.emails
                https://www.googleapis.com/auth/classroom.courses.readonly
                https://www.googleapis.com/auth/classroom.coursework.me.readonly
                "
          onSuccess={(response) => this.props.hasLogged(response)}
          onFailure={this._error}
        />
        <Profile photo={this.props.profile.imageUrl} name={this.props.profile.name} email={this.props.profile.email}/>


      </div>
    );
  }
}

//Tells to this component which props will be used from the state
const mapStateToProps = (state) => {
  return {
    valor: state.operacionesReducer.valor,
    profile: state.loginReducer.profile
  }
}

//Tells which actions would be dispatched in this component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sumaValor: sumaValor,
    restaValor: restaValor,
    hasLogged: hasLogged
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
