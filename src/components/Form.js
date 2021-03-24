import { 
  TextField,
  Button 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

function Form({todos, setTodos, inputText, setInputText}) {  
  const useStyle = makeStyles({
    button: {
      padding: "7px 20px",
      marginLeft: "2px"
    }
  })
  
  const classes = useStyle();

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
        <TextField variant="outlined" size="small" onChange={inputHandler} value={inputText}/>
        <Button 
          className={classes.button} 
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
