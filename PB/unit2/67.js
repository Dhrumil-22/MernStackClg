// // Explain the difference between synchronous and asynchronous 
// // methods in the fs module with an example of each.

// Difference between synchronous and asynchronous methods in fs module:
// Synchronous methods execute line by line and block the execution until the task is completed.
// Asynchronous methods execute non-blocking, allowing other operations to continue while the task completes in the background.
// Example:

// Synchronous:

// const fs = require("fs");

// let data = fs.readFileSync("test.txt", "utf8");
// console.log(data);
// console.log("Done");

// Asynchronous:

// const fs = require("fs");

// fs.readFile("test.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// console.log("Done");
// Key difference (don’t miss this in exam):
// In sync → "Done" prints after file read
// In async → "Done" prints before file read