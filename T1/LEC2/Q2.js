// write one JSON string with name ,age ,date property (yyyy-mm-dd) and print date in indian standerd time

const obj = JSON.parse('{"name":"tree1","course":"intro","Dob":"1996-03-14"}');

console.log(obj.Dob);
a = new Date(obj.Dob);
console.log(a);