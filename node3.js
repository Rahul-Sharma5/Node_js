// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs");
fs.readFile("dle.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is a message");
