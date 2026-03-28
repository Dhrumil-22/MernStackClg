// Write a Node js program to parse a URl and calculate the avrage of theree numbers passed as Query parameter. 
var u = require('url');
var adder  = "http://localhost:8000/test?m1=50&m2=60&m3=70";
var ans = u.parse(adder,true);
console.log(ans)
var m1 = parseInt(ans.query.m1) 
var m2 = parseInt(ans.query.m2) 
var m3 = parseInt(ans.query.m3) 
var avg = (m1+m2+m3)/3

console.log(avg)
