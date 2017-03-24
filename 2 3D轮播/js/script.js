var mark = false;
        $(".left").click(function () {
            //实现效果
            //什么元素　改变　什么属性
            if (mark) {
                return;
            }
            mark = true;
            move(false);
        });
        $(".right").click(function () {
            if (mark) {
                return;
            }
            mark = true;
            move(true);
        });

        function move(dire) {
            var arrW = [],
                arrH = [],
                arrL = [],
                arrT = [],
                arrZ = [];
            $("ul li").each(function (i) {
                arrW[i] = $(this).css("width");
                arrH[i] = $(this).css("height");
                arrL[i] = $(this).css("left");
                arrT[i] = $(this).css("top");
                arrZ[i] = $(this).css("z-index");
                console.log($(this).css("z-index"));
            });

            $("ul li").each(function (i) {
                var n;
                if (dire) {
                    n = i + 1;
                    if (n > 9) {
                        n = 0;
                    }
                } else {
                    n = i - 1;
                    if (n < 0) {
                        n = 9;
                    }
                }

                $(this).css("z-index", arrZ[n]);
                $(this).animate({
                    width: arrW[n],
                    height: arrH[n],
                    top: arrT[n],
                    left: arrL[n]
                }, 500, function () {
                    mark = false;
                })
            });

        }