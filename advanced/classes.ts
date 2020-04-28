class Animal {
    public name: string;
    public constructor(name) {
        this.name = name;
    }
}

let jackAnimal = new Animal("Jack");
console.log(jackAnimal.name);
jackAnimal.name = 'Tom';
console.log(jackAnimal.name);