import Task from "../entities/Task";
import EventListener from "../helpers/EventListener";

class TasksRepository extends EventListener {
  constructor() {
    super();
    this.key = "tasks";

    /** @type {Task[]} */
    this.tasks = JSON.parse(localStorage.getItem(this.key) ?? "[]").map(
      (item) => {
        const task = new Task(item.title, item.status);
        task.on(() => this._updateStorage());
        return task;
      }
    );
  }

  /**
   * @param {Task} value
   */
  add(value) {
    this.tasks.push(value);
    this._updateStorage();
    this._emit();
  }

  /**
   * @param {number} value 'Id task'
   */
  remove(value) {
    this.tasks = this.tasks.filter((task) => task.id !== value);
    this._updateStorage();
    this._emit();
  }

  _updateStorage() {
    localStorage.setItem(this.key, JSON.stringify(this.tasks));
  }
}

export default new TasksRepository();
