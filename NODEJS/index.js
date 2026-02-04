const http= require('http');

const myserver = http.createServer((req, res)=>{
    // console.log('server1');
    // res.end('Hi , this is my first server');
});

myserver.listen(8000,()=>console.log('Server is run'))

