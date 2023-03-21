const tree = {
  pid: null,
  id: 1,
  children: [
    {
      pid: 1,
      id: 2,
      children: []
    },
    {
      pid: 1,
      id: 3,
      children: [
        {
          pid: 3,
          id: 4,
          children: []
        },
        {
          pid: 3,
          id: 5,
          children: []
        }
      ]
    }
  ]
}
// const arr = [
//   { pid: null, id: 1, children: [2, 3] },
//   { pid: 1, id: 2, children: [] },
//   { pid: 1, id: 3, children: [4, 5] },
//   ...
//   ]

const tree2Arr = (tree) => {
  const res = []
  const _tree2Arr = (tree) => {
    const { children, ...rest } = tree
    const newItem = {
      ...rest,
      children: []
    }
    for (let i = 0; i < children.length; i++) {
      newItem.children.push(children[i].id)
      _tree2Arr(children[i])
    }
    res.push(newItem)
  }
  _tree2Arr(tree)
  return res
}

const result = tree2Arr(tree)
console.log(JSON.stringify(result))
