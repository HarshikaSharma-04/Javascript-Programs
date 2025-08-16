const myDate=new Date();
//Date is an object

// console.log(myDate.toString())
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(`UTC String is ${myDate.toUTCString()}`);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate);

//Month starts with 0 (Jan), 1 (Feb)...

const myCreatedDate=new Date(2025,7,25,6,47,38);
// console.log(myCreatedDate.toLocaleString());

const myAnotherDate=new Date("2025-05-26") //yy-mm-dd
//console.log(myAnotherDate.toLocaleString())

const myOtherDate=new Date("05-26-2025") //mm-dd-
console.log(myOtherDate.toString())
// console.log(myOtherDate.toJSON());

let mytime=Date.now()
console.log(mytime);
console.log(myOtherDate.getDay());//starts from 1
console.log(myOtherDate.getMonth()+1) //+1 to start january=>1
console.log(`${myOtherDate.getMonth()+1} and the time is`)

console.log(Math.floor(Date.now()/1000)); //miliseconds=>seconds

//customize date format using locale string
console.log(myOtherDate.toLocaleString('default',{
    weekday:"long"
}));
