var name = "Hello world!"

function fn() {
  console.log(this.name);
}

const obj = {
  name: "Say goodbye.",
  method: function () {
    fn()
    arguments[0]()
  }
}

obj.method(fn, 1)
fn()