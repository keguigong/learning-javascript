let number = 0

class Father {
  constructor() {
    number++
  }
}

class Child extends Father {
  // constructor() {
  //   super()
  // }
}

let child1 = new Child()
let child2 = new Child()
console.log(number)