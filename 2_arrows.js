const user={
    name:"Harshika",
    welcome:function(){
        console.log(`${this.name}, welcome to website`);   
        console.log(this);
    }  
}
user.welcome();
user.name="Himesh";
user.welcome()

console.log(this);

// function proto(){
//     console.log(this);  
// }
// proto()
const chai=()=>{
    name="Society"
    console.log(this);
    return name;
    
}
// console.log(chai());

const addNum=(a,b)=>{
    return a+b;
}
console.log(addNum(3,4));

const addnum=(a,b)=>(a+b)

console.log(addnum(4,5))

const obj=()=>({username:"Harshika"})//return object

console.log(obj());
