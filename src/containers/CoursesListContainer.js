import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { courseSelected } from '../actions/actionCreators'

import CoursesList from '../components/CoursesList'
//import CourseThumbnail from '../components/CourseThumbnail'
//import { Row } from 'react-bootstrap';


class CoursesListContainer extends React.Component {

  render() {
    if(this.props.hasCourses === true) {
      return( <CoursesList courses={this.props.coursesList} /> )
    }else {
      <text>You are not registered to any courses.</text>
    }

  }
}

const mapStateToProps = (state) => {
  return {
    hasCourses: state.classroomReducer.hasCourses,
    coursesList: state.classroomReducer.coursesList
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    courseSelected: courseSelected,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesListContainer);
