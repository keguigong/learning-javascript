_2023/2/20_

## 简答题

- http code 分为几大类，403 和 401 的含义
- form 中的 input 设置 required 字段，为空的时候点击有何反应？为空的时候 submit 是否可以点击？
- 我们在设置 URI 的时候哪些是不正确的

  - URI 是由浏览器生成的
  - URI 不可以被更改
  - URI 最好使用 http 的操作的名称而不是操作本身的名字
  - URI 应该大小写敏感
  - URI 改变的时候应该使用 redirect

References:

- [IHerb 面试](https://github.com/daodaoApp/interview/issues/6)

## Array Reduction 一个长度为 n 的自然数组 nums，求解最小的 reduction 开销

There is an array of `n` integers called `num`. The array can be reduced by 1 element by performing a _move_. Each move consists of the following three steps:

1. Pick two different elements `num[i]` and `num[j], i ≠ j`.
2. Remove the two selected elements from the array.
3. Add the sum of the two selected elements to the end of the array.

Each move has a cost associated with it: the sum of the two elements removed from the arrayduring the move. Calculate the minimum total cost of reducing the array to one element.

**Example**

`num = [4, 6, 8]`

Remove 4 and 6 in the first move at a cost of `4 + 6 = 10`, and the resultant array is `num'= [8,10]`. Remove 8 and 10 in the second move at a cost of `8 + 10 = 18`, and the resultant array is `num" = [18]`.

The total cost of reducing this arrav to one e ement using this sequence of moves is `10 + 18 = 28`. This is just one set of possible moves. For instance, one could have started with 4 and 8. Then `4 +8 = 12`, `num' = [6, 12]`, `6 + 12 = 18`, `num" = [18]` cost = `12 + 18 = 30`.

**Function Description**

Complete the function reductionCostin the editor below.

reductionCost has the following parameter(s):

- `int num[n]`: an array of integers

Return

- `int`: the minimum total cost of reducing the input array to one element

**Constraints**

- `2 ≤ n ≤ 104`
- `O ≤ num[i] ≤10^5`
