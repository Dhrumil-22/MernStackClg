//  Wrote a node js script to create two listeners for a comman event 
// 1.print number of events associated with an emmiter 
// 2. remove one on the listener and call remaining listener again 
// 3. also print number of remaining listener

const eventemmiter = require('events');
const ee = new eventemmiter();

var listener1 = function(){
    console.log("Listener 1 Executed");
}
var listener2 = function(){
    console.log("Listener 2 Executed");
}

ee.on('conn',listener1)
ee.on('conn',listener2)

let count = ee.listenerCount('conn')
console.log('count 1 :'+count);

ee.removeListener('conn',listener1)
let count2 = ee.listenerCount('conn')
console.log('count 2 :'+count2);

ee.removeAllListeners('conn')
let count3 = ee.listenerCount('conn')
console.log('count final :'+count3);
ee.emit('conn');
