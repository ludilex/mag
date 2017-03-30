import React from 'react'
//import { Col } from 'react-bootstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CourseWork from '../components/CourseWork'




class CourseWorkList extends React.Component {

  renderCourseWork(courseWork) {

    if(courseWork != null) { //avoid iteration if the course doesn't have courseWorks
      return <CourseWork key={courseWork.id} courseWork={courseWork} />
    }
  }

  render() {
    
    if(this.props.hasCourseWorks) {
      return(
        <div>{this.props.courseWorksList.map(this.renderCourseWork)}</div>
      )
    }else {
      return(<div>Loading...</div>)
    }
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
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
