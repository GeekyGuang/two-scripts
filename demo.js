#!/usr/bin/env node

var fs = require('fs')

 var dirName = process.argv[2] 
 if (fs.existsSync(dirName)) {
    console.log("文件已存在")  
 } 
 else {
    fs.mkdirSync("./" + dirName) 
    process.chdir("./" + dirName) 
    fs.mkdirSync('css') 
    fs.mkdirSync('js') 
   
    fs.writeFileSync("./index.html", "<!DOCTYPE>\n")
    fs.appendFileSync("./index.html", "<title>Hello</title>\n")
    fs.appendFileSync("./index.html", "<h1>Hi</h1>\n")
   
    fs.writeFileSync("css/style.css", " h1{color: red;}\n")
   
    fs.writeFileSync("./js/main.js", 'var string = "Hello World"\n')
    fs.appendFileSync("./js/main.js", "alert(string)\n")
 }


 process.exit(0)