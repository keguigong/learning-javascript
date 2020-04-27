//
interface Person1 {
    name: string;
    age: number;
}
let tom: Person1 = {
    name: 'Tom',
    age: 25
}
//
interface Person2 {
    name: string;
    age?: number;
}
let jack: Person2 = {
    name: 'Jack',
}
//
interface Person3 {
    name: string;
    age?: number;
    [propName: string]: any
}
let eric: Person3 = {
    name: 'Eric',
    gender: 'male'
}
//
interface Person4 {
    name: string;
    age?: number;
    [propName: string]: string | number;
}
let bob: Person4 = {
    name: 'Bob',
    gender: 'male'
}
//
interface Person5 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}
let flora: Person5 = {
    id: 89757,
    name: 'Flora',
    gender: 'female'
}
// flora.id = 123123