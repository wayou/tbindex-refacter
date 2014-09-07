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
                content: '<p>查看新版首页都有哪些改进...</p><p class="tour-protip"><small> <span class="icon-keybaord"></span> 支持快捷键操作：Esc退出，左右方向键前进后退</small></p>'
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
            }, {
                element: '#t_top_casual',
                title: '首页轮播优化',
                placement: 'bottom',
                content: '<p>将原来首页顶部的轮播下移，同时去掉右边的吧总数展示，节省出空间给其他版块</p><img src="images/tour/slider.jpg">'
            }, {
                element: '#t_duoduo',
                title: '吧推荐整合',
                placement: 'bottom',
                content: '<p>之前的吧推荐太繁杂，现在仅保留朵朵奇葩，同时左侧会增加了相应的版块来专门推荐一些吧。此版块下面的热门动态就可以得到提升，获得更多展示机会，因为热门动态的点击量最大</p> <p>增加一键关注，每个吧也增加关注按钮，之前是没有的，设计不够合理</p> <img src="images/tour/duoduo.jpg">'
            }, {
                element: '#t_onekey',
                title: '一键关注',
                placement: 'top',
                content: '增加一键关注，轻松AOE'
            }, {
                element: '#t_follow',
                title: '关注',
                placement: 'top',
                content: '对于推荐或者展示在页面的吧，均增加关注按钮。旧版页面设计的不合理，导致首页推荐了很多好玩的吧但没关注按钮，需要点击进入到吧里面才能进行关注操作'
            }, {
                element: '#t_host_bars',
                title: '新增吧排行',
                placement: 'right',
                content: '<p>去掉原来的吧分类，放到了顶部的导航里，这里节约出来的空间用来进行吧的展示和推荐</p><p>新增一周内吧的排行，将一些活跃的吧展现在这里，让用户知道贴吧整体的趋势，同时可以更方便地发现和选择关注这些热门的吧</p><img src="images/tour/bar_categories.jpg">'
            }, {
                element: '#t_interest',
                title: '根据用户兴趣推荐',
                placement: 'right',
                content: '根据用户的行为兴趣推荐一些吧'
            }, {
                element: '#t_corparation',
                title: '官方进驻',
                placement: 'right',
                content: '将原来的官方吧移动右侧，一起归类到这边的吧推荐中，内容更统一一些'
            }, {
                element: '#t_newbars',
                title: '给新生命一些机会',
                placement: 'right',
                content: '新增最新成立模块，动态加载最新成立的一些吧，即让它们有展示的机会，吸引志同道合的人加入，不然一个新成立的吧很难成长起来，同时不断刷新的数据也会给人一种贴吧很活跃的感觉，每时每刻有那么多新吧成立'
            }, {
                element: '#t_hot_content',
                title: '热门动态',
                placement: 'top',
                content: '<p>这一部分未变动，只是较之前位置有秘提升。</p><p>同时由于去掉了底部的footer,所以这一块的内容仍然保持下拉加载，且可无限下拉</p>'
            }, {
                element: '#t_selected',
                title: '贴吧精选',
                placement: 'left',
                content: '<p>还是原来的配方，还是原来的精选</p><p>只是位置上升，得到更多展现的机会，因为这种运营精选有趣的内容更能吸引用户</p>'
            }, {
                element: '#t_rss',
                title: '新增邮件订阅',
                placement: 'left',
                content: '<p>如之前发到idea邮件组中的建议，让用户可以订阅贴吧的精选内容，以每周邮件推送的方式。这种内容推送已经很多站点在做且很成熟了</p>'
            }, {
                element: '#t_hostress',
                title: '美女主播',
                placement: 'left',
                content: '<p>还是原来的主播，还是那么的动人</p>'
            }, {
                element: '#t_games',
                title: '疯狂的游戏',
                placement: 'left',
                content: '<p>还是原来的游戏，依旧风骚的推广~</p>'
            }, {
                element: '#t_vips',
                title: '我们的上帝',
                placement: 'left',
                content: '<p>豪，我们做朋友吧 :)</p>'
            }, {
                element: '#t_notice',
                title: '广而告之',
                placement: 'left',
                content: '<p>还是原来的公告</p>'
            }, {
                element: '#t_copyright',
                title: '几乎没人看',
                placement: 'left',
                content: '<p>几乎是原样,几乎得保留</p><p>但将其从人们无法看到的页脚移到了这里，让中间的下拉加载更科学</p>'
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