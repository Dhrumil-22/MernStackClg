var u = require("url");
var adder = 'https://user:123@video:8080/video?doc=-01&hL=en#Hello';
var q =u.parse(adder)
console.log(q);