import React from 'react'
//import { Col } from 'react-bootstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { globalPointsCalculated } from '../actions/actionCreators'
import Points from '../components/Points'




class PointsContainer extends React.Component {

  render() {
    return <Points value={this.props.globalPoints} />
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
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
