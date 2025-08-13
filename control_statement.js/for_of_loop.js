// for of 


const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}

/*Maps : the maps is a object holds key-value pairs 
and remember the original insertion order of the keys .
"RETURN UNIQUE VALUES" 
   " maps are not irreateable in for in loop "*/

const  map = new Map()
map.set("IN", "India")
map.set("fr", " france")

for (const [keys, value] of map) {
console.log( keys , ":", value );
    
}
// note: using Object for of are not irreateable 
