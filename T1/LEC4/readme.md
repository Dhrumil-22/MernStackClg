# FS MODULE

##  SYNTAX

### INITALIZE FS MODULE 
var ps= require("fs");\

### MAKE_DIRECTOPRY
ps.mkdirSync("node")

### WRITE FILE
ps.writeFileSync("node/write.txt","Hello JS!")

### WIRTE MORE CONTENT SO APPEND FILE
ps.appendFileSync("node/write.txt","Hello JS!")

### READ FILE -METHOD 1
data = ps.readFileSync("node/write.txt")
console.log(data.toString());

### READ FILE -METHOD 2
data = ps.readFileSync("node/write.txt","utf-8")
console.log(data);

### REANME FILE
ps.renameSync("node/write.txt","node/ReadWrite.txt");

