import React from 'react'
import { Label } from 'react-bootstrap';

class Points extends React.Component {
  render() {
    return <Label>{this.props.value}</Label>
  }
}

export default Points
