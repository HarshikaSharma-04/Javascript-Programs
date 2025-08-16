c=90
a=90
 // console.log(a);
 // console.log(b);
if(true){
let a=2
const b=9
// var c=5
// console.log(`inner: ${a}`) 
}
// console.log(a);

function one(){
    const username="Harshika"
    console.log(username);
    
    function two(){
        const id=456
        console.log(id)
        console.log(username);
        
    }
two()

}
// one()
console.log(addNum(8));

function addNum(num){
    return num+2;
}

const fun_value=function(num){
    return num+3
}
console.log(fun_value(6));  
