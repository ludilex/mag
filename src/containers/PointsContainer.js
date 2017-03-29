import React from 'react'
//import { Col } from 'react-bootstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { globalPointsCalculated } from '../actions/actionCreators'
import Points from '../components/Points'




class PointsContainer extends React.Component {

  componentDidUpdate() {
    var points = 0


    this.props.studentSubmissions.map((submission) => {
      //Validate if the submission has been aproved and graded.
      if(submission.assignedGrade !== undefined && submission.state === 'RETURNED') {
        //console.log(submission.state);
        points += submission.assignedGrade
      }
    })
    this.props.globalPointsCalculated(points)
  }

  render() {
    return <Points value={this.props.globalPoints} />
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    studentSubmissions: state.classroomReducer.studentSubmissions,
    globalPoints: state.gamificationReducer.globalPoints,
    coursePoints: state.gamificationReducer.coursePoints
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    globalPointsCalculated: globalPointsCalculated
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PointsContainer)
