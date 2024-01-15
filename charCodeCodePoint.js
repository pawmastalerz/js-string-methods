const str = "Hi 😀";
console.log(str.length); // 5 <-- Not 4! The emoji is represented with 2 UTF 16-bit code unit!

// charCodeAt:
// UTF-16 ==> 0 - 65535
console.log("-------------");
console.log(str.charCodeAt(0)); // 72
console.log(str.charCodeAt()); // 72
console.log(String.fromCharCode(72)); // H
console.log(str.charCodeAt(2)); // 32
console.log(str.charCodeAt(3)); // 55357 <-- broken character
console.log(String.fromCharCode(55357)); // �
console.log(str.charCodeAt(4)); // 56832 <-- broken character
console.log(String.fromCharCode(56832)); // �
console.log(str.charCodeAt(5)); // NaN

// codePointAt:
// Unicode ==> 0 - 1114111
console.log("-------------");
console.log(str.codePointAt(0)); // 72
console.log(str.codePointAt()); // 72
console.log(String.fromCodePoint(72)); // H
console.log(str.codePointAt(2)); // 32
console.log(str.codePointAt(3)); // 128512 <-- sees the emoji as a single unit
console.log(String.fromCodePoint(128512)); // 😀 <-- works!
console.log(str.codePointAt(4)); // 56832 <-- the same as in charCodeAt
console.log(String.fromCodePoint(56832)); // � <-- broken character
console.log(str.codePointAt(5)); // undefined

console.log("-------------");
console.log(String.fromCharCode(72, 105, 32, 55357, 56832)); // "Hi 😀"
console.log(String.fromCodePoint(72, 105, 32, 128512, 56832)); // "Hi 😀�"
