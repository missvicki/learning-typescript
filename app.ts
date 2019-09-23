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
