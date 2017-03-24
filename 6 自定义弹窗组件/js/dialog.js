$.dialog = function(opts) {
    var name = tz_animateIn();
    var $dialog = $("<div class='dialog " + name +"'>" +
            "<div class='title'>" + 
                "<h3>" + opts.title + "</h3>" + 
                "<a href='javascript:' class='close'>X</a>" +
            "</div>" +
            "<div class='content'>" + 
                "<div class='message'>" + 
                    "<span class='icon'></span>" +
                    "<span class='text'>" + opts.msg +"</span>"+
                "</div>" + 
                "<div class='btn'>" +
                    "<input type='button' value='确定' class='sure'/>" +
                    "<input type='button' value='取消' class='cancle'/>" +
                "</div>" +
           "</div>" +
        "</div>"
    )

    $("body").append($dialog).append('<div class="gray"></div>');
    autoCenter($dialog);
    // 当窗口发生变化时，让弹出框剧中
    $(window).resize(function() {
        autoCenter($dialog);
    })

    initEvent($dialog, opts);
}
// 让弹出框举重
function autoCenter($dialog) {
    var w = $dialog.width();
    var h = $dialog.height();
    var t = $(window).height() - h;
    var l = $(window).width() - w;
    $dialog.css({top:t/2,left:l/2});
}

function initEvent($dialog, opts) {
    //窗口拖动
    $dialog.find(".title").mousedown(function(e) {
        var e = e || window.event;
        var _left = e.pageX - $dialog.offset().left;
        var _top = e.pageY - $dialog.offset().top;
        var flag = true;
        $(document).mousemove(function(e) {
            if (flag) {
                e = e || window.event;
                var l = e.pageX - _left;
                var t = e.pageY - _top;
                $dialog.css({left:l,top:t})
            }
        }).mouseup(function() {
            flag = false;
        })
    })
    //关闭按钮
    $dialog.find('.close').click(function() {
        var name = tz_animateOut();
		$dialog.removeClass("animated").addClass(name);
        $(".gray").remove();
        // $dialog.remove();
        $dialog.fadeOut(500, function() {
            $dialog.remove();
        })
    });
    //确定按钮
    $dialog.find('.sure').click(function() {
        var name = tz_animateOut();
		$dialog.removeClass("animated").addClass(name);
        $(".gray").remove();
        // $dialog.remove();
        $dialog.fadeOut(500, function() {
            $dialog.remove();
        })
        if (opts.callback) {
            opts.callback(true);
        }
    });

    //取消按钮
    $dialog.find('.cancle').click(function() {
        var name = tz_animateOut();
		$dialog.removeClass("animated").addClass(name);
        $(".gray").remove();
        // $dialog.remove();
        $dialog.fadeOut(500, function() {
            $dialog.remove();
        })
        if (opts.callback) {
            opts.callback(false);
        }
    });
}

//随机css3动画效果
function tz_animateIn(){
	var animateIn = [];//存储css3动画库相应动画的类名
	animateIn.push("animated bounce");
	animateIn.push("animated tada");
	animateIn.push("animated wobble");
	animateIn.push("animated flip");
	animateIn.push("animated flipInx");
	var n = Math.floor(Math.random()*animateIn.length);
	return animateIn[n];
}
//动画消失
function tz_animateOut(){
	var animateOut = [];
	animateOut.push("animated fadeOut");
	animateOut.push("animated fadeOutUp");
	animateOut.push("animated fadeOutDown");
	animateOut.push("animated fadeOutLeft");
	animateOut.push("animated fadeOutRight");
	animateOut.push("animated fadeOutUpBig");
	var n = Math.floor(Math.random()*animateOut.length);
	return animateOut[n];
};