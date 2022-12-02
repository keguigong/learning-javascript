/**
 * Q1 Event 订阅模型
 * 
 * class Event {
 * on(eventName, cb, ...args) {}
 * 
 * off(eventName, cb) {}
 * 
 * once(eventName, cb, ...args) {}
 * 
 * trigger(eventName, ...args) {}
 * }
 * 
 * const event = new Event();
 * event.on("click", () => {
 * console.log("clicked");
 * });
 */

class Event {
  events = {};

  on(eventName, cb, ...args) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push({ cb, once: false });
  }

  off(eventName, cb) {
    if (this.events[eventName]) {
      let cbs = this.events[eventName];
      for (let i = 0; i < cbs.length; i++) {
        let { cb: regCb } = cbs[i];
        if (regCb === cb) {
          cbs.splice(i, 1);
        }
      }
    }
  }

  once(eventName, cb, ...args) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push({ cb, once: true });
  }

  trigger(eventName, ...args) {
    if (!this.events) return;

    let cbs = this.events[eventName];
    if (!cbs) return;

    for (let i = 0; i < cbs.length; i++) {
      let { cb, once } = cbs[i];
      cb.apply(this, args);

      if (once) {
        this.off(eventName, cb);
      }
    }
  }
}

const e = new Event();
const cb1 = () => {
  console.log("clicked1");
};
const cb2 = () => {
  console.log("clicked2");
};

e.on("click", cb1);

e.on("click", cb2);

e.once("onmouseon", () => {
  console.log("onmouseon1");
});

e.trigger("click");
e.trigger("onmouseon");
e.trigger("onmouseon");

e.off("click", cb1);
e.trigger("click");
