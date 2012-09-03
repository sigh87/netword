$(function(){
    var unitWidth = 80 / $('.menuBtn').length - 20 / $('.menuBtn').length ;
    $('#menuBox .menuBtn').css({
        'width'     : (unitWidth)+'%'
    });
})