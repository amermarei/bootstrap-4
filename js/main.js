$(function (){
    'use strict';
    var winH  = $(window).height(),
        upperH = $('.uper-bar').innerHeight(),
        navH  = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - ( upperH + navH ));
    $("body").niceScroll({
        cursorcolor:"#522157",
        cursorborder:"none"
    });
});
