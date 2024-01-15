const path = `C:\Users\Pawel`;
console.log(path); // "C:UsersPawel"

const pathRaw = String.raw`C:\Users\Pawel`; // <-- a tag function
console.log(pathRaw); // "C:\Users\Pawel"
console.log(`User path: ${pathRaw}`); // "User path: C:\Users\Pawel"
