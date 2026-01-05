let students = [
    {
        name :"mayuri",
        marks:89,
    },
    {
        name :"nandu",
        marks :90,
    },
    {
        name :"mayuri jadhav",
        marks : 91,

    },
];

let gpa = students.map((el) => {
    return el.marks/10;

});

// arr.forEach((student) =>{
//     console.log(student.marks);
// });



// filter function //

 let nums = [1,2,3,4,5,6,7,8,45,78];
 let ans = nums.filter((el) => {
    return el %2 == 0;   //  even -> true , odd -> false
 })
