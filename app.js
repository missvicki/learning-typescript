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
    Color[Color["Blue"] = 101] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
