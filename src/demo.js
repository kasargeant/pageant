/**
 * Demonstrates core console functionality - using whatever color scheme is defined.
 * @returns {void}
 */

// Imports
const Pageant = require("./js/Pageant");
const wrap = require("wordwrap");


let console = new Pageant();
console.indentLeft = 5;
let array = [1, true, "three"];
let object = {a: 1, b: true, c: "three", d: {msg: "hi!"}};

console.log("PAGEANT CONSOLE DEMO");
console.log("\n");
console.log("Strings:-");
console.log("This is a standard console.log().");
console.log("This is a standard console.log() %s %d %s.", "with", 3, "args");
console.warn("This is a standard console.warn().");
console.warn("This is a standard console.warn() %s %d %s.", "with", 3, "args");
console.error("This is a standard console.error().");
console.error("This is a standard console.error() %s %d %s.", "with", 3, "args");

console.info("This is a string sent to console.info() and these are other types:-");
console.info(true);
console.info(12.345);
console.info(function(){return "some result";});
console.log("\n");
console.log("Arrays:-");
console.log(array);
console.info(array);
console.log("\n");
console.log("Objects:-");
console.log(object);
console.info(object);
let size = console.getSize();
console.log(`${size.width}x${size.height}`);
console.log(wrap(5,20)('You and your whole family are made out of meat.'));

let arrayObj = [
    {id: 10, first: "John", second: "Smith", age: 24, active: true},
    {id: 11, first: "John", second: "Harlow", age: 41, active: true},
    {id: 12, first: "Sally", second: "May", age: 28, active: false}
];
console.table(arrayObj);