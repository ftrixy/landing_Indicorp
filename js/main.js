
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
});