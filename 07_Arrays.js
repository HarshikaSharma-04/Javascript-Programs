const arr=[2,5,6,78,80];
const arr2=[7,8,9,2,3,4];
const arr3=[56,57,58,59,60];

//arr.push(arr3);
// console.log(arr);
const arr4=arr.concat(arr2,arr3);
// console.log(arr4);


// const newarr=arr.concat(arr2);
// console.log(arr);
// console.log(newarr.join()); //coverts array into string type

const newarr=[...arr,...arr2,...arr3];
// console.log(newarr);

const mixed_arr=[4,5,6,7,[23,24,25],[45,46,47,[29,30,32]]];

const unmixed_arr=mixed_arr.flat(Infinity);
// console.log(unmixed_arr);

console.log(Array.from("Harshika Sharma"));
console.log(Array.isArray("Harshika Sharma"));

console.log(Array.isArray([6,2,3,7,8]));
console.log(Array.from({name:"Harshika Sharma"}));//interesting

console.log(arr.at(-2));

let a=4;
let b=5;
let c=6;

console.log(Array.of(a,b,c));




