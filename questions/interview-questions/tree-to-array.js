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
  if (typeof tree !== "object") return
  let arr = []

  const deep = (tree) => {
    let currNode = tree
    const listItem = {
      pid: currNode.pid,
      id: currNode.id,
      children: []
    }
    const childLen = currNode.children.length
    if (childLen > 0) {
      for (let i = 0; i < childLen; i++) {
        listItem.children.push(currNode.children[i].id)
        // console.log(currNode.children[i].id)
        deep(currNode.children[i])
      }
    }
    // console.log(JSON.stringify(listItem))
    arr.push(listItem)
  }

  deep(tree)

  return arr
}

const result = tree2Arr(tree)
console.log(JSON.stringify(result))
// console.log('hello')
