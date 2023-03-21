const obj = {}
const key1 = { aaa: "123" }
const key2 = { bbb: "456" }

obj[key1] = 1
obj[key2] = 2
console.log(obj)

obj.prototype = {
  c: "hello c"
}

console.log(
  `obj.prototype: ${JSON.stringify(obj.prototype)}\n`,
  `obj.prototype.c: ${obj.prototype.c}\n`,
  `obj.__proto__: ${JSON.stringify(obj.__proto__)}`
)
