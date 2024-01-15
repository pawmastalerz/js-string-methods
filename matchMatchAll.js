const str = "Hello world! World world";

console.log(str.match("world")); // [ 'world', index: 6, input: 'Hello world! World', groups: undefined ]
console.log(str.match(/world/)); // [ 'world', index: 6, input: 'Hello world! World', groups: undefined ]
console.log(str.match(/world/g)); // [ 'world', 'world' ]
console.log(str.match(/world/gi)); // [ 'world', 'World', 'world' ]
console.log(str.match(/,/gi)); // null <-- not -1!

console.log(...str.matchAll("world"));
// [
//     'world',
//     index: 6,
//     input: 'Hello world! World world',
//     groups: undefined
// ] [
//     'world',
//     index: 19,
//     input: 'Hello world! World world',
//     groups: undefined
// ]
console.log(...str.matchAll(/world/gi));
// [
//     'world',
//     index: 6,
//     input: 'Hello world! World world',
//     groups: undefined
// ] [
// 'World',
// index: 13,
// input: 'Hello world! World world',
// groups: undefined
// ] [
//     'world',
//     index: 19,
//     input: 'Hello world! World world',
//     groups: undefined
// ]

// MUST BE CALLED WITH A GLOBAL REGEX!
