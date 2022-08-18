import React, { useState } from 'react';

import './App.css';
import { TodoList } from './Todo/TodoList.js';
import { AddTodo } from './Todo/AddTodo.js';
import Context from './Todo/Context';

function App() {
  const [todos, setTodos] = useState([]);
  
  
  // const todos = [
  //   {id: 1, completed: false, title: 'Выгулять собаку'},
  //   {id: 2, completed: false, title: 'Сходить в магазин'},
  // ]

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeTodo}}>
    <div className='main'>

      <TodoList todos={todos} />

      <div className='redact-wrapper'>
        
        <AddTodo onAdd={addTodo}/>
        <div>
          <p>Редактировать задание</p>
        </div>
      </div>
      
      
    </div>
    </Context.Provider>
  );
}

export default App;
