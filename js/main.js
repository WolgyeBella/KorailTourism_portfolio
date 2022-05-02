$(document).ready(function(){
    $('.menu > li').mouseenter(function(){
        $(this).find('.submenu').stop().slideDown('fast');
        $('header').addClass('active');
        $(this).css('border-color','var(--main-color)');
    });
    $('.menu > li').mouseleave(function(){
        $(this).find('.submenu').stop().slideUp('fast');
        $('header').removeClass('active');
        $(this).css('border-color','transparent');
    });

    // 기존 버튼형 슬라이더
    $('.slide > .btn > ul > li').click(function(){
        var $this = $(this);
        var index = $this.index();
        
        $this.addClass('active');
        $this.siblings('.active').removeClass('active');
        
        var $slider = $this.parent().parent().parent();
        
        var $current = $slider.find('> .mainslide > div.active');
        
        var $post = $slider.find('> .mainslide > div').eq(index);
        
        $current.removeClass('active');
        $post.addClass('active');
    });

    // 좌/우 버튼 추가 슬라이더
    $('.slide > .side-btns > div').click(function(){
        var $this = $(this);
        var $slider = $this.closest('.slide');
        
        var index = $this.index();
        var isLeft = index == 0;
        
        var $current = $slider.find(' > .btn > ul> li.active');
        var $post;
        
        if ( isLeft ){
            $post = $current.prev();
        }
        else {
            $post = $current.next();
        };
        
        if ( $post.length == 0 ){
            if ( isLeft ){
                $post = $slider.find(' > .btn > ul> li:last-child');
            }
            else {
                $post = $slider.find(' > .btn > ul> li:first-child');
            }
        };
    
    $post.click();
});

    setInterval(function(){
        $('.slide > .side-btns > div').eq(1).click();
    }, 3000);

});

// 사이드 탭 메뉴 클릭 이벤트
const sideMenu = document.querySelectorAll('.side__bottom > .side__menu > li');
for( var i = 0; i < sideMenu.length; i++){

    sideMenu[i].querySelector('.sideBtn').addEventListener('click', function(e){
        e.preventDefault();
        for(var j = 0; j < sideMenu.length; j++){
            sideMenu[j].classList.remove('on');
        }
        this.parentNode.classList.add('on');
    });
}

// 사이드 서브메뉴 클릭 이벤트
const sideSubMenu = document.querySelectorAll('.sub__menu .sub__menu1 > li');
for( var i = 0; i < sideSubMenu.length; i++){
    sideSubMenu[i].querySelector('.sideSubBtn').addEventListener('click', function(e){
        e.preventDefault();
        this.parentNode.classList.toggle('on');
    });
}

// 사이드 창 닫기 버튼 클릭 이벤트
const sideCloseButton = document.querySelector('.side__top > button');
const side = document.querySelector('#side');
sideCloseButton.addEventListener('click', () => {
    side.classList.remove('on');
});


// 사이드 창 열기 버튼 클릭 이벤트
const sideOpenButton = document.querySelector('.iconBox > .side');
sideOpenButton.addEventListener('click', () => {
    side.classList.add('on');
});