
// discriminated unions-----------------------------------

/*

Concepts:
    discriminated or tagged unions
    literal types
    nullable types

*/

interface Circle {
    kind: "circle";   // tag
    radius: number;
}

interface Rectangle {
    kind: "rectangle"; // tag
    width: number;
    length: number;
}

type Shape = Circle | Rectangle;

function area(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * 2.0 * shape.radius; // compiler knows what type we are dealing with
        case "rectangle":
            return shape.length * shape.width; 
    }
}

let shape : Circle = { kind: "circle", radius: 1.0};
let shape2 : Rectangle = { kind: "rectangle", width: 1.0, length: 2.0 };

console.log(area(shape));
console.log(area(shape2));


// string literals----------------------------------------------

type Beverage = "Coffee" | "Tea" | "Soda";

let bev : Beverage = "Coffee";

// uncomment the following to show how typescript will catch type errors
// bev = "Coke;" // can't assign value not part of string literal type
bev = "Tea";  // this is ok.

// number literals
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

let d:Digit = 1;

d = 3;  // ok
// uncomment the following to show how typescript will catch type errors
//d = 10; // error

// Compiled with --strictNullChecks
// nullable types
let x: number;
let y: number | undefined;
let z: number | null | undefined;

x = 1;  // Ok
y = 1;  // Ok
z = 1;  // Ok

// uncomment the following to show how typescript will catch type errors
// x = undefined;  // Error
y = undefined;  // Ok
z = undefined;  // Ok

// uncomment the following to show how typescript will catch type errors
// x = null;  // Error
// y = null;  // Error
z = null;  // Ok

// uncomment the following to show how typescript will catch type errors
// x = y;  // Error
// x = z;  // Error
y = x;  // Ok

// uncomment the following to show how typescript will catch type errors
// y = z;  // Error
z = x;  // Ok
z = y;  // Ok

