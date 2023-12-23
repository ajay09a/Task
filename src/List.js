import React from 'react'

function List(props) {
  return (
    <div className="todo-list">
        {props.todos.map((todo) => (
          <div
            key={todo.id}
            className={`todo-card ${todo.completed ? 'completed' : ''}`}
          >
            {todo.text}
          </div>
        ))}
      </div>
  )
}

export default List