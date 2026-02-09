// const http= require('http');

// const myserver = http.createServer((req, res)=>{
//     // console.log('server1');
//     // res.end('Hi , this is my first server');
//     if(req.url =='/'){
//     res.end(
//     `<h1>Welcome to Abes Eng College</h1>
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmk1PHONqzC5xU2IbX-SA-zaKv7ND-69Dtg&s">
//     `)
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
// });

// myserver.listen(3000,()=>console.log('Server is run'));

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

const fs=require('fs');
fs.writeFile("./ad.txt","Code is ready",()=>{ });