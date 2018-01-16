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
        // 往年分数趋势
        // ==========================

        var echartsC = echarts.init(document.getElementById('tpl-echarts-C'));

        optionC = {
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                top: '0',
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            title: {
                left: 'center',
                text: '往年分数趋势',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'normal',
                }
            },            
            legend: {
                top: 'bottom',
                data: ['定性总分', '定量总分', '总分', '所有博物馆总平均分']
            },
            
            color: ['#c0d8f0', '#c0d8a8', '#d8d8d8','#f0c048','#ffd890','a8d890'],
            
            xAxis: [{
                type: 'category',
                data: ['2013', '2014', '2015', '2016', '2017']
            }],
            yAxis: [{
                    type: 'value',
                    name: '分数',
                    min: 0,
                    max: 120,
                    interval: 40,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [{
                    name: '定性总分',
                    type: 'bar',
                    data: [89.68, 88.52, 87.34, 92.14, 95.6]
                },
                {
                    name: '定量总分',
                    type: 'bar',
                    data: [70.71, 75.63, 82.26, 88.77, 88.81]
                },
                {
                    name: '总分',
                    type: 'bar',
                    data: [82.03, 78.26,83.35, 89.95, 92.33]
                },
                {
                    name: '所有博物馆总平均分',
                    type: 'line',
                    data: [92.03, 77.26,89.35, 73.95, 79.33]
                }
            ]
        };

        echartsC.setOption(optionC);

        // ==========================
        // 往年排名趋势
        // ==========================

        var echartsD = echarts.init(document.getElementById('tpl-echarts-D'));

        optionD = {
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                top: '0',
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            color: ['#90a8d8', '#a8d890','#f0c048','#a89090','#f0a890'],
            title: {
                left: 'center',
                text: '往年排名趋势',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'normal',
                }
            },
            legend: {
                top: 'bottom',
                data: ['定性排名', '定量排名', '总排名']
            },
            xAxis: [{
                type: 'category',
                data: ['2013', '2014', '2015', '2016', '2017']
            }],
            yAxis: [{
                    type: 'value',
                    name: '排名',
                    min: 0,
                    max: 100,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [{
                    name: '定性排名',
                    type: 'line',
                    data: [8,9,12,2,4]
                },
                {
                    name: '定量排名',
                    type: 'line',
                    data: [4,6,2,6,1]
                },
                {
                    name: '总排名',
                    type: 'line',
                    data: [6,4,2,9,3]
                }
            ]
        };

        echartsD.setOption(optionD);
        // ==========================
        // 往年分数趋势-定性一级
        // ==========================

        var echartsF = echarts.init(document.getElementById('tpl-echarts-F'));


        optionF = {
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                top: '0',
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            legend: {
                top: 'bottom',
                data: ['藏品管理', '科学研究', '陈列展览与社会教育', '公共关系与服务', '博物馆管理与发展建设']
            },
            title: {
                left: 'center',
                text: '往年分数趋势 - 定性一级',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'normal',
                }
            },  
            color: ['#90a8d8', '#a8d890','#f0c048','#a89090','#f0a890'],          
            xAxis: [{
                type: 'category',
                data: ['2013', '2014', '2015', '2016', '2017']
            }],
            yAxis: [{
                    type: 'value',
                    name: '分数',
                    min: 0,
                    max: 100,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [{
                    name: '藏品管理',
                    type: 'line',
                    data: [88,89,92,82,84]
                },
                {
                    name: '科学研究',
                    type: 'line',
                    data: [94,86,82,76,91]
                },
                {
                    name: '陈列展览与社会教育',
                    type: 'line',
                    data: [96,84,92,89,83]
                },
                {
                    name: '公共关系与服务',
                    type: 'line',
                    data: [91,74,89,83,85]
                },
                {
                    name: '博物馆管理与发展建设',
                    type: 'line',
                    data: [75,80,90,87,78]
                }
            ]
        };

        echartsF.setOption(optionF);


        // 往年排名趋势-定性一级
        // ==========================

        var echartsG = echarts.init(document.getElementById('tpl-echarts-G'));

        optionG = {
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                top: '0',
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            color: ['#90a8d8', '#a8d890','#f0c048','#a89090','#f0a890'],
            legend: {
                top: 'bottom',
                data: ['藏品管理', '科学研究', '陈列展览与社会教育', '公共关系与服务', '博物馆管理与发展建设']
            },
            title: {
                left: 'center',
                text: '往年排名趋势 - 定性一级',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'normal',
                }
            },            
            xAxis: [{
                type: 'category',
                data: ['2013', '2014', '2015', '2016', '2017']
            }],
            yAxis: [{
                    type: 'value',
                    name: '排名',
                    min: 0,
                    max: 100,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [{
                    name: '藏品管理',
                    type: 'line',
                    data: [8,9,2,2,4]
                },
                {
                    name: '科学研究',
                    type: 'line',
                    data: [9,12,5,13,1]
                },
                {
                    name: '陈列展览与社会教育',
                    type: 'line',
                    data: [6,7,8,1,2]
                },
                {
                    name: '公共关系与服务',
                    type: 'line',
                    data: [5,10,9,3,5]
                },
                {
                    name: '博物馆管理与发展建设',
                    type: 'line',
                    data: [5,6,3,7,7]
                }
            ]
        };

        echartsG.setOption(optionG);

        // ==========================
        // 往年分数趋势-定量一级
        // ==========================

        var echartsH = echarts.init(document.getElementById('tpl-echarts-H'));


        optionH = {
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                top: '0',
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            color: ['#90a8d8', '#a8d890','#f0c048','#a89090','#f0a890'],
            legend: {
                top: 'bottom',
                data: ['藏品', '科学研究', '展览与教育', '人才培养']
            },
            title: {
                left: 'center',
                text: '往年分数趋势 - 定量一级',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'normal',
                }
            },            
            xAxis: [{
                type: 'category',
                data: ['2013', '2014', '2015', '2016', '2017']
            }],
            yAxis: [{
                    type: 'value',
                    name: '分数',
                    min: 0,
                    max: 100,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [{
                    name: '藏品',
                    type: 'line',
                    data: [88,89,92,82]
                },
                {
                    name: '科学研究',
                    type: 'line',
                    data: [94,86,82,76]
                },
                {
                    name: '展览与教育',
                    type: 'line',
                    data: [96,84,89,83]
                },
                {
                    name: '人才培养',
                    type: 'line',
                    data: [91,74,89,85]
                }
            ]
        };

        echartsH.setOption(optionH);


        // 往年排名趋势-定量一级
        // ==========================

        var echartsI = echarts.init(document.getElementById('tpl-echarts-I'));


        optionI = {
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                top: '0',
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            color: ['#90a8d8', '#a8d890','#f0c048','#a89090','#f0a890'],
            legend: {
                top: 'bottom',
                data: ['藏品', '科学研究', '展览与教育', '人才培养']
            },
            title: {
                left: 'center',
                text: '往年排名趋势 - 定量一级',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'normal',
                }
            },  
            xAxis: [{
                type: 'category',
                data: ['2013', '2014', '2015', '2016', '2017']
            }],
            yAxis: [{
                    type: 'value',
                    name: '排名',
                    min: 0,
                    max: 100,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [{
                    name: '藏品',
                    type: 'line',
                    data: [8,9,2,4]
                },
                {
                    name: '科学研究',
                    type: 'line',
                    data: [9,12,5,13]
                },
                {
                    name: '展览与教育',
                    type: 'line',
                    data: [6,7,8,2]
                },
                {
                    name: '人才培养',
                    type: 'line',
                    data: [10,9,3,5]
                }
            ]
        };

        echartsI.setOption(optionI);


        

       
    }
}