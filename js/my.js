window.onresize=function(){
    myInfoLeft=$("#myInfo")[0].offsetLeft;
    contentLeft=$("#content")[0].offsetLeft;
}
window.onscroll=function(){
    var contentLeft=$("#content")[0].offsetLeft
    var myInfoLeft=$("#myInfo")[0].offsetLeft
    $("#container").css("height",$("#content").css("height"))
    if (document.documentElement.scrollTop >= 100){
        if (window.screen.width>=768){
            $("#myInfo").css("position","fixed");
            $("#myInfo").css("top","0");
            $("#myInfo").css("left",myInfoLeft);

            $("#content").css("position","absolute")
            $("#content").css("left",contentLeft)
        }

        
    }
    else{
        $("#myInfo").css("position","relative");
        $("#myInfo").css("left",0);

        $("#content").css("left",0)
        $("#content").css("position","relative")

    }
}
function like(e){
    $(e).addClass("bg-primary");
    $(e).css("color","white");

}