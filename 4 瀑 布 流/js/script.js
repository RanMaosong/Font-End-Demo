var images = [
    {src:"./images/1.png"},
    {src:"./images/2.jpg"},
    {src:"./images/3.jpg"},
    {src:"./images/4.jpg"},
    {src:"./images/5.jpg"},
    {src:"./images/6.jpg"},
    {src:"./images/7.jpg"},
    {src:"./images/8.jpg"},
    {src:"./images/9.jpg"},
    {src:"./images/10.jpg"},
    {src:"./images/11.jpg"},
    {src:"./images/12.jpg"},
];

var index = 0;  //记录当前加载的图片数
var length = images.length; 

// 给高度最小的li标签添加一张图片
function createImg() {
    var img = new Image();
    img.src = images[index%length].src;
    var $li = getMinList();
    img.style.cssText = "opacity:0;transform:scale(0)"; //设置css3属性
    $li.append(img);

    setTimeout(function() {
        img.style.cssText = "opacity:1;transform:scale(1)"; //设置css3属性
    }, 200);
}

//获取高度最小的li标签
function getMinList() {
    var $li = $("#container ul li");
    var minHeight = Infinity;
    var $result;
    for(var i=0;i<$li.length; ++i) {
        //获取$li中的jQuery对象，使用$li.eq(i),不能使用$li[i]
        if ($li.eq(i).height() < minHeight) {
            $result = $li[i];
            minHeight = $li.eq(i).height();
        }
    }
    return $result;
}

function load() {
    if(index<length) {
        for(;index<length;++index) {
            createImg();
        }
    } else {
        var tmp = index;
        for(;index<tmp+6;++index) {
            createImg();
        }
    }
}
//窗口滑动事件
$(window).scroll(function() {
    var t = $(window).scrollTop();  //滚动条高度
    var h = $(window).height();  //可视高度
    var H = $(document).height();  //文档高度

    if (t + h + 80 > H) {
        load();
    }
})

load();