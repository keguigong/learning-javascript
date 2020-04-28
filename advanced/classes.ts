// public private 和 protected
class AnimalA {
  public name: string;
  public constructor(name) {
    this.name = name;
  };
};

// let jackAnimal = new Animal("Jack");
// console.log(jackAnimal.name);
// jackAnimal.name = 'Tom';
// console.log(jackAnimal.name);

class SmallCat extends AnimalA {
  public constructor(name) {
    super(name);
    console.log(this.name);
  };
};
// readonly
class AnimalB {
  readonly name: string;
  public constructor(name) {
    this.name  = name;
  }
}

let animalJack = new AnimalB('Jack');
console.log(animalJack.name);
// animalJack.name = 'Tom';

// 抽象类
// 抽象类是不允许被实例化的
abstract class AnimalC {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

// 抽象类中的抽象方法必须被子类实现：
class CatC extends AnimalC {
  public sayHi() {
    console.log(`Meow, My name is ${this.name}`);
  }
}

let catC = new CatC('Tom');
catC.sayHi()

// 类的类型
class AnimalD {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`
  }
}

let animalD: AnimalD = new AnimalD('Jack');
console.log(animalD.sayHi());