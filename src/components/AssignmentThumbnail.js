import React from 'react'
import { Panel, Col, Grid, Label } from 'react-bootstrap';
import Badge from './Badge'


class AssignmentThumbnail extends React.Component {
  render() {
    return(
      <Panel header={this.props.courseName}>
        <Grid>
          <Col xs={3} md={9}>
            <Badge />
            <Label>{this.props.maxPoints}</Label>
          </Col>
          <Col xs={9} md={9}>
            <text>{this.props.assignmentName}</text>
          </Col>
        </Grid>
      </Panel>
    )
  }
}

export default AssignmentThumbnail
