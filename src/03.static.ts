
// static properties

console.log(" static properties  ---------------------------------");

/*

Concepts:
    static class properties
*/


class ClassWithAStatic {
    instanceVal: number = 1;
    static counter: number = 2;
    private static counter2: number = 3;

    static staticFn() : void {
        // uncomment the following to show how typescript will catch type errors
        // this.instanceVal++; // no access to instance property

        ClassWithAStatic.counter++;
    }
}

ClassWithAStatic.counter++;  // this is ok
console.log(ClassWithAStatic.counter);

// uncomment the following to show how typescript will catch type errors
//ClassWithAStatic.counter2++;   // this is private static
//console.log(ClassWithAStatic.counter2);

// crearte an instance
let c : ClassWithAStatic = new ClassWithAStatic();
console.log(c);

c.instanceVal++;
// uncomment the following to show how typescript will catch type errors
// c.counter++;  // error no access to static property from instance
