# EVENT MODULE


### Initalize EVENT module
```Javascript
const eventemiter = require("events");
const ee = new eventemmiter();
```

### 1. EMIT
##### 1. Without Prameter
```Javascript
ee.on('start',() => {
    console.log("event Started");
});
ee.emit('start');
```

##### 2. With Prameter
```Javascript
ee.on('start',(start,end) => {
    console.log('started from' + start + ' and '+ end);
});
ee.emit('start',1,100);
```
#### 2. on/addListener
```Javascript
ee.on('start',() => {
    console.log("event Started");
});
ee.emit('start');
```
#### 3. removeListener
```Javascript
const eventemmiter = require('events');
const ee = new eventemmiter();

var fun1 = function(msg){
    console.log("Msg from fun1 : "+msg);
}
var fun2 = function(msg){
    console.log("Msg from fun2 : "+msg);
}

ee.on('myEvent1',fun1);
ee.on('myEvent2',fun2);
ee.on('myEvent1',fun1);
ee.on('myEvent2',fun2);

ee.removeListener('myEvent2',fun2);
ee.removeAllListeners('myEvent1');
ee.emit('myEvent2','LJUniversity');
ee.emit('myEvent1','LJIET');
```
#### 4. removeAllListener
```Javascript
const eventemmiter = require('events');
const ee = new eventemmiter();

var fun1 = function(msg){
    console.log("Msg from fun1 : "+msg);
}
var fun2 = function(msg){
    console.log("Msg from fun2 : "+msg);
}

ee.on('myEvent1',fun1);
ee.on('myEvent2',fun2);
ee.on('myEvent1',fun1);
ee.on('myEvent2',fun2);

ee.removeListener('myEvent2',fun2);
ee.removeAllListeners('myEvent1');
ee.emit('myEvent2','LJUniversity');
ee.emit('myEvent1','LJIET');
```