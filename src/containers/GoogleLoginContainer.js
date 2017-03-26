import React from 'react'
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hasLogged } from '../actions/index'
import { Button } from 'react-bootstrap';


class GoogleLoginContainer extends React.Component {

  _error(response) {
    return <div>Unsuccesful login</div>
  }

  componentWillMount() {
    //console.log("Login will mounted");
  }
  componentWillUnmount(){
    console.log("Login unmounted");
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
        onSuccess={(response) => this.props.hasLogged(response)}
        onFailure={this._error}>
        <Button bsStyle="primary">Login with Google</Button>
      </GoogleLogin>
    )
  }
}

//Tells which actions would be dispatched in this component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    hasLogged: hasLogged
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(GoogleLoginContainer);
