const str = "Hello, world! World world";

console.log(str.replace("world", "Earth")); // "Hello, Earth! World world"
console.log(str.replace("world", (match) => match.toUpperCase())); // "Hello, WORLD! World world"
console.log(str.replace(/world/g, "Earth")); // "Hello, Earth! World Earth"
console.log(str.replace(/world/gi, "Earth")); // "Hello, Earth! Earth Earth"

console.log(str.replaceAll("world", "Earth")); // "Hello, Earth! World Earth"
console.log(str.replaceAll("world", (match) => match.toUpperCase())); // "Hello, WORLD! World WORLD"
console.log(str.replaceAll(/world/g, "Earth")); // "Hello, Earth! World Earth"
console.log(str.replaceAll(/world/gi, "Earth")); // "Hello, Earth! Earth Earth"
// REPLACEALL MUST BE CALLED WITH GLOBAL REGEX
