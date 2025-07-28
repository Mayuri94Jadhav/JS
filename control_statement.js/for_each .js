// for each loop

const coding =["js", "c++","java","c#" ]
coding.forEach(function (val){
    // console.log(val);
})

//  using Arrow fun

coding.forEach((val,index,arr)=>{
    // console.log(val, index,arr); 
})

const codings =[
    {
        langName : "Python",
        langFile : "py"
    },

 {
        langName : "javascript",
        langFile : "js"
    },
     {
        langName : "java",
        langFile : "java"
    },
];
codings.forEach((item) =>{
    console.log(item.langName);
    
});