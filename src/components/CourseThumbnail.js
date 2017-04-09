import React from 'react'
import { Row } from 'react-bootstrap'

class CourseThumbnail extends React.Component {
  shouldComponentUpdate() {
    return false
  }
  render() {

    return(
        <div>
          <Row>{this.props.course.section}</Row>
          <Row>{this.props.course.descriptionHeading}</Row>          
          {/*<Row><a href={this.props.course.alternateLink} target="_blank"><Button bsStyle="success">Go to the course</Button></a></Row>*/}
        </div>


    )
  }
}

export default CourseThumbnail
