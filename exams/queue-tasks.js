function subTask() {
  return new Promise((res) =>
    setTimeout(() => {
      console.log("hello")
      res()
    }, 1000)
  )
}

const p = Promise.resolve()
const tasks = [subTask, subTask]

// const res = tasks.reduce(async (p, task) => {
//   await p
//   await task()
// }, p)

async function helper() {
  for (let i = 0; i < tasks.length; i++) {
    await tasks[i]()
  }
}

helper()
