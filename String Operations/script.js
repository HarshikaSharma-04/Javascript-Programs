let str = prompt("Enter a string: ")

// ********** COUNT OF VOWELS ****************

// Convert the string to lowercase 
// (so we don't have to check for both cases)
finalstr = str.toLowerCase();
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (finalstr[i] == 'a' || finalstr[i] == 'e' || finalstr[i] == 'i' || finalstr[i] == 'o' || finalstr[i] == 'u') {
        count++;
    }
}
console.log(`Count of vowels is ${count}`);


// ************* REVERSE OF STRING *************

let reversedstr=str.split("").reverse().join("")

console.log(`Reverse of string is ${reversedstr}`)

//*************** Palindrome Check ************

reversedstr=reversedstr.toLowerCase();

if(finalstr===reversedstr){
    console.log(`${str} is Palindrome.`)
}
else{
    console.log(`${str} is not a Palindrome.`)
}