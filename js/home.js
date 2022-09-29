// $("#skipBotton").ready(function(){
//     $("#container").fadeOut(); 
//     $("#header").fadeOut(); 
//     counter();
//     // console.log("test");
//     // counter();
// })

window.onload=function(){
    setTimeout(endAnimation,5000); 
}

function sleep(delay) {
    for(var t = Date.now(); Date.now() - t <= delay;);
}

function endAnimation(){
    window.location.href="/html/home.html";
}

function counter(){
    for(var i=3;i>=0;i--){
        sleep(1000);
        console.log(i);
        document.getElementById("skipBotton").innerHTML=i+" Enter"
    }  
}
