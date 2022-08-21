import React from "react";
import { TodoList } from "./Todo/TodoList.js";
import { AddTodo } from "./Todo/AddTodo.js";
import tasksRepository from "./repositories/tasksRepository.js";
import Task from "./entities/Task.js";
import "./App.css";

function App() {
  /**
   * @param {string} value
   */
  function add(title, status) {
    const task = new Task(title, status);
    tasksRepository.add(task);
  }

  return (
    <div className="main">
      <TodoList />
      <div className="add-todo">
      <AddTodo submit={(title, status) => add(title, status)} />
      </div>
    </div>
  );
}

export default App;
