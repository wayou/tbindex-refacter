$(function() {
    'use strict';

    function lazyLoad() {
        var range = 50; //距下边界长度/单位px
        var maxnum = 100; //设置加载最多次数
        var num = 1;
        var totalheight = 0;
        var main = $('#hotContent'); //主体元素
        $(window).scroll(function() {
            var srollPos = $(window).scrollTop(); //滚动条距顶部距离(页面超出窗口的高度)

            totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
            if (($(document).height() - range) <= totalheight && num !== maxnum) {

                num = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

                main.append($('.sample-hot-content-' + num).html() + '<hr>');
                num++;
            }
        });
    }

    function siteTour() {
        // Instance the tour
        var tour = new window.Tour({
            backdrop: true,
            storage: false,
            steps: [{
                backdrop: false,
                orphan: true,
                title: 'Hi, there',
                content: '查看新版都有哪些改进...'
            }, {
                element: '#t_searchbtn',
                title: '扁平风格的按钮',
                placement: 'bottom',
                content: '<p>将原来老样式的按钮更新为新的使用扁平风格的样式，与百度搜索主页的样式进行了统一</p><img src="images/tour/search_btn.jpg"> <p>下图为老版贴吧主页的按钮样式</p> <img src="images/tour/old_search_box.jpg">'
            }, {
                element: '#t_sitemenu',
                title: '新增导航',
                placement: 'bottom',
                content: '贴吧各产品线没有统一入口，不方便用户了解与使用，所以新增所有产品的入口到导航菜单'
            }]
        });

        return tour;
    }

    lazyLoad();

    var tour = siteTour();
    // Initialize the tour
    tour.init();
    //only automatically start the first time
    if (typeof(Storage) !== 'undefined') {
        var isFirstTime = localStorage.getItem('firstVisit');
        if (isFirstTime === null) {
            tour.start(true);
            localStorage.setItem('firstVisit', '1');
        }
    }

    $('#star-site-tour').on('click', function() {
        tour.start(true);
        if (tour.getCurrentStep() !== 1) {
            tour.goTo(1);
        }
    });

});