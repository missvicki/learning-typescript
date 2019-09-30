// string
var myName = "Max";
// myName = 2; error
var ourName = "Vicki";
// number
var myAge = 27;
// myAge = "Max"; error
// boolean
var hasHobbies = false;
// hasHobbies = 1; error
// assign types
var myRealAge;
myRealAge = 27;
var ourAge;
ourAge = 2;
// array
var hobbies = ["Cooking", "Sports"];
console.log(hobbies[0]);
console.log(typeof hobbies);
// hobbies = [100]; error
hobbies = ["a string"];
var hobby = ["hey"];
hobby = [1];
// hobby = 100 error
// tuples
var address = ["Superstreet", 99];
// let address: [string, number] = [99, "Superstreet"]; //error
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //increments to 101 if not assigned 2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
    //   return myAge; error
}
console.log(returnMyName());
function sayHello() {
    console.log("Hello");
    //   return myName; //error
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 3));
// console.log(multiply(2, "Max")); return NaN
// function types
var myMultiply;
// myMultiply = sayHello; error
// myMultiply();error no arguments provided
myMultiply = multiply;
console.log(myMultiply(10, 2));
// objects
var userData = {
    name: "Vicki",
    age: 22
};
// userData = {}; error missing string name and number age properties
// userData{
//     a: "hello",
//     b: 22
// } error properties don't match name and age
// complex object
var complex = {
    data: [100, 3, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
// myRealRealAge = true; error
// check types
var finalValue = "A string";
if (typeof finalValue == "number") {
    // won't return the log
    console.log("Final value is a string");
}
if (typeof finalValue == "string") {
    console.log("Final value is a string");
}
// never
// function never returns anything
function neverReturns() {
    throw new Error("An error!");
}
// nullable types
var canBeNull = 12;
canBeNull = null;
console.log("I can be null", canBeNull);
var canAlsoBeNull;
canAlsoBeNull = null;
console.log("I am null", canAlsoBeNull);
var canThisBeAny = null;
canThisBeAny = 2;
// ES6 in typescript
// let and const
var variable = "test";
console.log(variable);
variable = "reasigning";
console.log(variable);
var v = 2;
console.log(v);
//  v = "saj" error
// block scope
function reset() {
    // console.log(variable) undefined
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// arrow functions
console.log("Arrow Funcitons");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(2, 3));
// default parameter
console.log("default parameters");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("Done", start);
};
countdown();
