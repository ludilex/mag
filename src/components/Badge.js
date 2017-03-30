import React from 'react'
import { Image } from 'react-bootstrap';




class Badge extends React.Component {
  render() {
    return(
      <Image
        src={this.props.badgeImg}
        alt={this.props.badgeName}
        style={{width: "80px"}}/>
    )
  }
}

export default Badge
