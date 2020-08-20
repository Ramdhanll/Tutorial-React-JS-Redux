import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake, createCake } from '../redux'

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)} style={{marginRight: '10px'}}>Buy {number} Cake</button>
      <button onClick={props.createCake}>Create Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes : state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake : (number) => dispatch(buyCake(number)),
    createCake : () => dispatch(createCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(NewCakeContainer)
