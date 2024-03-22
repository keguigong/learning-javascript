this.name = "Hello world!"

const fn1 = () => {
  console.log(this.name)
}

function fn2() {
  console.log(this.name)
}

const obj = {
  name: "Say goodbye.",
  method: function (args) {
    args()
    arguments[0]()
  }
}

obj.method(fn1)
obj.method(fn2)
