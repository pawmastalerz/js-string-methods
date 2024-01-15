const str = "Hello world!";

console.log("-------------------------");
console.log(str.slice(6)); // "world" <-- slices at the index 6
console.log(str.slice(-1)); // "!" <-- starts slicing at a given index starting fron the right
console.log(str.slice(str.length)); // "" <-- returns an empty string
console.log(str.slice(6, 11)); // "world" <-- sets the beginning and the end (end not included)
console.log(str.slice(11, 6)); // "" <-- returns an empty string
console.log(str.slice(-6, -1)); // "world" <-- starts counting from the end
console.log(str.slice(-6, -1)); // "world" <-- starts counting from the end
console.log(str.slice(-6, str.length - 1)); // "world" <-- starts counting from the end for negatives only
console.log(str.slice(6, -1)); // "world" <-- starts counting from the end for negatives only
console.log(str.slice()); // "Hello world!"

console.log("-------------------------");
console.log(str.substring(6)); // "world" <-- starts at the index 6
console.log(str.substring(-1)); // "Hello world!" <-- treats the negative number as 0
console.log(str.substring(str.length)); // "" <-- returns an empty string
console.log(str.substring(6, 11)); // "world" <-- sets the beginning and the end (end not included)
console.log(str.substring(11, 6)); // "world" <-- swaps 6 and 11
console.log(str.substring(-6, -1)); // "" <-- treats both negative values as 0
console.log(str.substring(-6, str.length)); // "Hello world!" <-- treats negative values as 0
console.log(str.substring(6, -1)); // "Hello" <-- treats -1 as 0 and swaps the numbers so they are in order
console.log(str.substring()); // "Hello world!"
