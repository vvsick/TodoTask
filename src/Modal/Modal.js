import React from "react";
import { AddTodo } from "../Todo/AddTodo";
import "./Modal.css";

export class Modal extends React.Component {
  /**
   * @param {string} title
   * @param {string} status
   */
  submit(title, status) {
    this.props.submit(title, status);
  }

  render() {
    if (!(this.props.isActive ?? false)) return null;

    return (
      <div className="modal">
        <div className="modal-body">
          <AddTodo
            submit={(title, status) => this.submit(title, status)}
            status={this.props.status}
            mainLabel="Редактировать задание"
            label="Редактировать"
            title={this.props.title}
          />
          <button type="button" onClick={this.props.close}>
            Закрыть
          </button>
          <button type="button" onClick={this.props.delete}>
            Удалить
          </button>
        </div>
      </div>
    );
  }
}
