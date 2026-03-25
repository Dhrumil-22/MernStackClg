const eventemiter = require("events");
const ee =new eventemiter();
ee.on('start',(start,end) => {
    console.log('started from' + start + ' and '+ end);
});
ee.emit('start',1,100);

