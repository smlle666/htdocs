(function() {
    
$(".search__icon").click(function() {
    $(".header__search").show(300);
});
    
$(document).mouseup(function(e){
    if ($(".header__search").has(e.target).length === 0 && $(".search__icon").has(e.target).length === 0)
        $(".header__search").hide(300);
});
    
$(document).ready(function() {
   $(".question__item1").on("click", fToggle1); $(".question__item2").on("click", fToggle2);
    $(".question__item3").on("click", fToggle3);
    $(".question__item4").on("click", fToggle4);
});
    
function fToggle1(){
    $('.answer1').slideToggle(500);
}
    
function fToggle2(){
    $('.answer2').slideToggle(500);
}
    
function fToggle3(){
    $('.answer3').slideToggle(500);
}
    
function fToggle4(){
    $('.answer4').slideToggle(500);
}
})()
