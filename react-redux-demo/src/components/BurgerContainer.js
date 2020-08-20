import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyBurger } from '../redux'

export const BurgerContainer = (props) => {
  return (
    <div>
      <h2>Number of Burger - {props.numOfBurgers} </h2>
      <button onClick={props.buyBurger} style={{marginRight: '10px'}}>Buy Burger</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfBurgers : state.burger.numOfBurgers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyBurger : () => dispatch(buyBurger())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerContainer)
