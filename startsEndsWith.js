const str = "Hello, world!";

console.log(str.startsWith()); // false
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("world!")); // false

console.log(str.endsWith()); // false
console.log(str.endsWith("ld!")); // true
console.log(str.endsWith("Hello", 5)); // true
