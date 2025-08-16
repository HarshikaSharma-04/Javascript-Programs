let username="Harshika"
let anotheranme="Pihu"

anothername=username //copy of username is passed to anothername
anothername="Sharma"

// console.log(anothername);//Sharma
// console.log(username);//Harshika

let one={
    email:"harshika@google.com"
}
let another="pihu@google.com"

console.log(another);

another=one //reference of one is passed to another

console.log(one.email);
console.log(another.email);

another.email="sharma@google.com"

console.log(one.email);
console.log(another.email);






