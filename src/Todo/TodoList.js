import React from "react";
import tasksRepository from "../repositories/tasksRepository";
import { Modal } from "../Modal/Modal";
import { Status } from "../entities/TaskStatus";

export class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      /** @type { Task | null } */
      activeTask: null,
      todos: tasksRepository.tasks,
    };
  }

  componentDidMount() {
    tasksRepository.on(() => this.setState({ todos: tasksRepository.tasks }));
  }
  li;

  close() {
    this.setState({ activeTask: null });
  }

  delete() {
    if (this.state.activeTask) {
      tasksRepository.remove(this.state.activeTask?.id);
    }

    this.close();
  }

  /**
   * @param {string} title
   * @param {string} status
   */
  change(title, status) {
    if (this.state.activeTask) {
      this.state.activeTask.rename(title);
      if (status === Status.NEW) this.state.activeTask.rollback();
      else if (status === Status.PROCESS) this.state.activeTask.sendToWork();
      else if (status === Status.DONE) this.state.activeTask.toComplete();
    }

    this.close();
  }

  render() {
    return (
      <div>
        <div className="todo-list">
          {this.state.todos.map((task) => {
            return (
              <li className="todo-list__item" key={task.id}>
                <span className={task.status}>{task.title}</span>
                <span className="todo-list__status">{task.status}</span>
                <button onClick={() => this.setState({ activeTask: task })}>
                  Редактировать
                </button>
              </li>
            );
          })}
        </div>
        <Modal
          isActive={this.state.activeTask !== null}
          title={this.state.activeTask?.title}
          status={this.state.activeTask?.status}
          delete={() => this.delete()}
          close={() => this.close()}
          submit={(title, status) => this.change(title, status)}
        />
      </div>
    );
  }
}
