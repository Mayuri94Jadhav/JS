let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("code=", event.code); // arrowUp(u), arrowDown(d),arrowLeft(l),arrowRight(r)
    if (event.code == "keyU"){
        console.log("char move up");
    } else if (event.code =="keyD"){
        console.log("char move down");
    }else if (event.code =="keyL"){
        console.log("char move left");
    }else if (event.code =="keyR"){
        console.log("char move right");
    }
});