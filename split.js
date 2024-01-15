const str = "Hello world!";

console.log(str.split()); // [ 'Hello world!' ]
console.log(str.split(" ")); // [ 'Hello', 'world!' ]
console.log(str.split("")); // [ 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!' ]
console.log(str.split("o")); // [ 'Hell', ' w', 'rld!' ]
console.log(str.split("o", 1)); // [ 'Hell' ]
console.log(str.split("o", 0)); // []
