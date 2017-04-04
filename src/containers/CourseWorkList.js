import React from 'react'
//import { Col } from 'react-bootstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CourseWork from '../components/CourseWork'


class CourseWorkList extends React.Component {
  getSelectedCourseName () {
    const courseName = this.props.coursesList.filter((course) =>  {return course.id === this.props.currentCourseSelected})[0].name;
    return courseName
  }
  render() {
    if(this.props.hasCourseWorks) {
      return (
              <div>
                  <h3>Course Works of {this.getSelectedCourseName()}</h3>
                  {this.props.courseWorksList.map(this.renderCourseWork)}
              </div>
          )
    } else {
      return <div>This course doesn't have course works yet.</div>
    }

  }
  renderCourseWork(courseWork) {
    //avoid iteration if the course doesn't have courseWorks
    if(courseWork != null) {
      return <CourseWork key={courseWork.id} courseWork={courseWork} />
    }
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    coursesList: state.classroomReducer.coursesList,
    hasCourseWorks: state.classroomReducer.hasCourseWorks,
    courseWorksList: state.classroomReducer.courseWorksList,
    currentCourseSelected: state.classroomReducer.currentCourseSelected
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseWorkList)
