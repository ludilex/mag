import React from 'react'
import { Image } from 'react-bootstrap';




class Badge extends React.Component {
  render() {
    return(
      <Image
        src='https://t6.rbxcdn.com/4e2dd1731d4dc6adb7101878e3346a60'
        alt={this.props.badgeName}
        style={{width: "80px"}}/>
    )
  }
}

export default Badge
