const str = "Hello world! World";

console.log(str.search("world")); // 6
console.log(str.search(/world/)); // 6
console.log(str.search(/World/)); // 13
console.log(str.search(/World/i)); // 6
console.log(str.search(/,/)); // -1
