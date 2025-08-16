const num=200000

//console.log(num.toString().length) //num->string->length

const num2=678.9867

// console.log(num2.toPrecision(5))
// console.log(num2.toFixed(2))
// console.log(Number.MAX_VALUE)

//console.log(num.toExponential())

const num3=20000000
//console.log(num3.toLocaleString('en-IN')) //converts number with commas n indian standards(en-IN)

//+++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.ceil(56.78))
// console.log(Math.floor(89.67))
// console.log(Math.min(56,78,34,-23,-78));
// console.log(Math.max(56,78,34,-23,-78));
// console.log(Math.round(78.67));


console.log(Math.floor(Math.random()*10)+ 1)
//random=>[0,1)
//*10 & Math.floor=>[0,10)=>[0,9)
// + 1 =>[1,10]

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min); //[10,20] (+1)=>max (20) will be inclusive.




