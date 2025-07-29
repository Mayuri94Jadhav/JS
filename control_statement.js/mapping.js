const num = [1,2,3,4,5,6,7,8,9,10]
// const newNum = num.map((num) => {  return num + 20})  //.. if u open the scope , u have to take return compalsary
// console.log(newNum);




//  ..... channing in map .......

const newNum = num 
    .map((num) => num *3)
    .map((num) => num-2)
    .filter ((num) => num >= 23)
console.log(newNum);
