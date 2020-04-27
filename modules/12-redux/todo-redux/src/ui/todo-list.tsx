import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../application/store/store'
import { editTodo } from '../application/todo/todo-action'

export const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todoReducer.todos)
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  return (
    <ul>
      {todos.map(({ id, text }) => (
        <div>
          <li key={id}>{text}</li>
          <button onClick={() => setIsEditing(!isEditing)}>✏️</button>
          {isEditing && (
            <>
              <input type="text" onChange={event => setValue(event.target.value)} value={value} />
              <button onClick={() => dispatch(editTodo({ id, text: value }))}>✅</button>
            </>
          )}
        </div>
      ))}
    </ul>
  )
}