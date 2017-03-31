import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { courseworksRetrieved, courseSelected } from '../actions/actionCreators'


class CourseWorksFilter extends React.Component {

  render() {
      return(
         <button onClick={() => this.props.courseSelected(this.props.courseId)}>See only this course works</button>
       )
  }
}

const mapStateToProps = (state) => {
  return {
    accessToken: state.loginReducer.accessToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    courseworksRetrieved: courseworksRetrieved,
    courseSelected: courseSelected
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseWorksFilter);
