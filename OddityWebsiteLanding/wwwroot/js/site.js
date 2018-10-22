

//Side Bar Menu Code
$(document).ready(function () {
    $(document).ready(function () {
        // HTML markup implementation, overlap mode, initilaize collapsed
        $('#menu').multilevelpushmenu({
            containersToPush: [$('#pushobj')],
            collapsed: true
        });

        $('#myLink').click(function () { MyFunction(); return false; });

        //setInterval(AnimateItems, 15);
    });
});

$(window).resize(function () {

    if ($(this).width() < 1024) {

        $('#menu').hide();

    } else {

        $('#menu').show();

    }

});

$("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

$("a[href='#trailer']").click(function () {
    $('html, body').animate({
        scrollTop: $("#trailer").offset().top
    }, 2000);
});

$("a[href='#download']").click(function () {
    $('html, body').animate({
        scrollTop: $("#StoreButtonsContent").offset().top
    }, 2000);
});

$("a[href='#screenshots']").click(function () {
    $('html, body').animate({
        scrollTop: $("#ScreenshotContainer").offset().top
    }, 2000);
});

$("a[href='#presskit']").click(function () {
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        return false;
});


