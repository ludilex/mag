import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { courseSelected, courseWorksLoaded } from '../actions/actionCreators'
import CourseThumbnail from '../components/CourseThumbnail'

class CoursesList extends React.Component {

  render() {

    if(this.props.hasCourses === true) {
      return( <div>{this.props.coursesList.map(this.renderThumbnails)}</div>  )
    }else {
      return (<div>Loading ...</div>)
    }
  }
  renderThumbnails(course) {
    return <CourseThumbnail key={course.id} course={course} />
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
    courseWorksLoaded: courseWorksLoaded
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesList);
