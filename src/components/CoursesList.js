import React from 'react'
import CourseThumbnail from './CourseThumbnail'
import { Col } from 'react-bootstrap';



class CoursesList extends React.Component {


  renderThumbnails(course) {
    console.log("Llegó!");
    return <CourseThumbnail key={course.id} course={course} />
  }

  render() {
    var courses = this.props.courses
    //console.log(this.props);
    //return (<div>{JSON.stringify(this.props.courses[0])}</div>)
    return(
      <Col>{this.props.courses.map(this.renderThumbnails)}</Col>
    )
  }
}

export default CoursesList
