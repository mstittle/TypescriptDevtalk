
// type inference-----------------------------------------------

console.log("typeinference---------------------------------");

/*

Concepts:
    type inference

*/

function typeinference() : void {
    let foo = "a string"; // string type is inferred
    let bar = 123;   // number type is inferred
    let baz = false; // boolean type is inferred

    console.log(`string: ${foo}  number: ${bar} boolean: ${baz}`);

    foo = "a different string"; // ok
    bar = 345; // ok
    baz = true; // ok

    // error trying to assign to different type
    // uncomment the following to show how typescript will catch type errors
    // foo = 2;  
    // bar = "wrong type";
    // uncomment the following to show how typescript will catch type errors
    // baz = 0;

    // still generates runnable javascript code
    console.log(`string: ${foo}  number: ${bar} boolean: ${baz}`);
}

typeinference();