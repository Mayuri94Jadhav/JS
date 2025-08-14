// generate a radom color

https://stackblitz.com/edit/dom-project-chaiaurcode?file=6-unlimitedColors%2Fchaiaurcode.js,6-unlimitedColors%2Findex.html // refence where i pratice

const randomColor = function (){
  const hex = '0123456789ABCDEFF';
  let color = '#';
  for (let i = 0; i< 6 ; i++){
    color += hex[Math.floor(Math.random() *16)]
  }
  return color;
};
let intervalId 
const startChangingColor = function(){
    if(intervalId== null){
      intervalId = setInterval(changeBgColor,1000);
    }

  function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function(){
   clearInterval(intervalId);
   intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);