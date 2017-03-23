import React from 'react'
import { connect } from 'react-redux'
//import Boton from './Boton'



class BotonContainer extends React.Component {
  render(){
    return(
      <buton>{this.props.valor}</buton>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    valor: state.valor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setValue: () => {
      dispatch({
        type: "SUMA",
        //payload: 1
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BotonContainer)
