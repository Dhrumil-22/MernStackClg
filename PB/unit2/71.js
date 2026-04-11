// Write a Node.Js program to sort an interger array, where all element 
// are available in a file separated by white space. Print sorted array 
// elements on node.js server.

var fs = require("fs");
fs.writeFileSync("./71.txt","70 80 4 0 56 12 11 23 82")
data = fs.readFileSync("71.txt",'utf-8')
console.log(data)
data1 = data.split(" ");
var f1 = data1.sort()
console.log(f1)



