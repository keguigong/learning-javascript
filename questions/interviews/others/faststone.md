2023/3/7

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

- 使用Error机制避免aync/await传递
