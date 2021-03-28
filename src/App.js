import { useState } from 'react';
import './Styles/App.css';
import Typography from '@material-ui/core/Typography';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <Typography variant="h2" color="primary">MY TODO's</Typography>
      <Form  
        todos={todos} 
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList />
    </div>
  );
}

export default App;
