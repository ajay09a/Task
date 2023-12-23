import React, { useState } from 'react';
import './App.css';
import List from './List';

function App() {
  const [input, setInput] = useState('');

  const addTodo = () => {
    console.log(input)
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
