/**
 * https://juejin.im/post/5d6e19346fb9a06afc255d8a
 * ES6之那些年我们都迷茫的原型和类（上）
 * https://juejin.im/post/5d6eac206fb9a06af71251bb
 * ES6之那些年我们都迷茫的原型和类（下）
 */

function PersonA(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

PersonA.prototype.sayHello = function() {
  console.log(this.name);
}

let name1 = new PersonA('Jack', 45, 'male');
let name2 = new PersonA('Eric', 11, 'femal');
console.log(name1.sayHello === name2.sayHello);