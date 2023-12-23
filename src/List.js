import React from 'react'

function List(props) {
    const toggleTodo = (id) => {
        const updatedTodos = props.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        props.setTodos(updatedTodos);
      };
  return (
    <div className="todo-list">
        {/* {props.todos.map((todo) => (
          <div
            key={todo.id}
            className={`todo-card ${todo.completed ? 'completed' : ''}`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </div>
        ))} */}

        {props.todos.filter(todo=>!todo.completed).map((todo) => (
          <div
            key={todo.id}
            className={`todo-card ${todo.completed ? 'completed' : ''}`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </div>
        ))}
        {props.todos.filter(todo=>todo.completed).map((todo) => (
          <div
            key={todo.id}
            className={`todo-card ${todo.completed ? 'completed' : ''}`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </div>
        ))}
      </div>
  )
}

export default List