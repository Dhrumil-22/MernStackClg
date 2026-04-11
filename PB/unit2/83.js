// Write a nodeJS script to fire an event named calculate which 
// calculates the total marks of 5 subjects about of 25 marks and 
// displays the total marks on console as an output.The calculate event 
// fires another event name percentage which takes total marks as 
// argument and percentage should get displayed in console.


const eventemiter = require("events");
const ee = new eventemiter();

var a = {
    m1 : {
        math : 22,
        coa : 14,
        toc : 24,
        fsd : 20,
        python : 23
    }
}

ee.on('calcultes',(a)=>{
    var b = a.m1.math +a.m1.coa +a.m1.toc +a.m1.fsd +a.m1.python
    console.log(b); 
    ee.emit('percentage',b)
});
ee.on('percentage',(c)=>{
    var d = (c*100)/125
    console.log(d+"%")
})
ee.emit('calcultes',a)