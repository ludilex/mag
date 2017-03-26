import React from 'react'
import CourseThumbnail from './CourseThumbnail'
import { Panel, Col, Row } from 'react-bootstrap';


class CoursesList extends React.Component {


  renderThumbnails(course) {
    return <CourseThumbnail key={course.id} course={course} />

  }

  render() {

    return(
      <Col>
        {this.props.courses.map(this.renderThumbnails)}
      </Col>
    )
  }
}

export default CoursesList
