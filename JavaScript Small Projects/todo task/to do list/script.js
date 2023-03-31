let input=document.getElementById('input-text');
let submit=document.querySelector('.submit-text');
let list=[];
let addText=()=>{
    list.push(
        {
            text:input.value,
        }
    )
    console.log(list);
}
submit.addEventListener(
    'click',
    addText()
)