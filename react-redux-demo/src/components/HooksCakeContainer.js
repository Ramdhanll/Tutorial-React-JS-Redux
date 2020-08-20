import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake, createCake } from '../redux'

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Hook Num of Cake - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())} style={{marginRight: '10px'}}>Buy Cake</button>
      <button onClick={() => dispatch(createCake())}>Create Cake</button>
    </div>
  )
}

export default HooksCakeContainer
