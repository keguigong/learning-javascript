const reactive = (target) => {
  return new Proxy(target, {
    get(target, key, receiver) {
      console.log("Collect dependency");
      const res = Reflect.get(target, key, receiver);
      return res;
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver);
      console.log("Trigger update");
      return res;
    },
  });
};

const obj = reactive({ a: 1, b: 2 });

obj.a = 100;
obj.b = 200;

console.log(obj.a);
console.log(obj.b);

const file = new File()
