 // this is an simple bignner friendly textEditor 
//  just like simple task  which is create by only  using "change event" and "input event".

let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input" , function(){
    console.log(inp.value);
    p.innerText = inp.value;
});
