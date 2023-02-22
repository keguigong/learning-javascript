_2023/2/21_

## 简答

- 介绍一下 Fiber 解决了什么问题

  - [【react】什么是 fiber？fiber 解决了什么问题？从源码角度深入了解 fiber 运行机制与 diff 执行](https://www.cnblogs.com/echolun/p/16414562.html)
  - [说说对 Fiber 架构的理解？解决了什么问题？](https://vue3js.cn/interview/React/Fiber.html)

- 说一下对 IOC/ID 的理解，以及在项目中如何使用的
- qiankun 使用 eval 执行的时候，如果有 var 挂载到 window 上产生污染如何处理

  - [[Bug]微应用 js 中用 var 声明的全局变量或 function 全局声明函数，无法暴露在微应用作用域 window.proxy 上，导致使用这些变量时报错：ReferenceError: xxx is not defined](https://github.com/umijs/qiankun/issues/1170)

- qiankun 如果父应用使用 libA 的 1.0 版本，子应用使用 linA 的 2.0 版本，且 libA 需要将方法挂载到 window 上执行，两个版本的方法被重写了，如何解决这种冲突

## 开放题

- 某 concurrency 库的源代码

  - 该代码实现了什么功能
  - 其中的 `Promise.resolve()` 有无必要

```js
// 是什么代码记不太清了，叫 xxxx-queue 的一个库
run(fn) {
  activeCount++

  const result = async () => {
    return dequeue()()
  }

  return {
    res: await result
  }
}

exec(fn) {
  if (activeCount < concurrency) {
    run(dequeue())
  }

  /**
   * activeCount是异步修改的，需要使用保证当前值为最新的，但是实际上因为run是同步执行，不加也行，如何解释？
   */
  Promise.resolve()

  if (activeCount > concurrency) {
    enqueue(fn)
  }
}

const lalala = (fn) = new Promise(resolve => {

})
```

- Electron 执行氛围 core 层和 UI 层，运行在两个进程中，如何在 UI 层中保持一样的调用方式，且不用写两套代码，可以调用到 core 层的函数。(提示，可以是用 Proxy)

```js
//------main------
class Core {
  methodA() {}
  methodB() {}
}

class BusinessA extends Core {}
class BusinessB extends Core {}

class Business {
  businessA = new BusinessA();
  businessB = new BusinessB();
}

const business = new Business();

//-----ui-----
function App() {
  useEffect(() => {
    business.businessA.methodA();
  });
}
```
