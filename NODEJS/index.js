const http= require('http');
const fs = require('fs');
const home =fs.readFileSync('abes.html');

const myserver = http.createServer((req, res)=>{
    res.statusCode = 200;
    // res.setHeader('content-type','text/plain');
    res.end(home);
    

    
    // console.log('server1');
    // res.end('Hi , this is my first server');

    // if(req.url =='/'){
    // res.end(
    // `<h1>Welcome to Abes Eng College</h1>
    // <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmk1PHONqzC5xU2IbX-SA-zaKv7ND-69Dtg&s">
    // `)
//     }

//     else if(req.url =='/about'){
//     res.end("We are student of ABES");
//     }
//     else if(req.url =='/contact'){
//         res.end("85464646")
//     }
//     else if(req.url =='/class'){
//         res.end(`<h1>class is IT-A </h1>`)
//     }
//     else {
//     res.end("404 page not found");
//     }
});

myserver.listen(3000,()=>console.log('Server is run'));

/*when working on common JS we use REQUIRE
 while working on model JS we use IMPORT
*/

/*
const fs = require('fs');

// fs.writeFileSync("./abes.txt","we are student of ABES");

const result = fs.readFileSync("./abes.txt","utf-8");
console.log(result);
*/


// Next Day --> Async fs = in this we use callback function.

/*
const fs=require('fs');
fs.writeFile("./ad.txt","Code is ready",()=>{ });
*/

/*
const fs=require('fs');
fs.readFile("./ad.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error", err);
    }
    else{
        console.log(result);  
    }
})
*/

// const { log } = require('console');
// const fs=require('fs');
// fs.appendFileSync("./ad.txt"," and i have done it in my own way");

// fs.appendFile("./ad.txt", " Done with callback ", ()=>{ });


// fs.writeFileSync("./a1.txt" , "Hello I'm Arsh Bhandari ");
// fs.writeFileSync("./b1.txt", "");

// // fs.cpSync("./a1.txt","./b1.txt");
// fs.cp("./a1.txt","./b1.txt",(err ,res)=>{
//     if(err){
//         console.log("file not copied");
//     }
//     else{
//         console.log("File Copied");
//     }
// });

// fs.unlinkSync("./ad.txt"); // it has deleted the file.

// fs.renameSync("./a1.txt","./c1.txt");
// fs.renameSync("./c1.txt","./a1.txt");


//------------Operating System---------------

const os = require('os');
// console.log("Platform",os.platform());
// console.log("Userinfo",os.userInfo());
// console.log("CPU",os.arch());

// // if count = 10 it means gb, if count =8 it means mb
// console.log("Free memory", os.freemem());
// console.log("Total memory",os.totalmem());

// console.log("uptime",os.uptime()); // restarting time comes in seconds and chages every time u run.

// console.log("Home Directory",os.homedir());
// console.log("Host Name", os.hostname());

