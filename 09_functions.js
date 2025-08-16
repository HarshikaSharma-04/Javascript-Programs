function addNumbers(a,b){
    return a+b;
}

console.log(addNumbers(9,5));

function greet(name){
    console.log(`hello, ${name} `)
}

greet("harshika");

function message(){
    return `You are on console`;
}

console.log(message());

let user={
    name:"Harshika",
    id:345
}
function takeobject(obj){
    return `Hey,${obj.name}.Your id is ${obj.id}`;
}
// console.log(takeobject(user));
console.log(takeobject({
    name:"himanshu",
    id:456
}));

let arr=[200,400,600,800]
function returnarrayvalue(anyarr){
    return anyarr[2];
}
// console.log(returnarrayvalue(arr));
console.log(returnarrayvalue([200,400,600,800]));



