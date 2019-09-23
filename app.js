"use strict";
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
// userData = {}; error missing string name and number objects
// userData{
//     a: "hello",
//     b: 22
// } error properties don't match name and age
