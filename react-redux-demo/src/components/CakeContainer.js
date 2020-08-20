import React from 'react'
import { connect } from 'react-redux'
import { buyCake, createCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <button onClick={props.buyCake} style={{marginRight: '10px'}}>Buy Cake</button>
      <button onClick={props.createCake}>Create Cake</button>
    </div>
  )
}

/**
 * cara menggunakanya
 * 1. import connect from react-redux
 * 2. buat arrow function mapStateToProps
 * 3. buat arrow function mapDispatchToProps
 * 4. export default connect(mapStateToProps, mapDispatchToProps)
 */

const mapStateToProps = state => {
  return {
    numOfCakes : state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake : () => dispatch(buyCake()),
    createCake : () => dispatch(createCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(CakeContainer)
