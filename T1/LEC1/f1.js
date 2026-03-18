// // var a = {
// //     "name":"Test",
// //     "age":25,
// // }
// // console.log(a)

// ============================================================================================

// // const data = require('./f1.json');
// // console.log(data)

// ============================================================================================

// // let obj = JSON.parse('{"var1":"LJ","var2":"university"}');

// // let ob = ('{"var1":"LJ","var2":"university"}');

// // console.log(obj)
// // console.log(ob.var1 +" "+ob.var2)//string formate 
// // console.log(obj.var1 +" "+obj.var2)//converted object formate

// // let obj2 = JSON.stringify(obj);//converted string formate
// // console.log(obj2)

// ============================================================================================

let person = {
    name : "fsd",
    age : 25,
    city : "ahmedabad"
}

//method to chnage ,access and update the key and value
console.log(person)

// dot method
person.age = 32;
console.log(person)

// squre bracket method
person['city'] = 'Rajkot'
console.log(person)

// varibale method
let key = "name";
person[key] = "python";
console.log(person)

// if there is no key in the data and want to add then this,
person.marks = 30;
console.log(person)
// ============================================================================================










