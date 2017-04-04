import React from 'react'
import { Panel, Image, Label } from 'react-bootstrap';
import PointsContainer from '../containers/PointsContainer'
import LogoutButton from '../containers/LogoutButton'

class Profile extends React.Component {

  render() {
    return (

      <Panel>

        <Image src={this.props.profileData.imageUrl} circle style={{width: 100, height: 100}} alt="Student avatar"/>
        <h4>{this.props.profileData.name}</h4>
        <h5>{this.props.profileData.email}</h5>
        <h3><Label><PointsContainer pointsType="global" /></Label> points</h3>
        <LogoutButton />
      </Panel>

    )
  }
}

export default Profile
