// let tasklist=document.getElementsByClassName('task2');
// console.log(tasklist)
// let changebtn=document.getElementById('btn')


// changebtn.addEventListener(
//     "click",
//     ()=>{
//         console.log("Button Clicked")
//         tasklist[2].innerHTML=`I love dancing`
//     }
// )
let list=[];
let input=document.getElementById('input-text')
let listdiv=document.querySelector(".listtask")
let submitbtn=document.getElementById('submit-text')
submitbtn.addEventListener(
    "click",
()=>{

  
    let iteme=document.createElement('li')
    iteme.innerText=input.value;
    input.value="";
    listdiv.appendChild(iteme)

})

// -----task4-----
// let list=[" hi","hello","badal ","saini","Work"];
let divlist=document.getElementsByClassName('task4div')
let changetextbtn=document.getElementById('change-text')
changetextbtn.addEventListener(
    "click",
    ()=>{
        console.log("Button Clicked")
        for(let i=0;i<5;i++){
            divlist[i].innerHTML=list[i]
        }
    }
)

let div1 = document.querySelector(".div1");
console.log(div1);

let isSquare = true;

div1.addEventListener("click", ()=> {
    if(isSquare){
        div1.style.borderRadius = "50%";
        isSquare = false;
    } else {
        div1.style.borderRadius = "0%";
        isSquare = true;
    }
});

let fruits=["apple","mango","banana"];
let fruitlist=document.getElementById('fruitlist')
fruits.forEach(fruit => {
    let itemEle=document.createElement('li');
    itemEle.innerText=fruit;
    fruitlist.appendChild(itemEle);
});

