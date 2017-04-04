import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

var progress = 0

class CourseProgress extends React.Component {

  componentDidMount() {

    const totalCourseWorks = this.props.courseWorksList.length
    const completed = this.props.studentSubmissions.filter(submission => {
      return submission.assignedGrade !== undefined
    }).length

    progress = completed * 100 / totalCourseWorks
  }
  render(){
    return(
      <div><ProgressBar bsStyle="info" now={progress} /></div>
    )
  }
}

//Tells to this component which props will be used from the state
const mapStateToProps = (state) => {
  return {

    courseWorksList: state.classroomReducer.courseWorksList,
    studentSubmissions: state.classroomReducer.studentSubmissions
  }
}

//Tells which actions would be dispatched in this component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseProgress);
