// rest allow a function to take an indefinite num of args and bundel them in an array.
function sum(...arg){  //  here rest function is (... arg) 
    return arg.reduce((sum,el) => sum + el);
}


function min ( hello, msg, ...arg){
 console.log(msg);
 return arg.reduce((min,el)=>{
    if(min>el){
        return el;
    } else {
        return min;
    }
 });
}
