const str = "Hello world!";

console.log(str.includes()); // false
console.log(str.includes("world")); // true
console.log(str.includes("World")); // false
console.log(str.includes("world", 0)); // true
console.log(str.includes("world", 10)); // false <-- the position is too great
console.log(str.includes("world", -1)); // true <-- treats negatives as 0
