import React from 'react'
import { Panel, Image, Row } from 'react-bootstrap';



class Profile extends React.Component {

  render() {
    return (
        <div>
            <Panel>
              <Row><Image src={this.props.profileData.imageUrl} circle style={{width: 100, height: 100}} alt="Student avatar"/></Row>
              <h4>{this.props.profileData.name}</h4>
              <h5>{this.props.profileData.email}</h5>
            </Panel>
        </div>
    )
  }
}

export default Profile
