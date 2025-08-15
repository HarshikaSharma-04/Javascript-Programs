// Get current year
let current_year=new Date().getFullYear();

let birth_year=prompt("Enter your birth year in format YYYY : ")

let current_age=(current_year)-(birth_year);

if(current_age<18){
    console.log("Not eligible to vote!")
}
else if(current_age>=18 && current_age<65){
    console.log("Eligible to vote!")
}
else {
    console.log("You are a Senior Citizen.")
}