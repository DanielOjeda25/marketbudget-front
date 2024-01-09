import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './buttonSlice'
import { Button } from 'keep-react'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <Button onClick={() => dispatch(increment())} size="md">Increment</Button>
        <span>{count}</span>
        <Button onClick={() => dispatch(decrement())} size="md">Decremet</Button>

      </div>
    </div>
  )
}