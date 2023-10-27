
/*顶部导航滑过显示*/
$(function () {
    $(".wd1").hover(function () {
        $(".wd2").fadeIn();

    }, function () {
        $(".wd2").hide();
    })
})
$(function () {
    $(".gy1").hover(function () {
        $(".gy2").fadeIn();
    }, function () {
        $(".gy2").hide();
    })
})

