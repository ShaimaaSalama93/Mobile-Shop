/**
 * Created by shaimaa on 11/1/2017.
 */
$(document).ready(function() {

    /**************Toggle Menu*************/
    /*toggle icon*/
    $('.load').hide();
    $('.togclick').click( function(){
        $(".load").animate({
            width: "toggle",
            duration: 50
        });
    });
    /*close icon*/
    $('.glyphicon-remove').click( function(){
        $(".load").animate({
            width: "toggle",
            duration: 50
        });
    });
    /*Head Part click*/
    $('.load a').click( function(){
        $(".load").animate({
            width: "toggle",
            duration: 50
        });
    });

    /***********toggle Filter****************/
    $('.filter').click( function(){
        $(".Category-left").animate({
            width: "toggle",
            duration: 50
        });
        $(".Category-right").animate({
            width: "toggle",
            duration: 50
        });
    });

    /****************Change Color Theme********/
    $(".colorSetting .color-palet li").click(function(){
        $("link[href*='Theme']").attr("href",$(this).attr("data-value"));

    });


    /************Brands Slider****************/
    $('#Carousel').carousel({
        interval: 10000
    })

    /**************Scroll Up Icon*************/
    /*Scroll UP icon Hide First Load*/
    var scrollup=$('.scrollup');
    if( $(this).scrollTop()>=200){
        scrollup.show();
    }
    else{
        scrollup.hide();
    }

    /*Scroll UP icon Hide and show according to position*/
    $(window).scroll(function(){
        if( $(this).scrollTop()>=100){
            scrollup.fadeIn();
        }
        else{
            scrollup.fadeOut();
        }
    });

    /*scroll Up on click*/
    $('.scrollup').click(function(){
        $("html,body").animate({scrollTop:0},2000);
    });

     /*Toggle English/Arabic*/
    $('#En').click(function(){
        $("LINK[href*='Home_AR.css']").remove();
        $("LINK[href*='bootstrap-rtl.min.css']").remove();
    });
    $('#Ar').click(function(){
        $('head').append('<link rel="stylesheet" href="//cdn.rawgit.com/morteza/bootstrap-rtl/v3.3.4/dist/css/bootstrap-rtl.min.css">');
        $('head').append('<link href="assets/css/Home_AR.css" rel="stylesheet">');
    });

    /**************Search*************/
    /*toggle icon*/
    $('.Search').hide();
    $('.Search-Icon').click( function(){
        $(".Search").animate({
            width: "toggle",
            duration: 50
        });
    });
    /**************colors*************/
    /*toggle icon*/
    $('.color-palet').hide();
    $('.color').click( function(){
        $(".color-palet").animate({
            width: "toggle",
            duration: 50
        });
    });

});
