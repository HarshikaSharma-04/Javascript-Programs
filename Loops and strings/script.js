// Create Username-Strings 

let firstname="Harshika";

let username= "@" + firstname + firstname.length;

console.log(`Username : ${username}`);

// Print table -Loop

let n=prompt("Enter number for printing table :");

console.log(`Table of ${n} \n`);

for(let i=1;i<=10;i++){
    console.log(`${n} X ${i} = ${n*i} \n`);
}