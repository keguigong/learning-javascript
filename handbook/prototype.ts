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