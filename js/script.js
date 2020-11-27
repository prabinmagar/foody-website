
$(document).ready(function(){
    // banner image change
    let bannerCount = 0;
    setInterval(function(){
        hideAllBanner();
        changeBannerCount();
        changeBanner();
    }, 8000);

    function changeBanner(){
        $('.banner-item').each(function(idx){
            if(bannerCount == idx){
                $(this).addClass('active-banner');
            }
        });
    }

    function hideAllBanner(){
        $('.banner-item').each(function(idx){
            $(this).removeClass('active-banner');
        });
    }

    function changeBannerCount(){
        bannerCount++;
        if(bannerCount >= $('.banner-item').length){
            bannerCount = 0;
        }
    }

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(600);
    });

    // fixed navbar 
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 800){
            $('.navbar').addClass('fxd-navbar');
        } else {
            $('.navbar').removeClass('fxd-navbar');
        }
    });

});