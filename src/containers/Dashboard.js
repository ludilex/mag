import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Profile from '../components/Profile'
import CoursesList from '../containers/CoursesList'
import CourseWorkList from '../containers/CourseWorkList'
import { Grid, Col } from 'react-bootstrap';
import {
  resetPoints,
  resetSubmissions,
  accessGranted,
  resetCourseWorks,
  resetCourseSelected
} from '../actions/actionCreators'

class Dashboard extends React.Component {

  componentWillMount(){    
    this.props.resetCourseWorks()
    this.props.resetSubmissions()
    this.props.resetPoints()
    this.props.resetCourseSelected()
  }

  render() {
    return (

      <Grid>
        <Col xs={12} md={3}>
          <Profile profileData={this.props.profile} />
          <CoursesList />
        </Col>
        <Col xs={12} md={9}>
          <CourseWorkList />
        </Col>
      </Grid>

    )
  }
}

//Tells to this component which props will be used from the state
const mapStateToProps = (state) => {
  return {
    isLogged: state.loginReducer.isLogged,
    profile: state.loginReducer.profile
  }
}

//Tells which actions would be dispatched in this component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    resetPoints: resetPoints,
    resetCourseWorks: resetCourseWorks,
    resetSubmissions: resetSubmissions,
    resetCourseSelected: resetCourseSelected,
    accessGranted: accessGranted
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
