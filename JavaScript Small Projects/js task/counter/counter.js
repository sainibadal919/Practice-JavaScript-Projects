let increasebtn=document.querySelector('.Increase')
let decreasebtn=document.querySelector('.Decrease')
let reset=document.querySelector('.reset')
let counter=document.querySelector('.count')
let count=0;

increasebtn.addEventListener(
    "click",
    function(){
        count++;
        counter.innerHTML=count;
    }

)
decreasebtn.addEventListener(
    "click",
    function(){
        count--;
        counter.innerHTML=count;
    }

)
reset.addEventListener(
    "click",
    function(){
        count=0;
        counter.innerHTML=count;
    }

)
