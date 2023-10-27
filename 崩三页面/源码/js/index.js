var time = 47573983;

function scoreTime() {

    time -= 1000


    // var day = parseInt(time / 1000 / 60 / 60 / 24);
    var hour = parseInt(time / 1000 / 60 / 60 % 24);
    var minute = parseInt(time / 1000 / 60 % 60);
    var second = parseInt(time / 1000 % 60);

    // day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    return hour + '时' + minute + '分' + second + '秒'
}

$(document).ready(function () {
    var p1 = $('#aoTime');
    var timer = setInterval(function () {
        var a = scoreTime();
        p1.html(a);

    }, 1000);
})
