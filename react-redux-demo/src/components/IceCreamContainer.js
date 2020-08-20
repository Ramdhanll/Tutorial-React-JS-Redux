import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

export const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of ice cream - {props.numOfIceCreams} </h2>
      <button onClick={props.buyIceCream} style={{marginRight: '10px'}}>Buy Ice Cream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfIceCreams : state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream : () => dispatch(buyIceCream()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (IceCreamContainer)
