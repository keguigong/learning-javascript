// public private 和 protected
class AnimalA {
  protected name: string;
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
let smallCat = new SmallCat('Tom Cat');

// readonly
// 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
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
// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。
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