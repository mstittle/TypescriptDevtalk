
//  classes -----------------------------------
/*
Concepts:
    classes
    private, protected, public fields and methods
    class inheritance 
    abstract classes
*/

console.log(" classes ---------------------------------");

class ExampleClass {
    // constructor declaring instance fields 
    constructor( private privateval, public publicval) {
        this.privateval = privateval;
        this.publicval = publicval;
    }

    // public method
    compute() : number {
        console.log('calling compute');
        return this.privateval + this.publicval;
    }
}

let example : ExampleClass = new ExampleClass(1,2);

example.publicval = 20;
console.log(example.compute());

// a base class
class Base {
    private privateval : number; // a private field
    public  publicval  : number; // public value
    constructor() {
        this.privateval = 123;
    }

    // method is public by default
    somefunc() : void {
        console.log("this a class method")
    }
}

let base = new Base();
// uncomment the following to show how typescript will catch type errors
// base.privateval = 1;  // can't access private
base.publicval = 2;   // this is public
base.somefunc();      // this is public method  


// a subclass
class Sub1 extends Base {
    derivedval : number = 0;
    constructor(val : number ) {
       super(); // must call super
       this.derivedval = val;
    }
}

let sub1 : Sub1 = new Sub1(456);
console.log(sub1);

// abstract base class
abstract class AbstractBase {
    abstract compute() : number; // abstract method

    protected protectedFn() : number {
        return 21;
    }

    private privateFn() : number {
        return 33;
    }

}

class Sub2 extends AbstractBase {
    subval : number = 0;
    constructor(val : number ) {
       super(); // must call super
       this.subval = val;
    }

    compute() {
        this.protectedFn(); // ok
        // uncomment the following to show how typescript will catch type errors
        // this.privateFn(); // not ok
        return this.subval * 2;
    }
}

let sub2 : Sub2 = new Sub2(2);
console.log(sub2);
console.log(sub2.compute());

// uncomment the following to show how typescript will catch type errors
// sub2.protectedFn(); // not ok

