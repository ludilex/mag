import React from 'react'
import { Panel, Col, Label, Button, Row } from 'react-bootstrap';
import Badge from './Badge'
import SubmissionsDetailsContainer from '../containers/SubmissionsDetailsContainer'

const calendalizer = (monthNumber) => {

  switch(monthNumber) {
    case 1:
        return 'januari'

    case 2:
        return 'februari'

    case 3:
        return 'mars'

    case 4:
        return 'april'

    case 5:
        return 'maj'

    case 6:
        return 'juni'

    case 7:
        return 'juli'

    case 8:
        return 'agusti'

    case 9:
        return 'september'

    case 10:
        return 'oktober'

    case 11:
        return 'november'

    case 12:
        return 'december'

    default:
        return monthNumber

  }
}

const timeConstructor = (time) => {
  if(time.minutes === undefined) {
    return time.hours + " : 00"
  }else {
    return time.hours + " : " + time.minutes
  }

}

const DueDateThumbnail = (props) => {

    if(props.dueDate !== undefined) {
      return (
        <Panel header="Förfallodatum">
          <h5>{calendalizer(props.dueDate.month)}</h5>
          <h2>{props.dueDate.day}</h2>
          <h4><Label>{timeConstructor(props.dueTime)}</Label></h4>
        </Panel>
      )
    } else {
        return <Panel><h5>Ingen förfallodatum</h5></Panel>
    }


}

class CourseWork extends React.Component {
  renderDate() {

  }
  render() {

    return(

      <Panel header={<div>{this.props.courseWork.workType} <text>Points to get: <Label>{this.props.courseWork.maxPoints}</Label></text></div>}>
        <Row>
          <Col xs={12} md={3}>
            <Badge />
            <SubmissionsDetailsContainer
              courseId={this.props.courseWork.courseId}
              courseWorkId={this.props.courseWork.id}
            />
          </Col>
          <Col xs={12} md={6}>
            <h5>Your mision: {this.props.courseWork.title}</h5>
            <p>Mision description: {this.props.courseWork.description}</p>
          </Col>
          <Col xs={12} md={3}>
            {<DueDateThumbnail dueDate={this.props.courseWork.dueDate} dueTime={this.props.courseWork.dueTime}/>}
            <a href={this.props.courseWork.alternateLink} target="_blank"><Button bsStyle="success">Go to the mission!</Button></a>
          </Col>
        </Row>


      </Panel>
    )
  }
}


export default CourseWork
