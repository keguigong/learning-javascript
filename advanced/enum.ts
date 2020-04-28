enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

enum Color1 {Red, Green, Blue = "blue".length};
enum Color2 {Red = "red".length, Green, Blue};

const enum Direc {
    Up,
    Down,
    Left,
    Right
}

let direc = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
