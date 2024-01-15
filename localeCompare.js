console.log("a".localeCompare("b")); // "-1";
console.log("b".localeCompare("a")); // "1";
console.log("a".localeCompare("a")); // "0";

console.log("a".localeCompare("a" /*, locales?, eg. "de, pl etc" */)); // "0";
