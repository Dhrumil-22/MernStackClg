
# FS MODULE

## Syntaxz

# SYNC
#
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
// EXIT
// Async program completed
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

# PATH MODULE


```Javascript
var pm = require("path")
```

#### 1. dirname
```Javascript
path = pm.dirname("C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/T1/LEC5/h1.html");
console.log("1 "+path);
```
#### 2. basename
```Javascript
path1 = pm.basename("C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/T1/LEC5/h1.html");
console.log("2 "+path1);
```
#### 3. extname
```Javascript
path2 = pm.extname("C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/T1/LEC5/h1.html");
console.log("3 "+path2);
```
#### 4. parse
```Javascript
path3 = pm.parse("C:/Users/91940/Downloads/@ COLLAGE/LJIET/SEM4/FSD2/T1/LEC5/h1.html");
console.log(path3);
```
```Javascript

if (path3.ext = '.html')
{
    console.log("5. allowed")
}
else{

    console.log("6. Not allowed")
}
```