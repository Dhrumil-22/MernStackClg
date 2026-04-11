//write th enode js program using a events module to stimulte a seq. of events 
// 1. when a "connection" event occurs , print 'conncteion succesfully' and trigger a data recived event.
// 2. when the data receivrd event oocur , print 'data reciedved successfully' 
// 3. finnaly print 'thanks' at the end of execution.


const eventemmiter = require("events");
const ee = new eventemmiter();

ee.on('connection', () =>{
    console.log("conncteion succesfully");
    ee.emit('data recived');
})
ee.on('data recived',()=>{
    console.log('data reciedved successfully');
})
ee.emit('connection');
console.log('thanks');

