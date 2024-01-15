const str = "Hello world!";

console.log(str.repeat()); // ""
console.log(str.repeat(0)); // ""
console.log(str.repeat(1)); // "Hello world!"
console.log(str.repeat(2)); // "Hello world!Hello world!"
console.log(str.repeat(2.6)); // "Hello world!Hello world!"
console.log(str.repeat(-1)); // Error
