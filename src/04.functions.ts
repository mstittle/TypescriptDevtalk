
// functions----------------------------------------------------

console.log("functions ---------------------------------");

/*

Concepts:
    functions with parameter signature
    function default and optional parameters
    function overloading
    type guard
    arrow function

*/

function simpleFunc( val1: number, val2: string, val3 : boolean) : void {

    console.log( `${val1} ${val2} ${val3}`);
    
} 

simpleFunc( 1, '2', false);
// uncomment the following to show how typescript will catch type errors
// simpleFunc( '1', '1', true ); // type signature errors

// default and optional parameters
function func1( arg1: number, arg2: number = 100, arg3? : number) : void {
    if ( arg3 === undefined )
        console.log(arg1 + arg2);
    else
        console.log(arg1 + arg2 + arg3);
}

func1( 1,2,3 );
func1(1, 2);
func1(1);

// overloading function
function padding( all : number);
function padding( topBottom: number, leftRight: number);
function padding(top: number, right: number, bottom: number, left: number);

function padding(a : number, b? : number, c? : number, d? : number ) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    }; 
}

console.log(padding(1));
console.log(padding(1,3));
console.log(padding(1,2,3,4));

// uncomment the following to show how typescript will catch type errors
// console.log(padding(1,3,4)); // error since this signature is not defined


// type guard-----------------------------------------

console.log("type guard")

// note x is a union type
function shiftRight( x : number | string ) {
    if ( typeof x === 'number')
        console.log( x >> 1 );  // compiler knows we are dealing with a number
    else 
        console.log(x.substr(0, x.length -1)); // compiler knows we are dealing with a string
}

shiftRight(12);
shiftRight("12");

// arrow function
let arrowFunc : (arg1: number, arg2: number ) => number = (arg1, arg2) => arg1 + arg2;

console.log( arrowFunc(1,2) );

