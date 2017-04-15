import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { courseSelected, courseWorksLoaded } from '../actions/actionCreators'
import { PanelGroup, Panel } from 'react-bootstrap'
import Spinner from 'react-spinkit'
import CourseThumbnail from '../components/CourseThumbnail'


class CoursesList extends React.Component {
  isSelected(courseId) {
    if(courseId === this.props.currentCourseSelected) {
      return "selected-course"
    }else {
      return "Course"
    }
  }
  render() {
    if(this.props.coursesList !==  undefined && this.props.coursesList.length > 0) {
      return(
        <PanelGroup activeKey={this.props.currentCourseSelected} accordion>
          {
            this.props.coursesList.map( course => {
              return (
                <Panel header={course.name} eventKey={course.id} key={course.id} onClick={()=>{this.props.courseSelected(course.id)}} className={this.isSelected(course.id)}>
                  <CourseThumbnail course={course} />
                </Panel>
              )
            })
          }
        </PanelGroup>
      )
    }else if(this.props.isFetching) {
      return <div><Spinner spinnerName="double-bounce" /></div>
    } else {
        return <h4>Du behöver inte ha kurser i Google Classroom</h4>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    coursesList: state.classroomReducer.coursesList,
    currentCourseSelected: state.classroomReducer.currentCourseSelected,
    isFetching: state.uiReducer.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    courseSelected: courseSelected,
    courseWorksLoaded: courseWorksLoaded
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesList);
