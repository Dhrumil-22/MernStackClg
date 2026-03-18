
# FS MODULE

## Syntax
#### 1. Initialize FS Module
```javascript
var ps = require("fs");
```
#
#### 2. Make Directory
```javascript
ps.mkdirSync("node");
```
#
#### 3. Write File
```javascript
ps.writeFileSync("node/write.txt", "Hello JS!");
```
#
#### 4. Append File
```javascript
ps.appendFileSync("node/write.txt", "Hello JS!");
```
#
#### 5. Read File
##### Method 1:
```javascript
data = ps.readFileSync("node/write.txt");
console.log(data.toString());
```
##### Method 2:
```javascript
data = ps.readFileSync("node/write.txt", "utf-8");
console.log(data);
```
#
#### 6. Rename File
```javascript
ps.renameSync("node/write.txt", "node/ReadWrite.txt");
```
#
#### 7. Copy File
```javascript
ps.copyFileSync("node/ReadWrite.txt", "node/WriteRead.txt");
```
#
#### 8. Delete File
```javascript
ps.unlinkSync("node/ReadWrite.txt");
```
# 
