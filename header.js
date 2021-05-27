$(function () {
    let header = $('.header-menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('header-sticky');
        } else {
            header.removeClass('header-sticky');
        }
    });
});
$(function () {
    let header = $('.header-menu');
    let hederHeight = header.height();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('header-sticky');
            $('body').css({
                'paddingTop': hederHeight + 'px'
            });
        } else {
            header.removeClass('header-sticky');
            $('body').css({
                'paddingTop': 0
            })
        }
    });
});
