import React, { useReducer } from 'react'
import { useContextStore } from '../context/ContextProvider'

const Counter = () => {
  const reducer = useContextStore()

  const initialState = 0
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <button onClick={()=> dispatch({type: 'inc'})}>inc</button>
      {state}
      <button onClick={()=> dispatch({type: 'dec'})}>dec</button>
    </div>
  )
}

export default Counter