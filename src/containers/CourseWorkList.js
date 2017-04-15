import React from 'react'
import { Panel } from 'react-bootstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CourseWork from '../components/CourseWork'
import { courseSelected } from '../actions/actionCreators'
import Spinner from 'react-spinkit'
import CourseProgress from './CourseProgress'
import SelectedCourseName from './SelectedCourseName'

class CourseWorkList extends React.Component {
  /*componentWillMount() {
    if(this.props.courseWorksList.length > 0) {
      this.props.courseSelected(this.props.coursesList[0].id)
    }
  }*/

  render() {
    if(this.props.courseWorksList.length > 0 && this.props.currentCourseSelected !== "") {
      return (
            <div>
              <CourseProgress />
              {this.props.courseWorksList.map(this.renderCourseWork)}
            </div>
          )
    } else if(this.props.currentCourseSelected !== "") {
        return <div className="course-name"><Panel><h4><SelectedCourseName /></h4> <h5>har inga uppdrag ännu</h5></Panel></div>
    } else if(this.props.isFetching) {
        return <Spinner spinnerName="double-bounce" />
    } else if(this.props.courseWorksList.length !== 0){
      return <div><h4>Välj en kurs</h4></div>
    }else {
      return <div></div>
    }
  }

  renderCourseWork(courseWork) {
    //avoid iteration if the course doesn't have courseWorks
    if(courseWork !== null) {
      return <CourseWork key={courseWork.id} courseWork={courseWork} />
    }
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    coursesList: state.classroomReducer.coursesList,
    courseWorksList: state.classroomReducer.courseWorksList,
    currentCourseSelected: state.classroomReducer.currentCourseSelected,
    isFetching: state.uiReducer.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    courseSelected: courseSelected
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseWorkList)
