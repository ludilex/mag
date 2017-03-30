import React from 'react'
import CourseThumbnail from './CourseThumbnail'
import { Col } from 'react-bootstrap';


class CoursesList extends React.Component {

  render() {
    return(
      <Col>
        {this.props.courses.map(this.renderThumbnails)}
      </Col>
    )
  }

  renderThumbnails(course) {
    return <CourseThumbnail key={course.id} course={course} />

  }
}

export default CoursesList
