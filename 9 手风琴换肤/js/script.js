var $li = $(".container li");
$li.hover(function() {
    // alert($(this).index());
    var index = $(this).index();
    for(var i=0; i<$li.length; ++i) {
        //大于index在右边
        if(i > index) {
            var tmp = i-1;
            $li.eq(i).stop().animate({left:(778+tmp*104) + "px"}, 500);
        } else {
            $li.eq(i).stop().animate({left:(i*104) + "px"}, 500);
        }
    }
    $(".bg img").eq(index).fadeIn().siblings().fadeOut();
})