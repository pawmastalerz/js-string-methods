const str = "Hello world! world undefined";

console.log("-------------------------");
console.log(str.indexOf("world")); // 6 <-- starts looking from the start
console.log(str.indexOf("World")); // -1 <-- not found
console.log(str.indexOf("world", 7)); // 13 <-- found after the first "world"
console.log(str.indexOf("world", -1)); // 6 <-- a negative number is still considered as the beginning of the string
console.log(str.indexOf("")); // 0 <-- empty strings are considered to be everywhere across the string characters
console.log(str.indexOf()); // 19 <-- this will look for "undefined" in the string

console.log("-------------------------");
console.log(str.lastIndexOf("world")); // 13 <-- starts looking from the end
console.log(str.lastIndexOf("World")); // -1 <-- not found
console.log(str.lastIndexOf("world", 7)); // 6 <-- found before the second "world"
console.log(str.lastIndexOf("world", -1)); // -1 <-- a negative number is considered as the beginning of the string, there is no 'world' before it
console.log(str.lastIndexOf("")); // 28 <-- empty strings are considered to be everywhere across the string characters
console.log(str.lastIndexOf()); // 19 <-- this will look for "undefined" in the string
