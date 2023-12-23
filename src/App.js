import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import List from './List';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    const newTodo = { id: uuidv4(), text: input, completed: false, timestamp: Date.now() };
    setTodos([newTodo, ...todos]);
    setInput('');
    //console.log({todos})
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <input
          type="text"
          placeholder="Add a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
      <List/>
    </div>
  );
}

export default App;
