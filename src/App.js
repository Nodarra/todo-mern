import { useEffect, useState } from 'react';
import './Styles/App.css';
import Typography from '@material-ui/core/Typography';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  /* localStorage.clear() */

  useEffect(()=> {
    getTodos();
  }, [])

  useEffect(()=>{
    saveTodos();
    console.log(todos)
  }, [todos])

  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let localTodos =  JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodos);
    }
  }

  return (
    <div className="app">
      <Typography variant="h2" color="primary">MY TODO's</Typography>
      <Form  
        todos={todos} 
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
