/*
/!**
 * Created by Lenovo on 2017/5/15.
 *!/

/!*t=setInterval(move,500);
var num=0;
function move() {
    num++;
    $(".yk1 .yk11").rotate(90*num);
}*!/
// $(".yk1 .yk11").rotate()
/!*
var num = 0;
$(".yk1").click(function(){

    num ++;
  $(".yk1 .yk11 img").rotate(90*num);
  /!*  $(".yk1 .yk11 img").slideToggle( $('.yk1 .yk11 img').show(), $('.yk1 .yk11 img').hide() )*!/


});
console.log($(".yk1"))*!/
num=0;
var img=document.querySelector(".tu img");
var tu=document.querySelector(".tu");

var num = 0;
console.log("img")
var t1 = setInterval(move, 1000);
function move() {
    num++;
    if (num == tu.length) {
        num = 0;
    }           // 让轮播循环
    for (var i = 0; i < tu.length; i++) {
        img[i].style.zIndex=1
        img[i].style.opacity=0.5;
    }
   img[num].style.zIndex=2;
   img[num].style.opacity=1;
}
;
$(".tu").onmouseover = function () {
    clearInterval(t1);
}
$(".tu").onmouseout = function () {
    t1 = setInterval(move, 1000);
}
$(".btnl").click = function () {
    if (num == 3) {
        num = 0;
    }
    move();
}
$(".btnr").click = function () {
    if (num == -1) {
        num =img.length - 1;
    }
    num -= 2;
    move();
}*/
