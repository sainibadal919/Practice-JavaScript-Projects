
function updatetime(){
    let date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();
    hour=hour<10?"0"+hour:hour;
    minute=minute<10?"0"+minute:minute;
    second=second<10?"0"+second:second;
    document.querySelector(".display").innerHTML=hour+":"+minute+":"+second;
 }
 setInterval(updatetime,1000);

 function rotate(){
    let date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();
    let hr=30*hour+minute/2;
    let mr=6*minute;
    let sr=6*second;
    document.querySelector(".second-div").style.rotate=`${sr}deg`;
    document.querySelector(".minute-div").style.rotate=`${mr}deg`;
    document.querySelector(".hour-div").style.rotate=`${hr}deg`;
 }
 setInterval(rotate,1000);

