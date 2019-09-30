// string
let myName = "Max";

// myName = 2; error

let ourName: string = "Vicki";

// number
let myAge = 27;
// myAge = "Max"; error

// boolean
let hasHobbies = false;
// hasHobbies = 1; error

// assign types
let myRealAge;
myRealAge = 27;

let ourAge: number;
ourAge = 2;

// array
let hobbies = ["Cooking", "Sports"];
console.log(hobbies[0]);
console.log(typeof hobbies);
// hobbies = [100]; error
hobbies = ["a string"];

let hobby: any[] = ["hey"];
hobby = [1];
// hobby = 100 error

// tuples
let address: [string, number] = ["Superstreet", 99];
// let address: [string, number] = [99, "Superstreet"]; //error

// enums
enum Color {
  Gray, //0
  Green = 100, //1 if not assigned a number
  Blue = 2 //increments to 101 if not assigned 2
}

let myColor: Color = Color.Blue;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

// functions
function returnMyName(): string {
  return myName;
  //   return myAge; error
}
console.log(returnMyName());

function sayHello(): void {
  console.log("Hello");
  //   return myName; //error
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(2, 3));
// console.log(multiply(2, "Max")); return NaN

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; error
// myMultiply();error no arguments provided
myMultiply = multiply;
console.log(myMultiply(10, 2));

// objects
let userData: { name: string; age: number } = {
  name: "Vicki",
  age: 22
};

// userData = {}; error missing string name and number age properties
// userData{
//     a: "hello",
//     b: 22
// } error properties don't match name and age

// complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

// complex= {}

// type alias
type Complex = { data: number[]; output: (all: boolean) => number[] };
let complex2: Complex = {
  data: [100, 3, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealRealAge: number | string = 27;

myRealRealAge = "27";
// myRealRealAge = true; error

// check types
let finalValue = "A string";
if (typeof finalValue == "number") {
  // won't return the log
  console.log("Final value is a string");
}
if (typeof finalValue == "string") {
  console.log("Final value is a string");
}

// never
// function never returns anything
function neverReturns(): never {
  throw new Error("An error!");
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;
console.log("I can be null", canBeNull);
let canAlsoBeNull;
canAlsoBeNull = null;
console.log("I am null", canAlsoBeNull);
let canThisBeAny: any = null;
canThisBeAny = 2;

// ES6 in typescript

// let and const
let variable = "test";
console.log(variable);
variable = "reasigning";
console.log(variable);

const v = 2;
console.log(v);
//  v = "saj" error

// block scope
function reset() {
  // console.log(variable) undefined
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);

// arrow functions
console.log("Arrow Funcitons");
const addNumbers = (number1: number, number2: number): number => {
  return number1 + number2;
};
console.log(addNumbers(2, 3));

// default parameter
console.log("default parameters");
const countdown = (start: number = 10) => {
  while (start > 0) {
    start--;
  }
  console.log("Done", start);
};
countdown();

// rest and spread
console.log("Rest & Spread");
const n = [1, 443, 231, 4];
console.log(Math.max(...n)); // spread

function makeArray(...args: number[]) {
  //rest operator, looks like spread but used in a function
  return args;
}
console.log(makeArray(1, 2, 6, 3));
