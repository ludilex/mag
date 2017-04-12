import React from 'react'
import { ProgressBar, Panel } from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { globalPointsCalculated } from '../actions/actionCreators'
import Points from '../components/Points'
import CourseName from './SelectedCourseName'


class CourseProgress extends React.Component {

  render(){
    if(this.props.courseWorksList.length > 0) {

      var completed = this.getCompletedAssignments()
      var grades = completed.map(submission => {
        return submission.assignedGrade
      })
      var points = grades.reduce((a, b) => {return a + b}, 0)

      return(
        <Panel header={<h4>Dina framsteg i <CourseName /></h4>}>
            <h2><Points value={points} /></h2>
            <h5>Poäng</h5>

            <h4>Klarade uppdrag</h4>
            <ProgressBar bsStyle="info" now={completed.length * 100 / this.props.courseWorksList.length} />
            <h4>{completed.length} / {this.props.courseWorksList.length}</h4>
        </Panel>
      )
     }else {
       return <div>Inga uppgifter ännu</div>
     }

  }

  getCompletedAssignments() {
    if(this.props.studentSubmissions !== undefined) {
      return this.props.studentSubmissions.filter(submission => {
        if(submission !== undefined) {
          return submission.state === 'RETURNED'
        }else {
          return 0
        }
      })
    }else {
      return 0
    }
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
    globalPointsCalculated: globalPointsCalculated
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseProgress);
