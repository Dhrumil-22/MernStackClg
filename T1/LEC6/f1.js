const eventemiter = require("events");
const ee =new eventemiter();
ee.on('start',() => {
    console.log("event Started");
});
ee.emit('start');