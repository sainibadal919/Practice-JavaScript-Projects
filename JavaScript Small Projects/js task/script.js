let openbtn=document.querySelector('.btn')
let closebtn=document.querySelector('.closediv')
let modal=document.querySelector('.modaldiv')
openbtn.addEventListener(
    "click",
    function(){
        modal.style.display="flex"
    }
)
closebtn.addEventListener("click",function(){
    modal.style.display="none"
})