// function main(cb)
// {
//     console.log("Task 1 completed")
//     setTimeout(function(){
//         cb("Opration completed");
        
//     },2000);
//     console.log("Task 2 completed")
// }
// function callback_fur(result){
//     console.log('Result : '+result);
// }
// main(callback_fur);

//==================3 methods=====================

// const message = function(){
//     console.log("Print after 3 seconds..")
// }
// console.log("....")
// setTimeout(message,3000)

// setTimeout(function(){
//     console.log("normal via making funcion in set timout funtion")
// },3000)

// setTimeout(()=> {
//     console.log("fet arr func.")
// },3000);

// const me1 = function(){
//     console.log("1")
// }
// const me2 = function(){
//     console.log("2")
// }
// const me3 = function(){
//     console.log("3")
// }
// console.log("....")
// setTimeout(me1,1000)
// setTimeout(me2,2000)
// setTimeout(me3,3000)

setInterval(() => {
    console.log("Hello")
}, 1000);