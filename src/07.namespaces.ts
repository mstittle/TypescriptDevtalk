
// namespaces 

console.log("namespaces---------------------------------");

/*

Concepts:
    namespace
    export

*/
namespace MyStuff {
    // exported function
    export function doStuff() : void {
        console.log("i'm doing stuff");
    }

    // internal function not visible outside of the namespace
    function doInternalStuff() : void {
        console.log("i'm secret doing stuff");
    }

    // exported interface type
    export interface MyInterface {
        x : number;
        y: number;
    }
}

// i'm able to call exported functin
MyStuff.doStuff();

// i'm able to use exported functin
let val : MyStuff.MyInterface = { x: 1, y: 2};

// i cannot call a non exported function 
// uncomment the following to show how typescript will catch type errors
// MyStuff.doInternalStuff(); // error not visible

