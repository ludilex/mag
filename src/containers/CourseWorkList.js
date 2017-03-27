import React from 'react'
//import { Col } from 'react-bootstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CourseWork from '../components/CourseWork'



class CourseWorkList extends React.Component {

  renderCourseWork(courseWork) {
    console.log(courseWork);
    if(courseWork != null) {
      return <CourseWork key={courseWork.id} courseWork={courseWork} />
    }
  }

  render() {
    console.log(this.props);
    if(this.props.hasCourseWorks) {
      return(
        <div>{this.props.courseWorksList.map(this.renderCourseWork)}</div>
      )
    }else {
      return(<div>Loading...</div>)
    }
  }

}

const mapStateToProps = (state) => {
  return {
    hasCourseWorks: state.classroomReducer.hasCourseWorks,
    courseWorksList: state.classroomReducer.courseWorksList
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseWorkList)
