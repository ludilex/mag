import React from 'react'
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { accessGranted, loginDataSaved } from '../actions/actionCreators'
import { Button } from 'react-bootstrap';

class LoginButton extends React.Component {

  _error(response) {
    return <div>Unsuccesful login</div>
  }

  _handleLogin(response) {

  }

  componentWillUnmount(){
    this.props.accessGranted()
  }

  render(){

    return(
      <GoogleLogin
        clientId="760049322440-1j3bnm8474e8rqn37isbsp3mpohdvj8j.apps.googleusercontent.com"
        scope="
              https://www.googleapis.com/auth/classroom.profile.photos
              https://www.googleapis.com/auth/classroom.profile.emails
              https://www.googleapis.com/auth/classroom.courses.readonly
              https://www.googleapis.com/auth/classroom.coursework.me.readonly
              "
        tag="text"
        style={{ color: 'blue' }}
        onSuccess={(response) => this.props.loginDataSaved(response)}
        onFailure={this._error}>
        <Button bsStyle="primary">Login with Google</Button>
      </GoogleLogin>
    )
  }
}

//Tells which actions would be dispatched in this component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginDataSaved: loginDataSaved,
    accessGranted: accessGranted
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginButton);
