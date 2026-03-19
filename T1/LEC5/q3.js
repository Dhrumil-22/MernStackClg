// write a node js script that performed the following operation 
// using path module and Async. fs module.
// 1. From a fiven existing file path(LJ/sample.txt),
//    extract the directory name.
// 2. Create the extracted directory inside and existing folder.
// 3. Extract the file name and create that file 
//    inside the newly created directory
//    and write some data.
// 4. Copy the content of this file to another file(temp.txt).
// 5. Delete the Original the file after copy the content     


var pm = require("path")
var ps = require("fs")

path = pm.dirname("C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/T1/LEC5/LJ/sample.txt");
path2 = pm.basename("C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/T1/LEC5/LJ/sample.txt");

ps.mkdir(path,(error)=>{
    if (error) throw error;
    console.log("Folder created");

    ps.writeFile(path+"/"+path2,"this is Q3",(error)=>{
        if (error) throw error;
        console.log("file created");

        ps.copyFile(path+"/"+path2,path+"/temp.txt",(error)=>{
            if(error)throw error;
            console.log("file copied");

            ps.unlink(path+"/"+path2,(error)=>{
                if(error) throw error;
                console.log("file Deleted");
            });
        });
    });
});