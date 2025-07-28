const digit= [1,2,3,4,5,6,7,8,9,10]
// const newdigit= digit.filter ( (num) => {
//     return num > 7
   
// }) 
//  console.log(newdigit);


 // using foreach loop

 const newdigit=[]
 digit.forEach ((num) => {
    if (num >7){
        newdigit.push(num)
    }
 })
 console.log(newdigit);
 