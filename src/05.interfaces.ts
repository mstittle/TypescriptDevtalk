
// interfaces ---------------------------------------------------------

console.log("interfaces---------------------------");

/*

Concepts:
    interfaces
    implementation of interface
    duck typing
    readonly
    optional
*/

// simple interface
interface ITalker {
    talk() : void;
   // shutup(): void;
}

// implements an interface
class LoudPerson implements ITalker {
    talk() : void {
        console.log("HELLO");
    }
}

// implicitly implements an interface
class ActsLikeTalker {
    talk() : void {
        console.log("hello i can talk too");
    }
} 

// function that takes a interface instance parameter
function talk( talker : ITalker) : void {
    talker.talk();
}

// invoke with explicit implementation
talk( new LoudPerson());

// invoke with implicit implementation
talk( new ActsLikeTalker());

// another interface type
interface Address {
    readonly street : string; // read only property
    houseNumber: number;
    city: string;
    state: string;
    zip?: string; // optional property 
}

let address : Address = {
    street: "Main St.",
    houseNumber: 100,
    city: "Atlanta",
    state: "Georgia",
    // comment out below on display error exmample
    zip: "30001" // missing zip
}
// uncomment the following to show how typescript will catch type errors
// address.street = "another street;" // readonly can't be modified
address.houseNumber = 101;

console.dir(address);

// interfaces are open for extension
// uncomment the following to show how typescript will catch type errors
//interface Address {
//    apartmentNumber: string;
//}

// address.apartmentNumber = "123";

