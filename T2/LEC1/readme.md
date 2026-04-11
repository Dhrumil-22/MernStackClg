
# EXPRESS JS

##  WORK
```javascript
// IT IS FRAMEWORK WHICH WORKS ON TOP ON THE "NODE"
```
```javascript
// IT USED TO CREATE SERVER AND API'S IN SIMPLEST WAY
```
```javascript
// MAIN THING IN EXPRESS IS ROUNTING AND MIDDLWARE 
```
#
#### 2. INSTALLATION
```javascript
1. npm init
// package name: (fsd2) 
// version: (1.0.0) 
// description: T2 phase
// entry point: (index.js) 
// test command: 
// git repository: (https://github.com/Dhrumil-22/MernStackClg.git) 
// keywords: 
// author: 
// license: (ISC) 
// type: (commonjs) 
// About to write to C:\Users\91940\Downloads\@ COLLAGE\LJIET\SEM4\FSD2\package.json:

// {
//   "name": "fsd2",
//   "version": "1.0.0",
//   "description": "T2 phase",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "repository": {
//     "type": "git",
//     "url": "git+https://github.com/Dhrumil-22/MernStackClg.git"
//   },
//   "author": "",
//   "license": "ISC",
//   "type": "commonjs",
//   "bugs": {
//     "url": "https://github.com/Dhrumil-22/MernStackClg/issues"
//   },
//   "homepage": "https://github.com/Dhrumil-22/MernStackClg#readme"
// }
// Is this OK? (yes) yes

2. npm install express
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

