//
let fibonacci: number[] = [1, 2, 3, 5]
fibonacci.push(9)
//
let anArray: Array<number> = [1, 2, 3, 4];
//
interface NumberArray {
    [index: number]: number;
}
let aaaa: NumberArray = [1, 1, 2, 3, 5];
//
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
//
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
