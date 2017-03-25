import React from 'react'



class Profile extends React.Component {

  render() {
    return (
        <div>
            <img style={{width: 50, height: 50}} src={this.props.photo} alt="avatar" />
            <h4>{this.props.name}</h4>
            <h5>{this.props.email}</h5>
        </div>
    )
  }
}

export default Profile
