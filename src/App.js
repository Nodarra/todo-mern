import { useEffect, useState } from 'react';
import './Styles/App.css';
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
    const saveTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    saveTodos();
    console.log(todos);
  }, [todos])

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
      <h1>2DO</h1>
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
