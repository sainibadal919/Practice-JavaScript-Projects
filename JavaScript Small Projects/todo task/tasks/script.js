let para1=document.getElementById('para-1');
console.log(para1.textContent);
let changebtn=document.getElementById('change');


changebtn.addEventListener(
    "click",
    ()=>{
        para1.innerHTML="Hi I am Badal Saini"
        changebtn.innerHTML=` Clicked`
    }
    
)
console.log(para1.textContent);