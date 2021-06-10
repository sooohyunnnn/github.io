/* 21961045 박수현 */
$ (function) resultFun(x) { var positionLeft = x.clientX; var positionTop = x.clientY;
$ document.getElementById('result').style.left = positionLeft - 10 + "px";
document.getElementById('result').style.top = positionTop - 10 +"px"; }
if (document.addEventListener) { document.addEventListener("mousemove", resultFun); }
 else if (document.attachEvent) { document.attachEvent("onmousemove", resultFun);
 //attachEvent는 IE8이하와 오페라에서 사용하는 명령어이다 };
