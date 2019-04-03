$(function () {
    setInterval(function () {
        $(".slideshow ul").animate({
            marginLeft: -2000
        }, 1000, function () {
            $(this).css({
                marginLeft: 0
            }).find("li:last").after($(this).find("li:first"));
        })
    }, 5000);
});


