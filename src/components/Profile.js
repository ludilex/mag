import React from 'react'
import { Panel, Image } from 'react-bootstrap';
import LogoutButton from '../containers/LogoutButton'

class Profile extends React.Component {

  render() {
    return (

      <Panel className="Profile">

        <Image src={this.props.profileData.imageUrl} circle style={{width: 100, height: 100}} alt="Student avatar"/>
        <h4>{this.props.profileData.name}</h4>
        <h5>{this.props.profileData.email}</h5>
        <LogoutButton />
      </Panel>

    )
  }
}

export default Profile
