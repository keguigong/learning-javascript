_2023/3/7_

- 使用一行代码实现字符串反转
- setState延迟更新

```js
const [val, setVal] = useState(0)
useEffect(() => {
  setVal(prev => prev + 1)
  console.log(val)
  setVal(prev => prev + 1)
  console.log(val)
  
  setTimeout(() => {
    setVal(prev => prev + 1)
    console.log(val)
    setVal(prev => prev + 1)
    console.log(val)
  }, 0)
})
```

- 对象操作

```js
const obj = {
  value: 2
}

obj[obj?.value] = 1

console.log(obj.val ?? obj.value)
console.log(obj[obj?.value] ** 2 ** obj.value)
```

- 使用Error机制避免async/await传递，实现异步操作

```js
const funA = async () => {
  // do some heavy work here
  await doHeavyWork()
  throw Error("funcA")
}

const B = async () => {
  try {
    funA()
  } catch(e) {
    console.log(e.message)
  }
}
```

- 常用的查找算法

  - [七大查找算法, 面试考试皆可用](https://xie.infoq.cn/article/996cf8899930ae467cc790035)
