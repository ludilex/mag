import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import { PageHeader } from 'react-bootstrap';
import Dashboard from './Dashboard'
import LoginButton from './LoginButton'
import { accessGranted } from '../actions/actionCreators'

class App extends React.Component {
  componentDidMount() {
    if(this.props.isLogged) {
      //when user reloads the app, it triggers the course fetching again
      this.props.accessGranted()
    }
  }
  
  render() {

    return (
      <Router>
        <div>
          <PageHeader>Magelungen <small>spel</small></PageHeader>
          <Route exact path="/" render={() => (
            this.props.isLogged ? (
              <Redirect to="/dashboard" />
            ) : (
              <LoginButton />)
          )} />

          <Route exact path="/dashboard" render={() => (
            this.props.isLogged ? (
              <Dashboard />
            ) : (
              <Redirect to="/" />)
          )} />
        </div>
      </Router>
    )
  }
}

//Tells to this component which props will be used from the state
const mapStateToProps = (state) => {
  return {
    isLogged: state.loginReducer.isLogged,
  }
}

//Tells which actions would be dispatched in this component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    accessGranted: accessGranted
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
