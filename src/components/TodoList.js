import React from 'react'
import '../Styles/TodoList.css'

import Todo from './Todo'

function TodoList() {
  return (
    <div className="todo-list">
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  )
}

export default TodoList
