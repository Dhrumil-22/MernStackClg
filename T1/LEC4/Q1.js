// Read data from the file and short that data in  ascending order using ".sort()"

var q1 = require("fs");
// q1.writeFileSync("Q1.txt","50 -1 99 100 20 0 56 78 59")

data = q1.readFileSync("Q1.txt","utf-8")
console.log(data)

data1 = data.split(" ");
// console.log(data1)

data2 = data1.sort()
// data2 = data1.sort((a,b)=>a-b)
console.log(data2)