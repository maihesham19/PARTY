$('.menubar').on('click', function () {
    $('.menulist').show(1000)

})

$('.close').on('click', function () {
    $('.menulist').hide(1000)
})

$(".menulist a").on('click', function () {
    var Go = $(this).attr("href")
    $('html, body').animate({
        scrollTop: $(Go).offset().top
    }, 1000);
});
$('.info').on('click', function () {
    $(this).next().slideToggle(1000)
    $(this).prev().slideUp(1000)

})
function counter() {
    var endTime = new Date("4 March 2025 12:00:00");
    endTime = (Date.parse(endTime) / 1000);

    var current = new Date();
    current = (Date.parse(current) / 1000);

    var timeLeft = endTime - current;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    $(".days").html(days + "<span>D</span>");
    $(".hours").html(hours + "<span>h</span>");
    $(".minutes").html(minutes + "<span>min</span>");
    $(".seconds").html(seconds + "<span>sec</span>");

}
setInterval(function () { counter(); }, 1000);

var inputLimit = 100;
$('textarea').on('input', function () {
    var length = $(this).val().length;
    var currentInput = inputLimit - length;
    if (currentInput < 0) {
        $(".limit").text("your available character finished");
    }
    else {
        $(".limit").text(currentInput);
    }

})