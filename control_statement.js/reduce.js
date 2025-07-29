
const nums = [1,2,3]
const total= nums.reduce(function (acc,currval){
    // console.log((`acc value : ${acc} and current val : ${currval}`));
    return acc + currval
} ,0)     //.. most imp to give 0 here as a starting val of acc value .


//  ..... using Arrow function .....
const myTotal = nums.reduce ( ( acc ,curr) => acc +curr,0)
// console.log(myTotal);



// ..... in Array ....
const courses = [
    {
        itemsName : "js ",
        cost : 3999
    },
    {
        itemsName : "python ",
        cost : 4999
    },

    {
        itemsName : "Data Science ",
        cost : 6999
    },

    {
        itemsName : "C# ",
        cost : 2999
    },

    {
        itemsName : "java ",
        cost : 3999
    },
]

const price = courses.reduce( (acc, item ) => 
    acc + item. cost, 0)
console.log(price);
