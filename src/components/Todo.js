import React from 'react'
import '../Styles/Todo.css'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

function Todo() {
  return (
    <div className="todo">
      <IconButton className="checkbox">
        <CheckBoxIcon/>
      </IconButton>
      <p>I am a todo</p>
      <IconButton className="delete">
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

export default Todo
