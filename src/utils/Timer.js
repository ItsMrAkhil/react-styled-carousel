class Timer {
  constructor(callback, delay) {
    this.callback = callback;
    this.delay = delay;
  }

  pause() {
    clearInterval(this.timerId);
  }

  resume() {
    clearInterval(this.timerId);
    this.timerId = setInterval(this.callback, this.delay);
  }

  start() {
    this.resume();
  }
}

export default Timer;
