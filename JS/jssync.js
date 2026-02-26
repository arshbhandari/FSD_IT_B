function register(){
    wait();
    console.log('register end');
}

function sendEmail(){
    wait();
    console.log('send email end');
}

function login(){
    wait();
    console.log('login end');
}
function getData(){
    wait();
    console.log('get data end');
}
function displayData(){
    wait();
    console.log('display data end');
}
register()
sendEmail()
login()
getData()
displayData()

function wait(){
    const ms = new Date().getTime()+5000;
    while(new Date().getTime()<ms)
    {}
}

console.log('call other function');


