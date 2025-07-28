//  const myarr=[0,1,2,3,4,5]
//  const myarr2=["mayuri","rutuja","tejaswini"]
//  console.log(myarr2);
// console.log(myarr[4]);

// //array method
// // myarr.push(6)
// // myarr.pop()
// myarr.unshift(6)
// console.log(`before shift ${ myarr}`);

// myarr.shift()
// console.log(`after shift ${ myarr}`);

// console.log(myarr.includes(9));//return true if inculde in list
// console.log(myarr.indexOf(9));// if not exist in list return -1 as a output

// const newarr =myarr.join()
// console.log(typeof(myarr));
// console.log(typeof(newarr));// convert into string

// // slice,splice diff..
// console.log("A", myarr);

// const mya1=myarr.slice(1,3) // slice not include last digit
// console.log(mya1);// didn't manupulate originsal array 
// console.log("B",myarr);
 
// const mya2=myarr.splice(1,3) // include range of list 
// console.log("C",myarr);/// splice manupulate original array according to slice
// console.log(mya2);


const super_heros=["superman","spiderman","ironman"]
const marvel_heros=["thor","ironman" ,"spiderman"]
// super_heros.push(marvel_heros)// push combine 2 array
// // console.log(super_heros);

// super_heros.concat(marvel_heros)// concat return new array
// console.log(super_heros);

// const all_heros=[...marvel_heros,...super_heros]// "..." is spread operator which  sperad each value of array 
// console.log(all_heros);

const another_array=[1,2,3,[4,5,6],7,8[5,6,[5,4]]]

const useable_anoyher_array= another_array.flat(Infinity)
console.log(useable_anoyher_array);

console.log(Array.isArray("Mayuri"));
console.log(Array.from ("Mayuri"));  // return array from the given string
console.log(Array.from({name:"Mayuri"})); //return empty array becoz key:value pair is a object and aaray convert string not object

let score1=500
let score2=700
let score3=800
console.log(Array.of( score1,score2,score3));


