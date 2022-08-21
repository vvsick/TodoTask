import EventListener from "../helpers/EventListener";
import { Status } from "./TaskStatus";

/**
 * @class Task
 * @property {number} id
 * @property {string} title
 * @property {string} status
 */
class Task extends EventListener {
  /**
   * @param {string} title
   * @param {string} status
   */
  constructor(title, status = Status.NEW) {
    super();
    this.id = Date.now();
    this.title = title;
    this.status = status;
  }

  /**
   * @param {string} value
   * @return {void}
   */
  rename(value) {
    this.title = value;
    this._emit();
  }

  rollback() {
    this.status = Status.NEW;
    this._emit();
  }

  sendToWork() {
    this.status = Status.PROCESS;
    this._emit();
  }

  toComplete() {
    this.status = Status.DONE;
    this._emit();
  }
}

export default Task;
