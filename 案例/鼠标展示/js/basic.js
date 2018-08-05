window.onload = function () {
    traverse("li");
    mouse_bg("url(img/01big.jpg)","mouse1");
    mouse_bg("url(img/02big.jpg)","mouse2");
    mouse_bg("url(img/03big.jpg)","mouse3");
    mouse_bg("url(img/04big.jpg)","mouse4");
    mouse_bg("url(img/05big.jpg)","mouse5");
}
function traverse(obj) {
    var obj = document.getElementsByTagName(obj);
    for(var i = 0; i <obj.length; i++ ){
        obj[i].innerHTML = "<img src='img/0" +(i+1)+ ".jpg'/>";
    }
}
function $(id) {
    return document.getElementById(id);
}
function mouse_bg(bigmouse,obj) {
    $(obj).onmouseover = function () {
        $("show").style.backgroundImage = bigmouse;
    }
}