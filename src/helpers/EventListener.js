class EventListener {
  constructor() {
    /** @type {function[]} */
    this.listeners = [];
  }

  /**
   * @param {function}
   */
  on(cb) {
    this.listeners.push(cb);
  }

  _emit() {
    this.listeners.forEach((cb) => cb());
  }
}

export default EventListener;
