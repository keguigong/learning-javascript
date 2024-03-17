const arr = [100]
arr.name = 200
arr.__proto__.func = 300

for (let k in arr) {
  if (k === 0) {
    console.log(undefined)
  }
  console.log(arr[k])
}

for (let item of arr) {
  console.log(item)
}