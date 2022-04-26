$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
$('.navbar').addClass("sticky");
        }
        else{
$('.navbar').removeClass("sticky");
        }
        if(this.scroll>500){
            $('.scoll-up-btn').addClass("show");
        }
        else{
            $('scroll-up-btn').removeClass("show")
        }
    });
    // slideup ScriptProcessorNode
    $('.scroll-up-btn').click(function(){
$('html').animate({scrolltop:0});
    });
    // toggle menu/navabar script
    $('menu-btn').click(function(){
        $('.navbar .menu').toggleclass("active")
        $('menu-btn i').toggleclass("active")
    });
    // typing animation ScriptProcessorNode
    var typed= new Typed(".typing",{
        strings:["you tuber","blogger","electrician","web developer" ,"SEO","Free lancer"],
       typeSpeed:100,
       backSpeed: 60,
       loop:true,
       


    });
    var typed= new Typed(".typing-2",{
        strings:["you tuber","blogger","electrician","web developer" ,"SEO","Free lancer"],
       typeSpeed:100,
       backSpeed: 60,
       loop:true,
       


    });
    // owl carousel ScriptProcessorNode
    $('.carousel').owlCarousel({
margin:20,
loop:false,
autoplayTimeout:2000,
autoplayHoverPaused:true,
responsive:{
    0:{
        items: 1,
        nav:false,
    },
   600:{
        items: 1,
        nav:false,
    },
    1000:{
        items: 1,
        nav:false,
    }
}
});
});
