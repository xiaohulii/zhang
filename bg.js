  // 首页自适应
 (function(window, document) {

    $(function() {
        pageInit();
    });
    $(window).on('resize', function() {
        pageInit();
    });

    var minWidth = 1280;    // 小于此尺寸出现滚动条,此值一般为1280
    var minHeight = 700;    // 小于此尺寸出现滚动条，此值一般为650左右
    var wh, ht;

    //更新不同窗口下图片尺寸
    //图片根据屏幕大小自适应

    function pageInit() {
        var _w = document.documentElement.clientWidth, _h = document.documentElement.clientHeight;
        wh = _w > minWidth ? _w : minWidth,ht = _h > minHeight ? _h : minHeight;
        var $wraps = $('.wraps');
        var conw = $wraps.width();
        var conh = $wraps.height();

        $('.page-wrap').css({'width': conw, 'height': conh});
        setBg();
    }

    function setBg() {
        var iw = 1440, ih = 750;  //图片的原始大小
        var $bg = $(".page_bg");
        var ib = ih / iw, b = ht / wh;
        if(b >= ib) {
            var bw = 1 / ib * ht;
            $bg.css({
                "width": bw + "px",
                "height": ht + "px",
                "top": "50%",
                "left": "50%",
                "margin-left": -bw / 2 + "px",
                "margin-top": -ht / 2 + "px"
            });
        } else {
            var bh = ib * wh;
            $bg.css({
                "width": wh + "px",
                "height": bh + "px",
                "top": "50%",
                "left": "50%",
                "margin-left": -wh / 2 + "px",
                "margin-top": -bh / 2 + "px"
            });
        }
    }


})(window, document);
