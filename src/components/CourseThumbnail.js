import React from 'react'
import { Row, Button, Panel } from 'react-bootstrap';


class CourseThumbnail extends React.Component {
  render() {
    return(
      <Panel header={this.props.course.name}>
        <Row>{this.props.course.section}</Row>
        <Row>{this.props.course.descriptionHeading}</Row>
        <Row><a href={this.props.course.alternateLink}><Button bsStyle="success">Go to the course</Button></a></Row>
      </Panel>

    )
  }
}

export default CourseThumbnail
