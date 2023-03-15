const arr = []

console.log(
  Array.isArray(arr),
  arr instanceof Array,
  arr.constructor === Array,
  Object.prototype.toString.call(arr) === "[object Array]",
  Array.prototype.isPrototypeOf(arr),
  Object.getPrototypeOf(arr) === Array.prototype
)
