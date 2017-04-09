import React from 'react'
//import { Col } from 'react-bootstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CourseWork from '../components/CourseWork'
import { courseSelected } from '../actions/actionCreators'
import Spinner from 'react-spinkit'
import CourseProgress from './CourseProgress'

class CourseWorkList extends React.Component {
  componentWillMount() {
    if(this.props.courseWorksList.length > 0) {
      this.props.courseSelected(this.props.coursesList[0].id)
    }
  }

  getSelectedCourseName () {
    const courseName = this.props.coursesList.filter((course) =>  {
      return course.id === this.props.currentCourseSelected
    })
    return courseName[0].name;
  }

  render() {
    if(this.props.courseWorksList.length > 0 && this.props.currentCourseSelected !== "") {
      return (
            <div>
              <CourseProgress />
              <h4>Beskickningar av {this.getSelectedCourseName()}</h4>
              {this.props.courseWorksList.map(this.renderCourseWork)}
            </div>
          )
    } else if(this.props.currentCourseSelected !== "") {
        return <div><h4>{this.getSelectedCourseName()} inte har uppdrag ännu</h4></div>
    } else if(this.props.isFetching) {
        return <Spinner spinnerName="double-bounce" />
    }else {
      return <div><h4>Välj en kurs</h4></div>
    }

  }
  renderCourseWork(courseWork) {
    //avoid iteration if the course doesn't have courseWorks
    if(courseWork != null) {
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
