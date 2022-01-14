$(function() {
    $(".greeting").on("click",function(){
        $("h1").hide();
    });
    $("#greeting2").on("click",function(){
        $("h1").show();
    });

    $(".btn").on("click",function(){
        $("figure").toggleClass("on")
    })
});