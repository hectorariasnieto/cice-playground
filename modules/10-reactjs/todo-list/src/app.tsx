import React, { useState } from 'react'
import styles from './app.module.css'
import { bind } from './utils/bind'

const cx = bind(styles)

interface Todo {
  id: number
  text: string
  completed: boolean
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todoText, setTodoText] = useState('')

  function createTodo() {
    const newTodo = { id: Math.random() * 1000, text: todoText, completed: false }
    setTodos([...todos, newTodo])
    setTodoText('')
  }

  function completeTodo(id: number) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo
      })
    )
  }

  return (
    <>
      <ul>
        {todos.map(todo => (
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            <span></span>
            <li className={cx({ completed: todo.completed })}>{todo.text}</li>
          </div>
        ))}
      </ul>
      <form
        onSubmit={event => {
          event.preventDefault()
          createTodo()
        }}
      >
        <label>
          Todo
          <input value={todoText} onChange={event => setTodoText(event.target.value)} />
        </label>
        <button onClick={() => setTodoText('')}>Clear todo</button>
        <button type="submit">Create todo</button>
      </form>
    </>
  )
}
