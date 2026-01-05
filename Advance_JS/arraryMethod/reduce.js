// find max no. among the given array using reduce method . 

//  reduce method return single value ( it take two variables (accumulator , element))

let arr1 =[1,2,3,4,5,6,7,3,7,1];
let max = arr1.reduce ((max,el)=>{
    if (max < el){
        return el;
    } else {
        return max;
    }
});
 console.log( " max no.",max);



//...... every method .....
// return true if every element of array gives true for some function . else return false it (act like AND operator)


// ......  Some method ....
 // return true if some element of arrary fives true for some fun . else return false (act like OR operatior)

//  eg. [1,2,3,4]. some((el) => (el%2 == 0));
//       ---> true

