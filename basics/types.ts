//
function sayHello(person: string) {
    return 'Hello, ' + person;
}
let user = 'Tom';
console.log(sayHello(user));
//
let myFavNum: string = 'Seven';
//
let yourFavNum: string | number = 'Seven';
yourFavNum = 7;
//
function getLength(something: string | number): string {
    return something.toString();
}
function getStatus(para: string): void {
    console.log
}