
// https://www.typescriptlang.org/docs/handbook/decorators.html

/*

Concepts:
    decorators ES7 feature used by Angular2

*/


// example class decorator
// this decorated is used to seal a class
//------------------------------------------------
function sealed(constructor: Function) {
    // this seals the construtor and prototype so they can not be modified
    console.log("sealing the construct");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

// test if sealed
console.log("Am I sealed:" + Object.isSealed(Greeter));

// try to add a method to prototype - not allowed since it's sealed
// uncomment the following to show how typescript will catch type errors
//Greeter.prototype.fn = function() {
//    console.log("i'm a new function")
//}

let g : Greeter = new Greeter("world");
g.greet();

// uncomment the following to show how typescript will catch type errors
// g.fn();  // try to invoke new function - this will be a runtime error since it is sealed



