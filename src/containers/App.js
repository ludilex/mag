import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Grid, Row, Col } from 'react-bootstrap';

/* Components */
import Profile from '../components/Profile'

/* Actions */
import { hasLogged, gotAccessToken } from '../actions/actionCreators'

/* Containers */
import CoursesList from './CoursesList'
import LoginButton from './LoginButton'
import CourseWorkList from '../containers/CourseWorkList'

class App extends React.Component {
  shouldComponentUpdate(){
    return true
  }
  render() {
    if(this.props.isLogged) {
      return(
        <div>
          <Grid>
            <Row>
              <div><h2>Magelungen spel</h2></div>
            </Row>
          </Grid>
          <Grid>
            <Col xs={12} md={3}>
              <Profile profileData={this.props.profile} />
              <CoursesList />
            </Col>
            <Col xs={12} md={9}>
              <CourseWorkList />
            </Col>
          </Grid>
        </div>

      )
    } else {
        return (
          <LoginButton />
        )
    }

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
    hasLogged: hasLogged,
    gotAccessToken: gotAccessToken
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
