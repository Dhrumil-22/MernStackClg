const eventemiter = require("events");
const ee =new eventemiter();
//Without parameter
ee.on('start',() => {
    console.log('started');
});
//With parameter
ee.on('start',(start,end) => {
    console.log('started from ' + start + ' and '+ end);
});
ee.emit('start',1,100);

