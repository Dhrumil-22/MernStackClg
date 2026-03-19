// json processing
// write a node js program using sync. fs module to manage student data. 
// 1.create a dir. named "StudentData" 
// 2.insdie the ditr crate the json file "students.json" containg student record with 'name' and 'marks' [array of 3 objects.] 
// 3. read the json file.
// 4. dispaly students whose score more than 75 marks.
// 5. delete file and folder.



var q1 = require("fs");
// q1.mkdirSync("StudentData");

let student = [
    {'name':'ABC','marks':80},
    {'name':'DEF','marks':90},
    {'name':'GHI','marks':60}
];

q1.writeFileSync("StudentData/students.json",JSON.stringify(student));

let data = q1.readFileSync("StudentData/students.json","utf-8");
data1 = JSON.parse(data);
console.log(data1);

for (s of data1)
{
    if(s.marks>75)
    {
        console.log(s.name+" "+s.marks)
    }
}