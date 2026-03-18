
# FS MODULE

<<<<<<< HEAD
## Syntaxz

# SYNC
#
=======
## Syntax
>>>>>>> f569d12df44d4458dd17143c1bda0bf180001cbe
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
<<<<<<< HEAD

# ASYNC
#
#### 1. Write file
```javascript
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
# EXIT
# Async program completed
```
#
#### 2. Copy File
```javascript
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
```
=======
>>>>>>> f569d12df44d4458dd17143c1bda0bf180001cbe
