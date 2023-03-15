const reactive = (obj) => {
  const genProxy = (_obj) => {
    return new Proxy(_obj, {
      get: (target, p, receiver) => {
        console.log(`GET key=${p}`)
        const res = Reflect.get(target, p, receiver)
        if (typeof res === "object") {
          return genProxy(res)
        } else {
          return res
        }
      },
      set: (target, p, value, receiver) => {
        console.log(`SET key=${p} val=${value}`)
        Reflect.set(target, p, value, receiver)
      }
    })
  }

  return genProxy(obj)
}

const obj = reactive({ a: 1, b: 2, c: { d: 12 } })

obj.a = 100
obj.b = 200
obj.c.d = 15

console.log(obj.a)
console.log(obj.b)
