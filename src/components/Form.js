import { 
  TextField,
  Button 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import '../Styles/Form.css'

function Form({todos, setTodos, inputText, setInputText}) {  
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    setTodos([
      ...todos, {todo: inputText, completed: false}
    ])
    setInputText('')
  }


  return (
    <div className="form">
      <form>
        <input onChange={inputHandler} value={inputText}/>
        <Button
          className="submit"
          variant="contained" 
          color="primary" 
          type="submit" 
          onClick={submitHandler}
        >Submit</Button>
      </form>
    </div>
  )
}

export default Form
