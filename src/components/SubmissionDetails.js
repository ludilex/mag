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

      if(submissionState === 'RETURNED') {
        return (
          <div>
            <Row><Badge badgeImg='http://home.speedlingua.com/wp-content/uploads/2013/11/badge.png'/></Row>
            <Row>Points obtained: <Points value={assignedGrade}/></Row>
          </div>
        )
      } else {
         return <Badge badgeImg='https://t6.rbxcdn.com/4e2dd1731d4dc6adb7101878e3346a60' />
      }
    } else {
        return <Badge badgeImg='https://t6.rbxcdn.com/4e2dd1731d4dc6adb7101878e3346a60' />
    }
  }
}

export default SubmissionDetails
