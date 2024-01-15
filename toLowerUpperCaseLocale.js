const str = "Gdynia";

console.log(str.toLowerCase()); // "gdynia"
console.log(str.toLocaleLowerCase()); // "gdynia" <-- locale defaults to host environment's current locale
console.log(str.toLocaleLowerCase("en-us")); // "gdynia"
console.log(str.toLocaleLowerCase("tr")); // "gdynia"

console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLocaleUpperCase()); // "GDYNIA"
console.log(str.toLocaleUpperCase("en-us")); // "GDYNIA"
console.log(str.toLocaleUpperCase("tr")); // "GDYNİA" <--notice the "İ"
