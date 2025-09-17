function register(){
    setTimeout(()=>{
        console.log('register end');
    },5000)
}

function sendEmail(){
    setTimeout(()=>{
       console.log('send email end');
    },5000)
}

function login(){
    setTimeout(()=>{
        console.log('login end');
    },5000)
}
function getData(){
    setTimeout(()=>{
        console.log('get data end');
    },5000)
}
function displayData(){
    setTimeout(()=>{
        console.log('display data end');
    },5000)
}
register()
sendEmail()
login()
getData()
displayData()

console.log('call other function');


