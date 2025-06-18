//numbers in js
const num=300
// console.log(num);

const balance=new String(100)
// console.log(balance);

console.log(balance.toString().length);
// console.log(balance.tofixed(2));

const OtherNum= 38.870
// console.log(OtherNum.toPrecision(3));// firmat a number of significant digits and returns it as a string.

const hundereds=500000000
// console.log(hundereds.toLocaleString('en-IN'));


//........Math labreary........
/
console.log(Math);
console.log(Math.abs(-4));// absolute value
console.log(Math.round(5.5));
console.log(Math.ceil(4.2));//round lower num
console.log(Math.floor(4.9));// round upper no.

//mostly used 
console.log(Math.random());//always have vlaue in range 0-1 
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10)+1);

const min =10
const max=20

console.log(Math.floor(Math.random()*(max-min +1))+min);







