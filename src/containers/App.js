import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {sumaValor, restaValor, hasLogged, gotAccessToken} from '../actions/index'
import GoogleLogin from 'react-google-login'

/* Components */
import Layout from '../components/Layout'
import Profile from '../components/Profile'


/* Containers */
import CoursesContainer from './CoursesContainer'


class App extends React.Component {

  componentDidMount() {

  }

  _error(response) {

  }

  render() {
    
    if(this.props.isLogged) {
      return(
        <Layout>
          <div>
            <Profile photo={this.props.profile.imageUrl} name={this.props.profile.name} email={this.props.profile.email}/>
            <CoursesContainer />
          </div>
        </Layout>

      )
    } else {
        return (
          <Layout>
            <div>
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
            </div>
          </Layout>

      )
    }

  }
}

//Tells to this component which props will be used from the state
const mapStateToProps = (state) => {
  return {
    valor: state.operacionesReducer.valor,
    profile: state.loginReducer.profile,
    isLogged: state.loginReducer.isLogged,
    accessToken: state.loginReducer.accessToken,
    coursesList: state.classroomReducer.coursesList
  }
}

//Tells which actions would be dispatched in this component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sumaValor: sumaValor,
    restaValor: restaValor,
    hasLogged: hasLogged,
    gotAccessToken: gotAccessToken
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
