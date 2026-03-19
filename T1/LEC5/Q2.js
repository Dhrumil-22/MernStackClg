// create json object which contains array of objects. 
// calcilate parimeter of squre and parimeter of circle by using side adn diameter value . 
// write object as well as parimeter values in shape.txt.
q2 = require("fs");
let shape = [
    {'name':'circle','diameter':10},
    {'name':'squre','side':8}
];


q2.writeFileSync("shape.txt",JSON.stringify(shape));

let data = q2.readFileSync("shape.txt","utf-8");
data1 = JSON.parse(data);
var peri_cir = (data1[0].diameter)*3.14
var peri_sqr = (data1[1].side)*4
console.log(peri_cir)
console.log(peri_sqr)

q2.appendFileSync("shape.txt",JSON.stringify("peri of cir : "+peri_cir));
q2.appendFileSync("shape.txt",JSON.stringify("peri of sqr : "+peri_sqr));

