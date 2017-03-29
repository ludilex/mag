import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { globalPointsCalculated } from '../actions/actionCreators'


class GamificationEngine extends React.Component {

  componentDidUpdate() {
    var points = 0
    this.props.studentSubmissions.map((submission) => {
      if(submission.assignedGrade != undefined) {
        points += submission.assignedGrade
      }
    })
    this.props.globalPointsCalculated(points)
  }

  render (){


  return (
      <h1>Gamification shit!</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    studentSubmissions: state.classroomReducer.studentSubmissions,
    globalPoints: state.gamificationReducer.globalPoints,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    globalPointsCalculated: globalPointsCalculated
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GamificationEngine)
