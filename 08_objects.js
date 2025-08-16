const sym=Symbol("key")

const jsuser={
    name:"Harshika" ,
    "full_name":"harshika sharma",
    [sym]:"keyvalue",
    age:20,
    salary:2000000
}
// console.log(jsuser["name"]);
// console.log(jsuser["age"]);
// console.log(jsuser.full_name);
// console.log(jsuser[sym]);

// Object.freeze(jsuser);
jsuser.name="Kanhaji"
// console.log(jsuser["name"]);

// console.log(jsuser);

console.log(Object.keys(jsuser));
console.log(Object.values(jsuser));
console.log(Object.entries(jsuser));
console.log(jsuser.hasOwnProperty("full_name")) //to check if object has certain property

jsuser.greeting=function(){
    console.log(`Hello World ${this.full_name}`);  
}
jsuser.greeting();

// console.log(jsuser.greeting());//undefined

const obj={
    username:{
        name:{
            first:"harshika",
            last:"sharma"
        }
    }
}

console.log(obj.username.name.first);

const first={a:"heelo", b:"harshika"}
const sec={b:"yesso", d:"heti"}

// const combine={first,sec}
//const combine=Object.assign({},first,sec)
const combine=Object.assign(first,sec);

console.log(combine);

// const spread={...first,...sec}
// console.log(spread);
console.log(first);

console.log(combine==first)

//Array of objects

const arrobj=[
    {
        id:56,
        age:24
    },
    {
        salary:7000000,
        name:"harshika"
    }
]

console.log(arrobj[0].id) 






