$(document).ready(function () {
    // $('.top-main').removeClass('open');
    $('a').click(function (e) {
        e.preventDefault();
    })

    //----popup----//

    $('.burger').click(function () {
        $('.menu-t').toggleClass('open');
        if ($('.menu-t').hasClass('open')) {
            $('.menu-t').animate({
                top: 50,
                right: 15
            }, 600)
            $(this).children().attr('class', 'fa fa-times');
            // $('.menu-t').removeClass('open');
        } else {
            $('.menu-t').animate({
                top: -350,
                right: 15
            }, 600)
            $(this).children().attr('class', 'fa fa-bars');
        }
    })

    //-----работа сслылок------///

    $('.menu a').click(function (e) {
        e.preventDefault();

        $('.menu a').removeClass('active');

        $(this).addClass('active');

        var height = $('.menu').innerHeight();

        var id = $(this).attr('href');

        var pos = $(id).offset().top - height;

        // console.log(pos);

        $('html').animate({
            scrollTop:pos

        },500)

    })
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        var height = $('.menu').innerHeight();

        $('.menu a').each(function(){
            var id = $(this).attr('href');
            var pos = $(id).offset().top - height;
            if(scroll >= pos){
                $('.menu a').removeClass('active');
                $(this).addClass('active');
            }


        })
      // console.log(scroll);

    })
    //----arrow Down-----//
    $('.arrow a').click(function(){
        var height = $('.menu').innerHeight();
        var down = $("#footer");
        
        var footer = $(down).offset().top - height;
        $('html').animate({
            scrollTop:footer

        },1000)
        console.log(down);
    })
    
    //-----arrow Up-----//

    var scroll = $(this).scrollTop();
    var header = $('.scroll').innerHeight();

    if (scroll > header) {
        $('#top').fadeIn();
    }
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        var header = $('.scroll').innerHeight();
        if (scroll > header) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    })
    $('#top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000)
    })
    
    
    	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
            url: "mail.php", //Change
            // url: "./../mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


});