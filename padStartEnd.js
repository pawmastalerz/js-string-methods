const str = "Hello";

console.log(str.padStart()); // "Hello"
console.log(str.padStart(7)); // "  Hello"
console.log(str.padStart(12, "foo")); // "foofoofHello"
console.log(str.padStart(7, "foobar")); // "foHello"
console.log(str.padStart(2)); // "Hello"

console.log(str.padEnd()); // "Hello"
console.log(str.padEnd(7)); // "Hello  "
console.log(str.padEnd(12, "foo")); // "Hellofoofoof"
console.log(str.padEnd(7, "foobar")); // "Hellofo"
console.log(str.padEnd(2)); // "Hello"
