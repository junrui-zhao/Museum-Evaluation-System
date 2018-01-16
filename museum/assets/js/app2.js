$(function() {

        var $fullText = $('.admin-fullText');
        $('#admin-fullscreen').on('click', function() {
            $.AMUI.fullscreen.toggle();
        });

        $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
            $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
        });


        var dataType = $('body').attr('data-type');
        for (key in pageData) {
            if (key == dataType) {
                pageData[key]();
            }
        }

        $('.tpl-switch').find('.tpl-switch-btn-view').on('click', function() {
            $(this).prev('.tpl-switch-btn').prop("checked", function() {
                    if ($(this).is(':checked')) {
                        return false
                    } else {
                        return true
                    }
                })
                // console.log('123123123')

        })
    })
    // ==========================
    // 侧边导航下拉列表
    // ==========================

$('.tpl-left-nav-link-list').on('click', function() {
        $(this).siblings('.tpl-left-nav-sub-menu').slideToggle(80)
            .end()
            .find('.tpl-left-nav-more-ico').toggleClass('tpl-left-nav-more-ico-rotate');
    })
    // ==========================
    // 头部导航隐藏菜单
    // ==========================

$('.tpl-header-nav-hover-ico').on('click', function() {
    $('.tpl-left-nav').toggle();
    $('.tpl-content-wrapper').toggleClass('tpl-content-wrapper-hover');
})


// 页面数据
var pageData = {
    // ===============================================
    // 首页
    // ===============================================
    'index': function indexData() {


        var myScroll = new IScroll('#wrapper', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            preventDefault: false,
            fadeScrollbars: true
        });

        var myScrollA = new IScroll('#wrapperA', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            preventDefault: false,
            fadeScrollbars: true
        });

        var myScrollB = new IScroll('#wrapperB', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            preventDefault: false,
            fadeScrollbars: true
        });

    },
    // ===============================================
    // 图表页
    // ===============================================
    'chart': function chartData() {

        // ==========================
        // 百度图表A http://echarts.baidu.com/
        // ==========================

        var echartsE = echarts.init(document.getElementById('tpl-echarts-E'));

        optionE = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
                        top: '0',
                        feature: {
                            dataView: { show: true, readOnly: false },
                            restore: { show: true },
                            saveAsImage: { show: true }
                        }
                    },
            legend: {
                orient: 'horizontal',
                top: 'bottom',
                data: ['历史文化与综合类','自然、科技与专题类','纪念类','遗址类']
            },
            color: ['#90a8d8', '#a8d890','#f0c048','#a89090','#f0a890'],
            title: {
                left: 'center',
                text: '博物馆类型分布',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'normal',
                }
            },
            series : [
                {
                    name: '博物馆类型',
                    type: 'pie',
                    radius : '60%',
                    center: ['50%', '50%'],
                    data:[
                        {value:35, name:'历史文化与综合类'},
                        {value:10, name:'自然、科技与专题类'},
                        {value:34, name:'纪念类'},
                        {value:15, name:'遗址类'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        echartsE.setOption(optionE);

        // ==========================
        // 百度图表A http://echarts.baidu.com/
        // ==========================

        var echartsA = echarts.init(document.getElementById('tpl-echarts-A'));

        optionA = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
                        top: '0',
                        feature: {
                            dataView: { show: true, readOnly: false },
                            restore: { show: true },
                            saveAsImage: { show: true }
                        }
                    },
            legend: {
                orient: 'horizontal',
                top: 'bottom',
                data: ['省级及省级以上','其他']
            },
            color: ['#90a8d8', '#a8d890','#f0c048','#a89090','#f0a890'],
            title: {
                left: 'center',
                text: '博物馆级别分布',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'normal',
                }
            },
            series : [
                {
                    name: '博物馆类型',
                    type: 'pie',
                    radius : '60%',
                    center: ['50%', '50%'],
                    data:[
                        {value:65, name:'省级及省级以上'},
                        {value:20, name:'其他'},
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        echartsA.setOption(optionA);
        

       
    }
}