Function.prototype.myBind = function (thisArg) {
  const self = this
  const _args = Array.prototype.slice.call(self.arguments ? self.arguments : [], 0)

  return function () {
    return self.apply(thisArg, _args)
  }
}

function helloWorld() {
  console.log(this.name)
  return this.name
}

const bindObj = {
  name: "bindObj"
}

const obj = {
  name: "obj",
  fun1: helloWorld,
  fun2: helloWorld.myBind(bindObj)
}

obj.fun1()
obj.fun2()
