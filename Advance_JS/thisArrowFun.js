const student ={
    name: "mayuri",
    marks:88,
    prop : this,   // global scope
    getName : function(){
        console.log(this);
        return this.name;
    },
    getInfo1 : function(){
        setTime(()=>{
            console.log(this); // student
        },2000);
    },
    getInfo2: function () {
        setTimeout(function() {
            console.log(this); // window
        },2000);
        },
    }; 


// .... note....
// 1. "this" : in normaal function  "this" use to call the current  fun prop .
// 2. "this " : in arrow function use to  call the parent scope that is lexical  of the fun. 
    
