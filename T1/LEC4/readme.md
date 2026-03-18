# FS MODULE

##  SYNTAX

### 1. INITALIZE FS MODULE 
var ps= require("fs");  

### 2. MAKE_DIRECTOPRY
ps.mkdirSync("node")

### 3. WRITE FILE
ps.writeFileSync("node/write.txt","Hello JS!")

### 4. WIRTE MORE CONTENT SO APPEND FILE
ps.appendFileSync("node/write.txt","Hello JS!")

### 5.1 READ FILE -METHOD 1
data = ps.readFileSync("node/write.txt")
console.log(data.toString());

### 5.2 READ FILE -METHOD 2
data = ps.readFileSync("node/write.txt","utf-8")
console.log(data);

### 6. REANME FILE
ps.renameSync("node/write.txt","node/ReadWrite.txt");

### 7. COPY FILE
ps.copyFileSync("node/ReadWrite.txt","node/WriteRead.txt");

### 8. DELETE FILE
<small>ps.unlinkSync("node/ReadWrite.txt");</small>

