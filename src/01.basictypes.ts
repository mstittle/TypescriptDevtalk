// basic types-------------------------------------------

/*
Concepts:
    basic types 
    number
    string
    any
    boolean
    void
    arrays
    tuples
    type assertion
*/

console.log("basic types---------------------------------");

// ambient declaration
declare var extval : string;

function basictypes() : void {
    
    extval = "1";
    
    // number type
    let n : number = 1;
    n++;
    n = 1.0;                 // just like javascript numbers are stored as floating point
    console.log(`I'm a number: ${n}`);

    // string type
    let s : string = "abc";
    console.log(`I'm a string: ${s}`);
    console.log( s.indexOf("b") );
    
    // any type
    let a : any = {};
    a.x = "i'm part of any";
    console.log(a);

    // boolean type
    let b : boolean = false;
    b = !b;
    console.log(`I'm a boolean: ${b}`);

    // void type
    let fn : () => void;
    fn = () => { 
        console.log("im a function returning void"); return; 
    }
    fn();

    // arrays
    let ray : number[] = [1,2,3];
    let ray2 : Array<number> = [1,2,3];
    ray = ray.map( (value) => value + 1);
        console.log(`I'm a array of numbers: ${ray}`);

    // tuples like array but can different types at different indexes
    let t: [number, string] = [3, "hello i'm part of a tuple"];
    let num : number = t[0];
    let str : string = t[1];
    console.log(`I'm a little tuple: ${t}`);
    // this would generate an error
    // uncomment the following to show how typescript will catch type errors
    // t[0] = "this is an error"; 
    console.log(`I'm a little tuple: ${t}`);
    
    // define a string with any type
    let someValue: any = "this is a string";

    // assert as type string
    let strLength: number = (<string>someValue).length;
    console.log(`length of a string: ${strLength}`);
    // alternate syntax
    strLength = (someValue as string).length;
     
    console.log(`length of a string: ${strLength}`);
    
}

basictypes();