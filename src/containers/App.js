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
import CourseWorkList from '../containers/CourseWorkList'


class App extends React.Component {

  render() {

    if(this.props.isLogged) {
      return(
        <Grid>
          <Row>
            <div><h1>Header</h1></div>
          </Row>
          <Col xs={12} md={3}>
            <Profile profileData={this.props.profile} />
            <CoursesListContainer />
          </Col>
          <Col xs={12} md={9}>
            <CourseWorkList />
          </Col>
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
