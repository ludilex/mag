import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Profile from '../components/Profile'
import CoursesList from '../containers/CoursesList'
import CourseWorkList from '../containers/CourseWorkList'
import { Grid, Row, Col } from 'react-bootstrap';

class Dashboard extends React.Component {
  componentWillUnmount() {
    localStorage.clear()
  }
  render() {
    return (

      <Grid>
        <Row><h1>Magelungen Spel</h1></Row>
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
    profile: state.loginReducer.profile
  }
}

//Tells which actions would be dispatched in this component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
