import React from 'react'
import { useState } from 'react';
export const Task4 = () => {
     const [todos, setTodos] = useState([]);
     const [inputValue, setInputValue] = useState('');
       const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return (
    <>
    <h1 style={{textAlign: 'center'}}>Task 4</h1>
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo} className='Add'>Add</button>
      </div>
      <ol className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className='delete'>x</button>
          </li>
        ))}
      </ol>
    </div>
    </>
  )
}
