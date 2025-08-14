const names ="mayuri jadhav"
console.log(names);

let s=new String("  CSE Student   ");// used as object
console.log(s[4]);
// let newstring=names.slice (0,4)

// console.log(newstring);
// let newstring=names.substring (-3,4)
// console.log(newstring);

let newstring=names.trim('-')
console.log(newstring);
console.log(s.trim());






// String interpolation using (``) which used to avoid complex concatination
console.log(`hello my self ${names} and  I am a ${s}`);





// operation: concationation , substring, 
// split,slice,trim,uppercase,lowercase, length