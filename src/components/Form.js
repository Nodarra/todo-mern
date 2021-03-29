import { 
  Button 
} from '@material-ui/core';
import React from 'react'
import '../Styles/Form.css'

function Form({todos, setTodos, inputText, setInputText}) {  
  const inputHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 100}
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
