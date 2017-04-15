import React from 'react'
import { ProgressBar, Panel, Col, Image } from 'react-bootstrap'
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
        <div className="Progress-section">
          <Panel header={<h4>Dina framsteg i <CourseName /></h4>}>
              <Col xs={6} md={4}>
                <h1><Points value={points} /></h1>
                <h4>Poäng</h4>
              </Col>
              <Col xs={6} md={4}>
                <h5>Klarade uppdrag</h5>
                <ProgressBar bsStyle="info" now={completed.length * 100 / this.props.courseWorksList.length} />
                <h4>{completed.length} / {this.props.courseWorksList.length}</h4>
              </Col>
              <Col>
                <Image src="img/google_classroom.png" style={{width: "100px"}}/>
              </Col>
          </Panel>
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
    globalPointsCalculated: globalPointsCalculated
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseProgress);
