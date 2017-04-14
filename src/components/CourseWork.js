import React from 'react'
import { Panel, Col, Label, Button, Row, Well } from 'react-bootstrap';
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
        <Panel header="Förfallodatum" className="Calendar">
          <h5>{calendalizer(props.dueDate.month)}</h5>
          <h2>{props.dueDate.day}</h2>
          <h4><Label>{timeConstructor(props.dueTime)}</Label></h4>
        </Panel>
      )
    } else {
        return <Panel><h5>Inget förfallodatum</h5></Panel>
    }
}

const missionDetector = (workType, dueDate) => {
  if(workType === 'ASSIGNMENT' && dueDate === undefined){
    return "Utmaning"
  }else if(workType === 'ASSIGNMENT') {
    return "Uppdrag"
  }else if(workType === 'MULTIPLE_CHOICE_QUESTION') {
    return "Extra"
  }else if(workType === 'SHORT_ANSWER_QUESTION') {
    return "Kort-extra"
  }
}

class CourseWork extends React.Component {

  render() {
    const missionType = missionDetector(this.props.courseWork.workType, this.props.courseWork.dueDate)

    return(
      <div className="CourseWork">
        <Panel header={<h3>{missionType}</h3>} className={missionType}>
          <Row>
            <Col xs={12} md={3}>
              <SubmissionsDetailsContainer
                courseId={this.props.courseWork.courseId}
                courseWorkId={this.props.courseWork.id}
                maxPoints={this.props.courseWork.maxPoints}
              />
            </Col>
            <Col xs={12} md={6}>
              <Well>{this.props.courseWork.title}</Well>
              <h5>Poäng att få:  <Label>{this.props.courseWork.maxPoints}</Label></h5>
            </Col>
            <Col xs={12} md={3}>
              {<DueDateThumbnail dueDate={this.props.courseWork.dueDate} dueTime={this.props.courseWork.dueTime}/>}
              <a href={this.props.courseWork.alternateLink} target="_blank"><Button bsStyle="success">Gå till uppdraget!</Button></a>
            </Col>
          </Row>
        </Panel>
      </div>

    )
  }
}


export default CourseWork
