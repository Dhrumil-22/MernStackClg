// Write a program to demonstrate various methods of path module in 
// Node.js.
const pm = require("path");
console.log(pm.basename("C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/PB/unit2/70.js"))
console.log(pm.extname("C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/PB/unit2/70.js"))
console.log(pm.dirname("C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/PB/unit2/70.js"))
pm2 = pm.parse("C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/PB/unit2/70.js")
console.log(pm2)
if (pm2.ext == ".js"){
    console.log("ok")
}
else{
    console.log("not ok")
}
