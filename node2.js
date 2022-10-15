const fs = require("fs");
// const text = fs.readFileSync("dle.txt", "utf-8");

let text = fs.readFileSync("dle.txt", "utf-8");
text = text.replace("Rahul", "Aniket");

console.log("The content of the file is")
console.log(text);

console.log("Creating a new file");
fs.writeFileSync("Aniket.txt", text);