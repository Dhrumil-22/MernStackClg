// Write a NodeJS program to create a file named test.txt containing the 
// initial text "Exam attempt ". Then, it should add three more lines to 
// the file: "Entry 1: Pass", "Entry 2: Fail", and "Entry 3: Pass".
// After writing, the program must read the file and count how many 
// times the word "Pass" appears and if the word "Pass" appears three or 
// more times, the program should erase the content inside test.txt.

var fs = require('fs');
fs.writeFileSync('test.txt','Exam attempt.');
fs.appendFileSync('test.txt',' Entry 1: Pass');
fs.appendFileSync('test.txt',' Entry 2: Fail');
fs.appendFileSync('test.txt',' Entry 3: Pass');
var data = fs.readFileSync('test.txt','utf-8');
var count = 0; 
data1 = data.split(" ")
console.log(data1)
for(x of data1){
    console.log(x)
    if (x == 'Pass'){
        count+=1;
    }}
if (count >= 3){
    fs.writeFileSync('test.txt',' '); 
}
console.log(count)

