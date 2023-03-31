let div1=document.querySelector('.div1')
let div2=document.querySelector('.div2')
let div3=document.querySelector('.div3')

let first=document.querySelector('.first')
let second=document.querySelector('.second')
let third=document.querySelector('.third')


div1.addEventListener("click",
function(){
    first.style.display="block"
    second.style.display="none"
    third.style.display="none"
})
div2.addEventListener("click",
function(){
    second.style.display="block"
    first.style.display="none"
   
    third.style.display="none"
})
div3.addEventListener("click",
function(){
    third.style.display="block"
    first.style.display="none"
    second.style.display="none"
   
})
