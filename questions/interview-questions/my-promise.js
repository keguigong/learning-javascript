const STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected"
}

class MyPromise {
  onFulfilled = []
  onRejected = []

  constructor(excutor) {
    this.state = STATE.PENDING
    this.value = undefined
    this.reason = undefined

    const resolve = function (value) {
      if (this.state === STATE.PENDING) {
        this.state = STATE.FULFILLED
        this.value = value
        this.onFulfilled.forEach((onFulfilled) => onFulfilled.call(undefined))
      }
    }.bind(this)

    const reject = function (reason) {
      if (this.state === STATE.PENDING) {
        this.state = STATE.REJECTED
        this.reason = reason
        this.onRejected.forEach((onRejected) => onRejected.call(undefined))
      }
    }.bind(this)

    try {
      excutor.call(undefined, resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (val) => val
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (e) => {
            throw e
          }

    const myPromise = new MyPromise((resove, reject) => {
      if (this.state === STATE.FULFILLED) {
      } else if (this.state === STATE.REJECTED) {
        typeof onRejected === "function" && onRejected.call(undefined, this.value)
      } else {
        typeof onFulfilled === "function" && this.onFulfilled.push(onFulfilled)
        typeof onRejected === "function" && this.onRejected.push(onRejected)
      }
    })

    return myPromise
  }
}
