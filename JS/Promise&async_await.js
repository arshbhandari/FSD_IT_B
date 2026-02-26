function register(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
       console.log('register end');
       resolve();
    },5000)
    })
    
    
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       console.log('send email end');
       resolve();
    },3000)
    })
     
    
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
       console.log('login end');
       resolve();
    },1000)
    })
    
    
}
function getData(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log('get data end');
        resolve();
    },2000)
    })
    
   
}
function displayData(){
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
        console.log('display Data End');
        resolve();
    },4000)
    })
     
    
}

// ***** Promise ******

  register()
  .then(sendEmail)
  .then(login)
  .then(getData)
  .then(displayData)
  .catch((err)=>{console.log('Error: '+err)})
  .finally(()=>{console.log('inside finally')}) 
  
// ***** Async and Await  ********

// async function f1(){
//     try{
// await register();
// await sendEmail();
// await login();
// await getData();
// await displayData();
//     }
//     catch(err){
//         console.log('Error :'+err);
//     }
// }
// f1();
console.log('call other application');