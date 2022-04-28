$(document).ready(function(){
    var submenuHeight = $('submenu1').innerHeight();
    $('.menu > li').mouseover(function(){
        $('header').stop().animate({'height':'106px'+submenuHeight});
        $(this).find('.submenu').show();
    });
});