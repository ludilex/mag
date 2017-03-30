import React from 'react'
import { Panel, Col, Grid, Label, Button } from 'react-bootstrap';
import Badge from './Badge'
import SubmissionsDetailsContainer from '../containers/SubmissionsDetailsContainer'


class CourseWork extends React.Component {

  render() {
    var dueDate = ''
    var dueTime = ''


    if(this.props.courseWork.dueDate !== undefined) {
      dueDate = this.props.courseWork.dueDate.month + " / " + this.props.courseWork.dueDate.day
      if(this.props.courseWork.dueTime !== undefined) {
        dueTime = this.props.courseWork.dueTime.hours + ":"  + this.props.courseWork.dueTime.minutes
      }
    }

    return(

      <Panel header={<div>{this.props.courseWork.workType} <text>Points to get: <Label>{this.props.courseWork.maxPoints}</Label></text></div>}>
        <Grid>
          <Col xs={12} md={2}>
            <Badge />

            <SubmissionsDetailsContainer
              courseId={this.props.courseWork.courseId}
              courseWorkId={this.props.courseWork.id}
            />
          </Col>
          <Col xs={12} md={4}>
            <h5>Your mision: {this.props.courseWork.title}</h5>
            <p>Mision description: {this.props.courseWork.description}</p>
          </Col>
          <Col xs={12} md={3}>
            {<h3>{dueDate} {dueTime}</h3>}
            <a href={this.props.courseWork.alternateLink} target="_blank"><Button bsStyle="success">Go to the mission!</Button></a>
          </Col>
        </Grid>
      </Panel>
    )
  }
}

export default CourseWork
