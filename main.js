$(document).ready(function(){
    $(".filter").click(function(){
        const value=$(this).attr("data-filter");
        if(value == "All"){
            $(".post-box").show("1000");
        }
        else{
            $(".post-box").not("." + value).hide("1000");
            $(".post-box").filter("." + value).show("1000");
        }
    })
});
$(".filter").click(function(){
    $(this).addClass("activefilter").siblings().removeClass("activefilter");
});
let header=document.querySelector("header")
window.addEventListener("scroll", ()=> {
    header.classList.toggle("shadow",window.scrollY>0);
})