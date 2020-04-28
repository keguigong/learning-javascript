// 类实现接口
interface Alarm {
    alert(): void;
}
interface Light {
    lightOn(): void;
    lightOff(): void;
}
class Door {}
class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}
// 一个类可以实现多个接口
class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}

// 接口继承接口
interface LightableAlarm extends Alarm {
    lightOn(): void;
    lightOff() : void;
}

// 接口继承类
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

// 为什么 TypeScript 会支持接口继承类呢？
// 实际上，当我们在声明 class Point 时，除了会创建一个名为 Point 的类之外，同时也创建了一个名为 Point 的类型（实例的类型）。
interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {
    x: 1,
    y: 2,
    z: 3
}
// 声明 Point 类时创建的 Point 类型只包含其中的实例属性和实例方法