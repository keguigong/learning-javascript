const reactive = (obj) => {
  const genProxy = (_obj) => {
    const proxy = new Proxy(_obj, {
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

    return proxy
  }

  return genProxy(obj)
}

const rawData = {
  a: 1,
  b: 2,
  c: {
    c1: {
      af: 999
    },
    c2: 4
  }
}

const data = reactive(rawData)
console.log(data)

data.a = 5 // SET key=a val=5
data.b = 7 // SET key=b val=7
data.c.c2 = 4 //
data.c.c1.af = 121 //SET key=af val=121

console.log(data)
