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

/* Actions */
import {
  gotAccessToken,
  accessGranted,
  changeLoginStatus
 } from '../actions/actionCreators'

import LoginButton from './LoginButton'


class App extends React.Component {
  componentWillMount() {

    if(this.props.isLogged) {
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
    profile: state.loginReducer.profile,
    isLogged: state.loginReducer.isLogged,
    hasCourses: state.classroomReducer.hasCourses,
    accessToken: state.loginReducer.accessToken
  }
}

//Tells which actions would be dispatched in this component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeLoginStatus: changeLoginStatus,
    gotAccessToken: gotAccessToken,
    accessGranted: accessGranted
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
