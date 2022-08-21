import React from "react";
import { Status } from "../entities/TaskStatus.js";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title ?? "",
      status: this.props.status ?? Status.NEW,
    };
  }

  /**
   * @param {Event} event
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state.title, this.state.status);
  }

  /**
   * @param {Event} event
   */
  handleChange(type, { target }) {
    this.setState({ [type]: target.value });
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <p>{this.props.mainLabel ?? "Добавить задание"}</p>
        <input
          value={this.state.title}
          onChange={(e) => this.handleChange("title", e)}
        />

        <select
          value={this.state.status}
          onChange={(e) => this.handleChange("status", e)}
        >
          <option value={Status.NEW}>Новое</option>
          <option value={Status.PROCESS}>В работе</option>
          <option value={Status.DONE}>Завершено</option>
        </select>
        <button type="submit">{this.props.label ?? "Добавить"}</button>
      </form>
    );
  }
}
