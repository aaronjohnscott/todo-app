import React from 'react'
import './TodoItem.css'
import {Checkbox} from '@material-ui/core'
import { setCheck } from '../features/todoSlice'
import { useDispatch } from 'react-redux'

const TodoItem = (props) => {
  const dispatch = useDispatch()
  const handleCheck=()=> {
    dispatch(setCheck(id))
  }
  const {name, id, done} = props
  return (
    <div className='todoItem'>
        <Checkbox
          checked={done}
          color='primary'
          onChange={handleCheck}
        />
        <p className={done ? 'todoItem--done' : undefined}>
          {name}
        </p>
    </div>
  )
}

export default TodoItem