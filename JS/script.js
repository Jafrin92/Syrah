// menu
let mainMenu = $('.custom_nav').offset().top;

$(window).scroll(function(){
    let ScrollWin = $(window).scrollTop();
    if(ScrollWin> mainMenu){
        $('.custom_nav').addClass('menu_fixed');
    }else{
        $('.custom_nav').removeClass('menu_fixed');
    }
//scroll
     if(ScrollWin > 200){
        $('.scroll').fadeIn(1000);
    }else{
        $('.scroll').fadeOut(1000);
    }
});

//scroll
    $('.scroll').on("click",function(){
        $('body,html').animate({
        scrollTop: 0
    },500);
    });

//wow js
new WOW().init();

//preloader
    var preloader= document.getElementById('loader');
    function myfunction(){
        preloader.style.display="none";
    }