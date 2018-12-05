WebFont.load({
    google: {
      families: ['Montserrat:300,400,500,700:cyrillic'],
    }
  })

$(document).ready(function($) {

    // $('body').animate({'opacity': '1'}, 500)



scrollbar = scrollbarWidth()
opnsFancy = {
        animationEffect: "zoom",
        transitionEffect: "slide",
        touch: false,
        baseClass: "popup",
        beforeLoad: function() {
            if (!isMobile.any()) {
        $('body').css('paddingRight', scrollbar)
    }

        },
        afterClose: function() {
            if (!isMobile.any()) {
        $('body').css('paddingRight', '0')
    }

        },
    }
$('.text-dark').click(function(event) {
        popup = $(this).data('popup')
        popup = '#' + 'form'
        $.fancybox.open({
            src: popup,
            type: 'inline',
            opts: opnsFancy,

        });
        return false
    });




$('form').each(function() {
        var form = $(this),
            subbtn = form.find('.btn');
        form.find('input').addClass('empty');

        function inputCheck() {
            form.find('input').each(function() {
                if ($(this).val() != '') {
                    $(this).removeClass('empty');

		if ($('.no-global-form').length < 0) {
                    if ($(this).hasClass('email')) {
                        mailfield = $(this)
                        if(pattern.test(mailfield.val())){
                            mailfield.removeClass('empty');
                         } else {
                             mailfield.addClass('empty');
                        }
                    }

			}
                    if($(this).is(':checkbox')) {
                        var checkBox = $(this);
                if(checkBox.is(':checked')){
                  checkBox.removeClass('empty')
                } else {
                  checkBox.addClass('empty')
                }
            }
                } else {
                    $(this).addClass('empty');
                }
            });
        }

        function pEmpty() {
            form.find('.empty').addClass('error');
            form.find('.input-group-addon').addClass('error');

            setTimeout(function() {
                form.find('.input-group-addon').removeClass('error');
                form.find('.empty').removeClass('error');
            }, 500);
        }

if ($('.no-global-form').length < 0) {
       function valid() {
            mail = form.find('.email');
            if (mail.length) {
            if (mail.val() != '') {
                if (mail.val().search(pattern) == 0) {
                    mail.removeClass('error')
                } else {
                    mail.addClass('error').val('Неверный формат e-mail')
                    setTimeout(function() {
                        mail.removeClass('error');
                        mail.val('')
                    }, 500);
                }
            } else {
                mail.val('Введите e-mail')
                setTimeout(function() {
                    mail.removeClass('error');
                    mail.val('')
                }, 500);
            }
            }
        }}

        setInterval(function() {
            inputCheck();
            var lengthEmpty = form.find('.empty').length;
		
		if ($('.no-global-form').length < 0) {
                lengthError = form.find('.error').length,
                lengthError2 = form.find('.error2').length
		}else{
			var lengthError = 0,
                	lengthError2 = 0;
		}
		
            if (lengthEmpty > 0 || lengthError > 0 || lengthError2 > 0) {
                if (subbtn.hasClass('disabled')) {
                    return false
                } else {
                    subbtn.addClass('disabled')
                }
            } else {
                subbtn.removeClass('disabled')
            }
        }, 500);
        subbtn.click(function() {

	if ($('.no-global-form').length < 0) {
            if ($(this).hasClass('disabled')) {
				if ($('.no-global-form').length < 0) {
    			valid()};
                pEmpty()
                return false
            } else {
                $("form").submit(function(event) {
                    var th = $(this);

			
                    $.ajax({
                        type: "POST",
                        url: "send.php",
                        data: th.serialize(),
                        success: function(data) {
                               $.fancybox.close();
                               $.fancybox.open( {
                                src: '#thanks',
                                type: 'inline',
                                opts: opnsFancy,
                               });
				
                            setTimeout(function() {
                                $.fancybox.close();
                                th.trigger("reset");
                            }, 3000);
                        }
                    });
                    event.preventDefault();
                });
            }
			
		}else{
			if ($(this).hasClass('disabled')) {
				if ($('.no-global-form').length < 0) {
    			valid()};
                pEmpty()
                return false
            } else {
                $("form").submit(function(event) {
                    var th = $(this);

			
                    $.ajax({
                        type: "POST",
                        url: "send.php",
                        data: th.serialize(),
                        success: function(data) {
                               $.fancybox.close();
                               $.fancybox.open( {
                                src: '#thanks',
                                type: 'inline',
                                opts: opnsFancy,
                               });
				
                            setTimeout(function() {
                                $.fancybox.close();
                                th.trigger("reset");
                            }, 3000);
                        }
                    });
                    event.preventDefault();
                });
            }
		}
			
			
        	});




    });


var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;


var telInput = $(".phone")
  // errorMsg = $("#error-msg"),
  // validMsg = $("#valid-msg");

telInput.intlTelInput({
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            $.get('../https@api.sypexgeo.net/default.htm', function(resp) {
                var countryCode = resp.country.iso;
                callback(countryCode);
            })
        },
        // customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
        //     return selectedCountryPlaceholder;
        // },
        nationalMode: false,
        allowDropdown: false,
        utilsScript: "js/utils.js"
    });

// var reset = function() {
//   // telInput.parents('.input-group-addon').removeClass("error2");
//   telInput.removeClass("empty error error2");
//   // errorMsg.addClass("hide");
//   // validMsg.addClass("hide");


// };



// on blur: validate
// telInput.blur(function() {
//   reset();
//   if ($.trim(telInput.val())) {
//     if (telInput.intlTelInput("isValidNumber")) {
//       // validMsg.removeClass("hide");
//     } else {
//       // telInput.parents('.input-group-addon').addClass("error2");
//       telInput.addClass("empty error error2");
//       // errorMsg.removeClass("hide");
//     }
//   }
// });

// on keyup / change flag: reset
// telInput.on("keyup change", reset);

// telInput.on("keyup keydown change", function(event) {
//     reset
//   telInput.intlTelInput("setNumber", telInput.val());
// });

CountryData = telInput.intlTelInput("getNumber");
console.log(CountryData)

telInput.inputmask({
    "mask": "+380 (99) 999-9999",
    "placeholder": "",
   onKeyValidation: function(key, result){
    if (!result){
     telInput.addClass("empty error error2");
    } else {
        telInput.removeClass("empty error error2");
    }
  }
});


function scrollbarWidth() {
        var block = $('<div>').css({
                'height': '50px',
                'width': '50px'
            }),
            indicator = $('<div>').css({
                'height': '200px'
            });

        $('body').append(block.append(indicator));
        var w1 = $('div', block).innerWidth();
        block.css('overflow-y', 'scroll');
        var w2 = $('div', block).innerWidth();
        $(block).remove();
        return (w1 - w2);
    }



var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };


    $('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
        offset: 100
    });

    $('#show-more').click(function() {
        $('#more').animate({height: 'show'}, 750);
        $('#more').show();
        scrTop = $(this).offset().top;
        // scrTop = scrTop+'px'
        desiredHeight = $(window).height()
        $('body,html').animate({scrollTop: scrTop - desiredHeight}, 750);
        // console.log(scrTop - '20%')
        $(this).hide();
      });

      $('#show-more2').click(function() {
        $('#more2').animate({height: 'show'}, 750);
        $('#more2').show();
        scrTop = $(this).offset().top;
        desiredHeight = $(window).height()
        $('body,html').animate({scrollTop: scrTop - desiredHeight}, 750);
        $(this).hide();
      });

      $('#show-more3').click(function() {
        $('#more3').animate({height: 'show'}, 750);
        $('#more3').show();
        scrTop = $(this).offset().top;
        desiredHeight = $(window).height()
        $('body,html').animate({scrollTop: scrTop - desiredHeight}, 750);
        $(this).hide();
      });

      $('#show-more4').click(function() {
        $('#more4').animate({height: 'show'}, 750);
        $('#more4').show();
        scrTop = $(this).offset().top;
        desiredHeight = $(window).height()
        $('body,html').animate({scrollTop: scrTop - desiredHeight}, 750);
        $(this).hide();
      });

      $('#show-more5').click(function() {
        $('#more5').animate({height: 'show'}, 750);
        $('#more5').show();
        scrTop = $(this).offset().top;
        desiredHeight = $(window).height()
        $('body,html').animate({scrollTop: scrTop - desiredHeight}, 750);
        $(this).hide();
      });

         function classFunction(){
           if($('body').width()<768){ $('.bbb').removeClass('container').addClass('container-fluid');
           }
         }

         classFunction();
         $(window).resize(classFunction);




(function($) {
        var $window = $(window);
        var windowHeight = $window.height();
        $window.resize(function() {
            windowHeight = $window.height();
        });
        $.fn.parallax = function(xpos, speedFactor, outerHeight) {
            var $this = $(this);
            var getHeight;
            var firstTop;
            var paddingTop = 0;

            function update() {
                $this.each(function() {
                    firstTop = $this.offset().top;
                });
                if (outerHeight) {
                    getHeight = function(jqo) {
                        return jqo.outerHeight(true);
                    };
                } else {
                    getHeight = function(jqo) {
                        return jqo.height();
                    };
                }
                if (arguments.length < 1 || xpos === null) xpos = "50%";
                if (arguments.length < 2 || speedFactor === null) speedFactor = 0.4;
                if (arguments.length < 3 || outerHeight === null) outerHeight = true;
                var pos = $window.scrollTop();
                $this.each(function() {
                    var $element = $(this);
                    var top = $element.offset().top;
                    var height = getHeight($element);
                    if (top + height < pos || top > pos + windowHeight) {
                        return;
                    }
                    $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
                });
            }
            $window.bind('scroll', update).resize(update);
            update();
        };
    })(jQuery);
    if (!isMobile.any()) {
        $('.parallax-window').each(function() {
            $(this).parallax("0", 0.1);
        });
    }else{
        $('.teaser').addClass('block-paralax');
    }
    var sWidth = screen.width;
    $(window).resize(function() {
        sWidth = screen.width;
    });



$(".link-scroll").click(function(event) {

        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });





});


scrolltop = $(window).scrollTop()
$(window).scroll(function(){

scrolltop = $(window).scrollTop()
    if (scrolltop > 25) {
        $('.navbar').addClass('active');
        $('.navbar-expand-lg.fixed-bottom').addClass('hide')
        $('.navbar-expand-lg.fixed-top').addClass('hide')
        $('.navbar-expand-lg.fixed-top').addClass('black')

    }
    else {
        $('.navbar').removeClass('active');
        $('.navbar-expand-lg.fixed-bottom').removeClass('hide')
        $('.navbar-expand-lg.fixed-top').removeClass('hide')
        $('.navbar-expand-lg.fixed-top').removeClass('black')
    }
});


 if (scrolltop > 25) {
        $('.navbar').addClass('active');
        $('.navbar-expand-lg.fixed-bottom').addClass('hide')
        $('.navbar-expand-lg.fixed-top').addClass('hide')
        $('.navbar-expand-lg.fixed-top').addClass('black')

    }
    else {
        $('.navbar').removeClass('active');
        $('.navbar-expand-lg.fixed-top').removeClass('black')
        $('.navbar-expand-lg.fixed-bottom').removeClass('hide')
        $('.navbar-expand-lg.fixed-top').removeClass('hide')
    }


$(document).on("scroll", function() {
         $('.hidden').each(function() {
           if ($(this).position().top <= $(document).scrollTop() + $(window).height()) {
             $(this).animate({
               opacity: 1
             }, 1000);
           }
         });


         });