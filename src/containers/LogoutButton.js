import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../actions/actionCreators'
import { Button } from 'react-bootstrap'


class LogoutButton extends React.Component {

  render() {
    return (
      <Button bsStyle="danger" onClick={() => this.props.logout()}>Logga ut</Button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout: logout
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(LogoutButton);
