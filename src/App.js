import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/todo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
    .then(resp => resp.json())
    .then(data => setTodos(data))
  }, [])
 

  return (
   <Routes>
    <Route path="/" element={<TodoList todos={todos}/>}/>

   </Routes>
  );
}

export default App;
