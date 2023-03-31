

let images=document.querySelector('.dice-div').childNodes;

console.log(images)
let rollbtn=document.querySelector('.roll-btn')
rollbtn.addEventListener("click",function(){
    let num=Math.floor(Math.random()*6+1);
    
    for(let i=0;i<6;i++){
        if(i===num){
            
            images[i].style.display="block";
        }
        else {
            images[i].style.display="none";
        }
    }
})