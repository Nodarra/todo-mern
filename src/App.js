import { useEffect, useState } from 'react';
import './Styles/App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [status, setStatus] = useState('all')

  /* localStorage.clear() */

  useEffect(()=> {
    getTodos();
  }, [])

  useEffect(()=>{
    todoFilter();
    saveTodos();
  }, [todos, status])

  const getTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let localTodos =  JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodos);
    }
  }

  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const todoFilter = () => {
    if(status === 'completed'){
      setFilterTodos(todos.filter(todo => todo.completed === true))
    }else if(status === 'uncompleted'){
      setFilterTodos(todos.filter(todo => todo.completed === false))
    }else{
      setFilterTodos(todos)
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
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filterTodos={filterTodos}
      />
    </div>
  );
}

export default App;
