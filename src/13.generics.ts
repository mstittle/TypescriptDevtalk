

// generic function 
function arrayLength<T>( arg : Array<T>) : number {
    return arg.length;
}

arrayLength( [1,2,3]);
arrayLength(["a", "b", "c"]);

// generic class
class GenericBox<T> {
    value : T;

    constructor( value : T) {
        this.set(value);
    }

    get() : T {
        return this.value;
    }

    set( value : T) : void {
        this.value = value;
    }
}

let g1 : GenericBox<string> = new GenericBox("1");
let g2 : GenericBox<number> = new GenericBox(1);

let val1 : string = g1.get();
let val2 : number = g2.get();

// generic constraints

// interface type to use as a constraint
interface IHasLength {
    length : number;
}

// function using type constraint
function length2<T extends IHasLength>( arg : T) {
    return arg.length;
}

length2("hello");
length2([1,2,3]);
// uncomment the following to show how typescript will catch type errors
// length2(1);     // doesn't satisfy type constraint

// factory example 
function build<T>( clazz : { new() : T}) : T {
    return new clazz();
}

class Test { val : string = "abc"};
let t : Test = build(Test);
console.log(t);

