$(window).on("load",function () {
    $(".loader").fadeOut(1500);

    $("items").isotope({
        filter:"*",
        animationOptions:{
            duration:1500,
            easing:'linear',
            queue:false,
        }
    })
});



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

    
    

    // var skillsTopOffSet = $(".skillsSection").offset().top;
    // // console.log(skillsTopOffSet);
    // $(window).scroll(function(){
    //     if(window.scrollY > skillsTopOffSet - $(window).height()+200) {
    //         // Add your code here
    //     }
    // });

    var skillsTopOffSet = $(".skillsSection").offset().top;
    var statsTopOffSet = $(".statsSection").offset().top;
    var countUpFinished = false;

    console.log(skillsTopOffSet); // Debugging: Check the offset value

    $(window).scroll(function() {
        if(window.scrollY > skillsTopOffSet - $(window).height() + 200) {
            // Add your code here
            //console.log('Skills section is now visible'); // Test scrolling action
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
        }
    });
    $(window).scroll(function() {
    if(! countUpFinished && window.scrollY > statsTopOffSet - $(window).height() + 200) {
        $(".counter").each(function(){
            var element = $(this);
            var endVal = parseInt(element.text());
            element.countup(endVal);
        });
            countUpFinished = true;
        }
    });

    // $("[data-fancybox]").fancybox();
    $("[data-fancybox]").fancybox();

    // $("items").isotope({
    //     filter:"*",
    //     animationOptions:{
    //         duration:1500,
    //         easing:'linear',
    //         queue:false,
    //     }
    // })

    $("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});

    const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {
		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	}

});

    
    






