// Write a script to define two JSON objects named as “division1” and 
// “division2” having an array to store names of students. These name 
// should be sorted alphabetically in the object and should be be written 
// to the file. At last, both division objects should be visible with names 
// sorted alphabetically in file.
const fs = require("fs");
div1 = [
    {'name':'Mahek'},
    {'name':'Dhrumil'},
    {'name':'Akshat'},
    {'name':'Ridham'},
    {'name':'Devang'}
]
div2 = [
    {'name':'tumbadiya'},
    {'name':'vaghela'},
    {'name':'chauhan'},
    {'name':'bhatti'},
    {'name':'bhuriya'},
]
var data1 = div1.sort((a,b)=>{   
if (a.name>b.name) return 1
if (b.name>a.name) return -1
return 0});
var data2 = div2.sort((a,b)=>{   
if (a.name>b.name) return 1
if (b.name>a.name) return -1
return 0});
console.log(data1)
console.log(data2)
var c = "div1:"+ '\n';
for (x of data1){
    c +=  x.name + '\n' ;
}
c+="div2:"+ '\n'
for (x of data2){
    c +=  x.name + '\n' ;
}
fs.writeFileSync("./31.txt",c)