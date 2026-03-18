var ps = require("fs");

// ps.writeFileSync('test.txt',"hello");
// console.log("File created ");
// console.log("End");

ps.writeFile('test1.txt','hello',function(error)
        {
            if(error)
            {
                console.log(error);
            }
            else{
                console.log("Async program completed");
            }
        })
console.log("EXIT")

