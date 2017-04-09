import React from 'react'
import { ProgressBar, Well } from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Points from '../components/Points'


class CourseProgress extends React.Component {

  render(){
    if(this.props.courseWorksList.length > 0) {
      var completed = this.getCompletedAssignments()
      var grades = completed.map(submission => {
        return submission.assignedGrade
      })
      var points = grades.reduce((a, b) => {return a + b}, 0)

      return(
        <div>
          <h3><Points value={points} /> poäng</h3>
          <Well>
            <h4>Dina framsteg</h4>
            <ProgressBar bsStyle="info" now={completed.length * 100 / this.props.courseWorksList.length} />
            <h4>{completed.length} / {this.props.courseWorksList.length}</h4>
          </Well>

        </div>
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

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseProgress);
