Array.prototype.getDepth = function () {
  maxDepth = 0
  
  function _getDepth(depth = 0, arr) {
    if (Array.isArray(arr)) {
      depth++
      
      for (const childArr of arr) {
        _getDepth(depth, childArr)
      }
    } else {
      maxDepth = Math.max(maxDepth, depth)
    }
  }
  
  _getDepth(0, this)
  return maxDepth
};

console.log([].getDepth()); // 1
console.log([1, 2, 3].getDepth()); // 1
console.log([1, 2, [3, 4]].getDepth()); // 2
console.log([1, 2, [3, 4],[6, [7, 8]]].getDepth()); // 3