$(document).ready(function(){
    $('.menu > li').mouseenter(function(){
        if($(window).width() > 479){
            $(this).find('.submenu').stop().slideDown('fast');
            $('header').addClass('active');
            $(this).css('border-color','var(--main-color)');
        }
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

// 검색 창 닫기 버튼 클릭 이벤트
const searchCloseButton = document.querySelector('.search__top > button');
const searchCloseBtn = document.querySelector('.search__area-top > .close');
const search = document.querySelector('#search');
searchCloseButton.addEventListener('click', () => {
    search.classList.remove('on');
});
searchCloseBtn.addEventListener('click', () => {
    search.classList.remove('on');
});


// 검색 창 열기 버튼 클릭 이벤트
const searchOpenButton = document.querySelector('.iconBox > .search');
searchOpenButton.addEventListener('click', () => {
    search.classList.add('on');
});

//슬라이드 배경화면 스크롤에 따라 투명하게 이벤트
const slide = document.querySelector('.mainslide');
const slideHeight = slide.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    slide.style.opacity = 1 - window.scrollY / slideHeight;
});

// 추천여행 탭 클릭 이벤트
const tabList = document.querySelectorAll('.recommend__btn a');
const contents = document.querySelectorAll('.recommend__items .recommend__item');
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(var i = 0; i < tabList.length; i++){
    tabList[i].addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      // 나머지 버튼 클래스 제거
    tabList[j].classList.remove('on');

      // 나머지 컨텐츠 display:none 처리
    contents[j].style.display = 'none';
    }

    // 버튼 관련 이벤트
    this.classList.add('on');

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'flex';
});
}

// 메인슬라이드 클릭 버튼 이벤트
$(function(){
    $('.bestBox .itemBox:last').prependTo('.bestBox');
    $('.bestBox').css('margin-left','-290px');
    btn();
});

function btn(){
    $('.btns .next').on('click',function(e){
        $('.bestBox').animate({marginLeft:'-=290px'},300,'swing',function(){
            $('.bestBox .itemBox:first').appendTo('.bestBox');
            $('.bestBox').css('margin-left','-290px');
        });
        return false;
    });
    $('.btns .prev').on('click',function(e){
        $('.bestBox').animate({marginLeft:'+=290px'},300,'swing',function(){
            $('.bestBox .itemBox:last').prependTo('.bestBox');
            $('.bestBox').css('margin-left','-290px');
        });
        return false;
    });
}

// best 여행 scroll animation
$(document).ready(function(){
    $(window).scroll(function(){
        $('.best').each(function(){
            let bottom_of_element = $(this).offset().top + $(this).innerHeight();
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window >= bottom_of_element){
                $(this).animate({'opacity':'1','marginTop':'0px'},500);
            }
        });

        $('.recommend').each(function(){
            let bottom_of_element = $(this).offset().top + $(this).innerHeight();
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window >= bottom_of_element){
                $(this).animate({'opacity':'1','marginTop':'0px'},500);
            }
        });
    });
});
