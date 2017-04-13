import React from 'react'
import { Row } from 'react-bootstrap';
import Badge from '../components/Badge'
import Points from '../components/Points'


class SubmissionDetails extends React.Component {

  render() {
    //return <div>:)</div>
    if(this.props.submissions !== undefined) {
      const submissionState = this.props.submissions[0].state
      const assignedGrade = this.props.submissions[0].assignedGrade

      var percentile = assignedGrade * 100 / this.props.maxPoints

      if(submissionState === 'RETURNED') {
        if(percentile > 90) {
          return (
            <div>
              <Row>
                <h5>Uppdrag slutfört!</h5>
                <Badge badgeType='GOLDEN_BADGE'/>
              </Row>
              <Row><h4><Points value={assignedGrade}/></h4></Row>
              <Row>Poäng</Row>
            </div>
          )
        } else if(percentile >= 75 && percentile < 90) {
            return (
              <div>
                <h5>Uppdrag slutfört!</h5>
                <Row><Badge badgeType='SILVER_BADGE'/></Row>
                <Row><h4><Points value={assignedGrade}/></h4></Row>
                <Row>Poäng</Row>
              </div>
            )
        } else if(percentile < 75) {
            return (
              <div>
                <h5>Uppdrag slutfört!</h5>
                <Row><Badge badgeType='BRONZE_BADGE'/></Row>
                <Row><h4><Points value={assignedGrade}/></h4></Row>
                <Row>Poäng</Row>
              </div>
            )
        }
      } else {
          return <Badge badgeType='LOCKED_BADGE' />
      }
    } else {
        return <Badge badgeType='LOCKED_BADGE' />
    }
  }
}
export default SubmissionDetails
