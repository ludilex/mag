import React from 'react'
import { Panel, Image, Row, ProgressBar, Label } from 'react-bootstrap';
import PointsContainer from '../containers/PointsContainer'



class Profile extends React.Component {

  render() {
    return (
        <div>
            <Panel>
              <Row><Image src={this.props.profileData.imageUrl} circle style={{width: 100, height: 100}} alt="Student avatar"/></Row>
              <h4>{this.props.profileData.name}</h4>
              <h5>{this.props.profileData.email}</h5>
              <h3><Label><PointsContainer pointsType="global" /></Label> points</h3>

            </Panel>
        </div>
    )
  }
}

export default Profile
