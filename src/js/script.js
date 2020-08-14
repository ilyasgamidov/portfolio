

$(document).ready(function(){

    $(document).ready(function(){
 
        $('form').submit(function(e) {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('#contactme').modal('toggle');
                $('#thanks').modal('toggle');
     
                $('form').trigger('reset');
            });
            return false;
        });
    });

    $('.reviews__carousel').slick(
        {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/arleft.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/arright.svg"></button>',
            /* autoplay: true,
            autoplaySpeed: 4000, */
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          }
    );

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1200) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    new WOW().init();

    

});

// -----timer -----//

const timer = (id, deadline) => {

  const addZero = (num) => {
      if (num <= 9) {
          return '0' + num;
      } else {
          return num;
      }
  };
  const getTimeRemaining = (endtime) => {
      const time = Date.parse(endtime) - Date.parse(new Date()),
          seconds = Math.floor((time / 1000) % 60),
          minutes = Math.floor((time / 1000 / 60) % 60),
          hours = Math.floor((time / (1000 * 60 * 60) % 24)),
          days = Math.floor((time / (1000 * 60 * 60 * 24)));

      return {
          total: time,
          seconds,
          minutes,
          hours,
          days
      };
  };

  const setClock = (selector, endtime) => {
      const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

      updateClock();

      function updateClock() {
          const time = getTimeRemaining(endtime);

          days.textContent = addZero(time.days);
          hours.textContent = addZero(time.hours);
          minutes.textContent = addZero(time.minutes);
          seconds.textContent = addZero(time.seconds);

          if (time.total <= 0) {
              days.textContent = '00';
              hours.textContent = '00';
              minutes.textContent = '00';
              seconds.textContent = '00';

              clearInterval(timeInterval);
          }
      }
  };

  setClock(id, deadline);
};

  let deadline = new Date(Date.parse(new Date()) + 209 * 60 * 1000);
  timer(".container1", deadline);


  

