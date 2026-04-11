//  write a node.js script to write the text 'you are creating a file.' to 'help.txt' file. 
// after that append the text 'you are appending the data.'  to the same file.
// after that read the file and print on console. 
// at last print 'thanks for using async programming.' 
// all oprations are async


var  q3 = require('fs');

q3.writeFile('help.txt','you are creating a file.',(error)=>
        {
            if(error) throw error;
            q3.appendFile('help.txt','you are appending the data.',(error)=>
            {
                if(error) throw error;
                q3.readFile('help.txt','utf-8',(error,data)=>
                {
                    if(error) throw error;
                    console.log(data)
                    console.log('thanks for using async programming.')
                });
            });
        });
 
