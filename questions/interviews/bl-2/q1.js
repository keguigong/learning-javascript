var name = "Hello world!"

const fn = () => {
  console.log(this.name);
}

const obj = {
  name: "Say goodbye.",
  method: function (args) {
    args()
    arguments[0]()
  }
}

obj.method(fn, 1)