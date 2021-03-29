import React from 'react'
import '../Styles/TodoList.css'

import Todo from './Todo'

function TodoList({todos, setTodos}) {
  return (
    <div className="todo-list">
      {
        todos.map((todo) => (
            <Todo 
              todo = {todo}
              todos = {todos}
              setTodos = {setTodos}
              key = {todo.id}
              text = {todo.text}
            />
          )
        )
      }
    </div>
  )
}

export default TodoList
