import { 
  Button,
  NativeSelect,
  Select,
  FormControl,
  MenuItem 
} from '@material-ui/core';
import React from 'react'
import '../Styles/Form.css'

function Form({todos, setTodos, inputText, setInputText}) {  
  const inputHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    if(inputText != ''){
      setTodos([
        ...todos, {text: inputText, completed: false, id: Math.random() * 100}
      ])
    }
    setInputText('')
  }


  return (
    <div className="form">
      <form>
        <input onChange={inputHandler} value={inputText} required/>
        <Button
          className="submit"
          variant="contained" 
          color="primary" 
          type="submit" 
          onClick={submitHandler}
        >Submit</Button>
      </form>
      <select className="select-todo">
        <option>All</option>
        <option>Uncompleted</option>
        <option>Completed</option>
      </select>
    </div>
  )
}

export default Form
