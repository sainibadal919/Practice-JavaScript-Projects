const faqs=document.querySelectorAll('.faq')
for(let i=0;i<faqs.length;i++){
    faqs[i].addEventListener("click",function(){
        faqs[i].classList.toggle("active")
    })
}