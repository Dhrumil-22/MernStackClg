var pm = require("path")


path = pm.dirname("C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/T1/LEC5/h1.html");
console.log("1 "+path);
path1 = pm.basename("C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/T1/LEC5/h1.html");
console.log("2 "+path1);
path2 = pm.extname("C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/T1/LEC5/h1.html");
console.log("3 "+path2);
path3 = pm.parse("C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/T1/LEC5/h1.html");
console.log(path3);

if (path3.ext = '.html')
{
    console.log("5. allowed")
}
else{

    console.log("6. Not allowed")
}