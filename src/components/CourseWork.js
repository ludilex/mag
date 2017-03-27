import React from 'react'
import { Panel, Col, Grid, Label, Button } from 'react-bootstrap';
import Badge from './Badge'
import SubmissionsContainer from '../containers/SubmissionsContainer'


class CourseWork extends React.Component {
  render() {

    return(

      <Panel header={this.props.courseWork.workType}>
        <Grid>
          <Col xs={12} md={2}>
            <Badge />
            <h5>Points to get: <Label>{this.props.courseWork.maxPoints}</Label></h5>
            <SubmissionsContainer
              courseId={this.props.courseWork.courseId}
              courseWorkId={this.props.courseWork.id} />
          </Col>
          <Col xs={12} md={4}>
            <h5>Your mision: {this.props.courseWork.title}</h5>
            <p>Mision description: {this.props.courseWork.description}</p>
          </Col>
          <Col xs={12} md={3}>
            <text></text>
            <a href={this.props.courseWork.alternateLink} target="_blank"><Button bsStyle="success">Go to the mission!</Button></a>
          </Col>
        </Grid>
      </Panel>
    )
  }
}

export default CourseWork
