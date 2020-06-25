$(document).ready(function(){
    new WOW().init();
    /*preloader */
    $(window).on('load', function() {
        var pre_loader = $('#preloader');
        pre_loader.fadeOut('slow', function() {
            $(this).remove(); //remove it's tag from html
        });
      });
    /* navbar fixed*/
    $(window).on('scroll',function(){
        if( $(this).scrollTop() >100 ){
            $('nav.navbar ').addClass('navbar_fixed');
        }
        else{
            $('nav.navbar ').removeClass('navbar_fixed');
        }
    })
    /* active link of navbar*/
    var menu=  $(" #nav_header ul.navbar-nav li a") ;
    menu.on('click',(function(){
        menu.removeClass("active");
         $(this).addClass("active");
    })
    )
		$(menu).click(function(){
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 2000);
            return false;
        });
    
    /*icon scroll top */
    $(window).on('scroll',function(){
       if( $(this).scrollTop() >300 ){
           $('a#chevron_up').fadeIn('slow');
       }
       else{
        $('a#chevron_up').fadeOut('slow');
       }
    })
    $('a#chevron_up').click(function(){
        $('html,body').animate({scrollTop:0},2000,'easeInOutExpo');
        return false;
    })
    /*carousel slider */
    if( $(".carousel-indicators li").hasClass('active')){
        $(this).css({"color":"#3ec1d5","border-radius":"5px"})
    }
    var tab=$('#faq_quastion #faq_left_content .panel-title a');
    var tab_icon=$('#faq_quastion #faq_left_content .panel-title a i');
    /* */
    tab.click(function(){
        tab.removeClass('active');
        $(this).addClass('active');
        tab_icon.removeClass('fa-chevron-right');
        tab_icon.addClass('fa-chevron-down');
    })
    /*portfolio section */
    $('#portfolio #portfolio_list ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if( $(this).data('class')==='.all' ){
            $('#portfolio .col-sm-4').css('opacity','1');
        }
        else{
            $('#portfolio .col-sm-4').css('opacity','.3');
            $(  $(this).data('class') ).parent().css('opacity',1);
        }
    })
    
    
})