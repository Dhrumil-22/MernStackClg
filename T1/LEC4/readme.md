FS MODULE
Syntax
1. Initialize FS Module
var ps = require("fs");
2. Make Directory
ps.mkdirSync("node");
3. Write File
ps.writeFileSync("node/write.txt", "Hello JS!");
4. Append File
ps.appendFileSync("node/write.txt", "Hello JS!");
5. Read File

Method 1:

data = ps.readFileSync("node/write.txt");
console.log(data.toString());

Method 2:

data = ps.readFileSync("node/write.txt", "utf-8");
console.log(data);
6. Rename File
ps.renameSync("node/write.txt", "node/ReadWrite.txt");
7. Copy File
ps.copyFileSync("node/ReadWrite.txt", "node/WriteRead.txt");
8. Delete File
ps.unlinkSync("node/ReadWrite.txt");
