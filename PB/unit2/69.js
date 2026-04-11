// Write node.js script to copy content of one file to the other file. data 
// should be fetched from source.txt and insert to destination.txt

var fs = require("fs");
fs.writeFileSync("./source.txt","my name is dhrumil and mahek is my best frnd.")
var a = fs.readFileSync("source.txt",'utf-8')
console.log(a)
fs.writeFileSync("./destination.txt",a)

