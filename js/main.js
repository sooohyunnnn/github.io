/* 21961045 박수현 */

$(document).mousemove(function(e){
    $('.cursor').css("top", e.pageY);
    $('.cursor').css("left", e.pageX);
});
