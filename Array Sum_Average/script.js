let arrayNum=[22,23,24,25,26]
let sum=0;

for(let i=0;i<arrayNum.length;i++){
    sum+=arrayNum[i]; //calculate sum
}
let avg = sum/arrayNum.length; //find average

console.log(`Sum of numbers in array : ${sum} and Average : ${avg}`);