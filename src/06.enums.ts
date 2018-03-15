

console.log("enumerated types ---------------------------");

/*

Concepts:
  enumerated types
  assigned values
  open to extension
  const enums and generated code

*/

enum Color {
  Red,
  Black,
  White
}

let c1 : Color = Color.Black;
console.log(c1);                // the value - a number
console.log(Color[c1]);         // the name is a string

// different initial value
enum Color2 {
  Red = 100,
  Black = 200,
  White = 300
}

let c2 : Color2 = Color2.Black;
console.log(c2);
console.log(Color2[c2]);

// type are open for modification
enum Color2 {
  Purple
}
let c4 : Color2 = Color2.Purple;

// const enums remove all generated code 
const enum Color3 {
  Red,
  Black,
  White
}
let c3 : Color3 = Color3.Black;
console.log(c3);

