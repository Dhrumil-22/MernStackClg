// Write a Node.js program using the path module to take a file path 
// '/user/docs/report.txt' and print:
// The directory name
// The base file name
// The file extension

const pm = require('path');
const url = '/user/docs/report.txt'

console.log("dir name :"+pm.dirname(url))
console.log("basefile name :"+pm.basename(url))
console.log("file ext :"+pm.extname(url))