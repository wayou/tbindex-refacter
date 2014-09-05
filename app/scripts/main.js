$(function() {
    var range = 50; //距下边界长度/单位px
    var elemt = 208; //插入元素高度/单位px
    var maxnum = 100; //设置加载最多次数
    var num = 1;
    var totalheight = 0;
    var main = $("#hotContent"); //主体元素
    $(window).scroll(function() {
        var srollPos = $(window).scrollTop(); //滚动条距顶部距离(页面超出窗口的高度)

        totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
        if (($(document).height() - range) <= totalheight && num != maxnum) {

            var num=Math.floor(Math.random() * (2 - 1 + 1)) + 1;

            main.append($('.sample-hot-content-'+num).html()+'<hr>');
            num++;
        }
    });
});