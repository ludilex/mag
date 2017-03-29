import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Grid, Row, Col } from 'react-bootstrap';

/* Components */
import Profile from '../components/Profile'

/* Actions */
import {hasLogged, gotAccessToken} from '../actions/index'

/* Containers */
import CoursesListContainer from './CoursesListContainer'
import GoogleLogin from './GoogleLoginContainer'

class App extends React.Component {
  componentDidMount(){
    console.log("App mounted");
  }
  render() {

    if(this.props.isLogged) {
      return(
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <Profile profileData={this.props.profile} />
              </Col>
          </Row>
          <Row>
            <Col xs={12} md={3}>
              <CoursesListContainer />
            </Col>
          </Row>
        </Grid>
      )
    } else {
        return (
          <GoogleLogin />
        )
    }

  }
}

//Tells to this component which props will be used from the state
const mapStateToProps = (state) => {
  return {
    profile: state.loginReducer.profile,
    isLogged: state.loginReducer.isLogged,
    accessToken: state.loginReducer.accessToken
  }
}

//Tells which actions would be dispatched in this component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    hasLogged: hasLogged,
    gotAccessToken: gotAccessToken
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
