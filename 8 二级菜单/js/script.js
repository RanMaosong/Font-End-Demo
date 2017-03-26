$(function() {
    $(".nav .menu").click(function() {
        $(this).toggleClass("curr");
        $(this).find(".level2").slideToggle("slow");
        $(this).siblings().removeClass("curr")
                .find(".level2").slideUp("slow");
    })
    $(".level2").click(function(e) {
        var e = e || window.event;
        e.stopPropagation();
    })
})