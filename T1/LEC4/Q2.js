// write a node js script to copy content of one file to another file. 
// data should be fetched from 'source.txt' and insert to 'destination.txt'.
// read data from the destinatin file at the end. 
// perform all this task as async. programming (don't use copy file syntax)

var q2 = require("fs");

// q2.writeFile('source.txt',"hello",(error)=>{
//         if (error) throw error;
//         console.log("file copied");
//     q2.readFile('source.txt',"utf-8",(error,data) =>{
//         if (error) throw error;
//         console.log("data read : "+data);
//         q2.writeFile('destination.txt',data,(error)=>{
//             if (error) throw error  ;
//             console.log("data copied to file");
//             q2.readFile('destination.txt',"utf-8",(error,data1) =>{
//                 if (error) throw error;
//                 console.log("data from destination file : ",data1);
//             });
//         });
//     });
// });

// write a node js script to copy content of one file to another file. 
// data should be fetched from 'source.txt' and insert to 'destination.txt'.
// read data from the destinatin file at the end. 
// perform all this task as async. programming (only use copy file syntax)

q2.writeFile('source.txt',"hello",(error)=>{
    if (error) throw error;
    console.log("file Write");
    q2.copyFile('source.txt','destination.txt',(error)=>{
        if (error) throw error;
        console.log("file copied");
        q2.readFile('destination.txt',"utf-8",(error,data1) =>{
                if (error) throw error;
                console.log("data from destination file : ",data1);
            });
    });
});


