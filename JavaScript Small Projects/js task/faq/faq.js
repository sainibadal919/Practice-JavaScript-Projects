let btn1=document.querySelector('.btn1')
let btn2=document.querySelector('.btn2')
let answer1=document.querySelector('.answer1')
let answer2=document.querySelector('.answer2')
let close1=document.querySelector('.close1')
let close2=document.querySelector('.close2')
btn1.addEventListener("click",function(){
    answer1.style.display="block";
})
btn2.addEventListener("click",function(){
    answer2.style.display="block";
})
close1.addEventListener("click",
function(){
    answer1.style.display="none";
})
close2.addEventListener("click",
function(){
    answer2.style.display="none";
})
