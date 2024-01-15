const str1 = "\u00f1";
const str2 = "\u006e\u0303";

console.log(str1); // ñ
console.log(str2); // ñ <-- the same as str1 at rendering, 'n' + '~'

console.log(str1 === str2); // false

console.log(str1.length); // 1
console.log(str1.codePointAt(0)); // 199

console.log(str2.length); // 2
console.log(str2.codePointAt(0)); // 67
console.log(str2.codePointAt(1)); // 807

console.log(str1.normalize("NFC").length); // 1 <-- Normalize Form C - "Compose"
console.log(str1.normalize("NFD").length); // 2 <-- Normalize Form D - "Decompose"
console.log(str1.normalize("NFKC").length); // 1 <-- Normalize Form D - "K stands for Kompatibility :D"
console.log(str1.normalize("NFKD").length); // 2 <-- Normalize Form D
console.log(str2.normalize("NFC").length); // 1 <-- Normalize Form C
console.log(str2.normalize("NFD").length); // 2 <-- Normalize Form D
console.log(str2.normalize("NFKC").length); // 1 <-- Normalize Form D
console.log(str2.normalize("NFKD").length); // 2 <-- Normalize Form D

// str.normalize() defaults to NFC
console.log(str1 === str2.normalize()); // true

// NFC - Canonical Decomposition, folowed by Canonical Composition
// NFD - Canonical Decomposition
// NFKC - Compatibility Decomposition, folowed by Compatibility Composition
// NFKD - Compatibility Decomposition

// Code point sequences that are defined as CANONICALLY equivalent are assumed to have the same appearance and meaning when printed or displayed.
// Sequences that are defined as COMPATIBLE are assumed to have possibly distinct appearances, but the same meaning in some contexts.
// If two unicode points are canonically equivalent, they are compatible as well.

console.log("----------");
const example = "\u1E9B\u0323";
console.log("\u1E9B\u0323"); // ẛ̣
console.log("\u1E9B"); // ẛ
console.log("\u0323"); // .

console.log([...example.normalize("NFC")]); // [ 'ẛ', '̣' ]
console.log([...example.normalize("NFD")]); // [ 'ſ', '̣', '̇' ]
console.log([...example.normalize("NFKC")]); // [ 'ṩ' ]
console.log([...example.normalize("NFKD")]); // [ 's', '̣', '̇' ]

console.log(example.normalize("NFC")); // ẛ̣
console.log(example.normalize("NFD")); // ẛ̣
console.log(example.normalize("NFKC")); // ṩ
console.log(example.normalize("NFKD")); // ṩ
