// 1. Registering multiple eventListerners for diffrent events [myEvent1,myEvent2]
// 2. removing a specific eventListerner [removeListener] for myevent2. 
// 3. removing all the listeners asscocited with myEvent1.[removeAllListener] 
// 4. triggring eventns and observbing which listeners execute. 

const eventemmiter = require('events');
const ee = new eventemmiter();

var fun1 = function(msg){
    console.log("Msg from fun1:"+msg);
}
var fun2 = function(msg){
    console.log("Msg from fun2:"+msg);
}

ee.on('myEvent1',fun1);
ee.on('myEvent2',fun2);
ee.on('myEvent1',fun1);
ee.on('myEvent2',fun2);

ee.removeListener('myEvent2',fun2);
ee.removeAllListener('myEvent1');
ee.emit('myEvent2','LJUniversity');
ee.emit('myEvent1','LJIET');
