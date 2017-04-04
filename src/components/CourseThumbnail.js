import React from 'react'
import { Row, Panel, Label } from 'react-bootstrap';
import CourseWorksFilter from '../containers/CourseWorksFilter'
import CourseProgress from '../containers/CourseProgress'
import PointsContainer from '../containers/PointsContainer'


class CourseThumbnail extends React.Component {
  render() {
    return(

      <Panel header={this.props.course.name}>

          <Row>

          </Row>

          <Row>{this.props.course.section}</Row>
          <Row>{this.props.course.descriptionHeading}</Row>
          <h3><Label><PointsContainer pointsType="global" /></Label> points</h3>
          <Row><h5>Course Progress:</h5><CourseProgress /></Row>
          <Row><CourseWorksFilter courseId={this.props.course.id}/></Row>
          {/*<Row><a href={this.props.course.alternateLink} target="_blank"><Button bsStyle="success">Go to the course</Button></a></Row>*/}
      </Panel>

    )
  }
}

export default CourseThumbnail
