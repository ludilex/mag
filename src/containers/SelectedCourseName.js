import React from 'react'
import {connect} from 'react-redux'

class SelectedCourseName extends React.Component  {
  getSelectedCourseName () {
    const courseName = this.props.coursesList.filter((course) =>  {
      return course.id === this.props.currentCourseSelected
    })
    return courseName[0].name;
  }

  render() {
    return <text className="course-name">{this.getSelectedCourseName ()}</text>
  }
}

//Tells to this component which props will be used from the state
const mapStateToProps = (state) => {
  return {
    currentCourseSelected: state.classroomReducer.currentCourseSelected,
    coursesList: state.classroomReducer.coursesList
  }
}

export default connect(mapStateToProps, null)(SelectedCourseName)
