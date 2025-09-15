function add(num1,num2){
    return num1+num2;
}
// const sum = add(3,9);
// console.log(sum);


// ----- callback function ------

function hello(user , callback){
    console.log(`Hello ${user}`);
    callback();
}
hello('arsh' , ()=>{
    console.log(add(2,5))
});

hello('arsh' , function(){
    console.log(add(3,5))
});

function call(){
    console.log(add(4,5));
}
hello('arsh',call);