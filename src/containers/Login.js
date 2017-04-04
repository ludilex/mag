import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { accessGranted, isLogged } from '../actions/actionCreators'
import * as firebase from 'firebase'
import { provider } from '../firebaseConfig'

class Login extends React.Component {

   handleClick() {

     return firebase.auth().signInWithPopup(provider).then(function(result) {
     // This gives you a Google Access Token. You can use it to access the Google API.

     var token = result.credential.accessToken;
     //this.props.accessGranted(result)// The signed-in user info.
     var user = result.user;
     var loginResponse = {
       profileObj: {
         user: user
       },
       accessToken: token
     }
     console.log(loginResponse);
     //return (loginResponse) => this.props.accessGranted(loginResponse)
     return loginResponse
     // ...
     }).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // The email of the user's account used.
         var email = error.email;
         // The firebase.auth.AuthCredential type that was used.
         var credential = error.credential;
         // ...
         return error
     });
  }

  render() {
    return (
      <button onClick={() => this.props.accessGranted(this.handleClick())}>Login with Google</button>
    )
  }
}

//Tells which actions would be dispatched in this component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    accessGranted: accessGranted,
    isLogged: isLogged
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login);
