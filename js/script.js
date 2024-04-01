$(document).ready(function(){
    
    $('#slides').superslides({
        animation: 'slide',
        play: 5000,
        animation_speed: 'slow'
    });

    var typed = new Typed(".typed", {
        strings: ["Software Engineer. ", "Web Developer. ", "Sydney University Student. "],typeSpeed: 70,
        loop: true,
        startDelay:1000,
        showCursor:false,
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor:false,
        scaleColor:false,
        lineWidth:4,
        size:152,
        onStep:function(from, to , persent){
            $(this.el).find('.percent').text(Math.round(persent));
        }
        //your options goes here
    });
    
   

});




