import React from 'react'
import '../Styles/Todo.css'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Todo = ({text, todo, setTodos, todos}) => {
  const deleteTodo = () => {
    setTodos(todos.filter(item => item.id !== todo.id))
  }

  const todoComplete = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id){
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
  }

  return (
    <div className="todo">
      <IconButton className={`checkbox ${todo.completed ? "completed" : ''}`} onClick={todoComplete}>
        <CheckBoxIcon/>
      </IconButton>
      <p>{text}</p>
      <IconButton className="delete" onClick={deleteTodo}>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

export default Todo
