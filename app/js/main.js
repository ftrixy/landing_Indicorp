<<<<<<< HEAD

$(function () {

        $(".menu a, .header a, .footer a").on("click", function (event) {
                event.preventDefault();
                var id = $(this).attr('href'),
                        top = $(id).offset().top;
                $('body,html').animate({ scrollTop: top }, 1500);
        });

        $('.header__btn').on('click', function () {
                $('.menu').toggleClass('menu--active');
                $('.header__btn').toggleClass('header__btn--active');
                $('.body').toggleClass('body--active');
        });
});

$(function () {

        $('[data-fancybox]').fancybox({
                youtube: {
                        controls: 1,
                        autoplay: 0
                        // showinfo: 0
                },
        });
=======
$(function(){

    $(".menu a, .header a, .footer a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('.header__burger').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
        $('.header__burger').toggleClass('header__burger--active');
    });
>>>>>>> 80877145a0d9d1d686c82bc04e13008702c15cb7
});



const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    const blockID = anchor.getAttribute('href')

    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
<<<<<<< HEAD
}
=======
}
>>>>>>> 80877145a0d9d1d686c82bc04e13008702c15cb7
