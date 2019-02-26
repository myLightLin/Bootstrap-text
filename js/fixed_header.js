/**
 * Created by 林光亮 on 2017/7/16.
 */
$(document).ready(function () {
    var dropdn = $(".dropdn");
    var dropdn1 = $(".dropdn1");
    var dropdn2 = $(".dropdn2");
    var dropdn3 = $(".dropdn3");
    var dropdn4 = $(".dropdn4");
    var dropdn5 = $(".dropdn5");

    $('.dropdn, .dropdn1, .dropdn2, .dropdn3, .dropdn4, .dropdn5').hide();
    //下拉菜单
    $(".drop").on('click', function () {
        if (dropdn.css("display") == "none") {
            dropdn.slideDown(300);
        } else {
            dropdn.slideUp(300);
        }
    });
    $(".drop1").on('click', function () {
        if (dropdn1.css("display") == "none") {
            dropdn1.slideDown(300);
        } else {
            dropdn1.slideUp(300);
        }
    });
    $(".drop2").on('click', function () {
        if (dropdn2.css("display") == "none") {
            dropdn2.slideDown(300);
        } else {
            dropdn2.slideUp(300);
        }
    });

    $(".drop3").on('click', function () {
        if (dropdn3.css("display") == "none") {
            dropdn3.slideDown(300);
        } else {
            dropdn3.slideUp(300);
        }
    });

    $(".drop4").on('click', function () {
        if (dropdn4.css("display") == "none") {
            dropdn4.slideDown(300);
        } else {
            dropdn4.slideUp(300);
        }
    });

    $(".drop5").on('click', function () {
        if (dropdn5.css("display") == "none") {
            dropdn5.slideDown(300);
        } else {
            dropdn5.slideUp(300);
        }
    });

    //鼠标移入时侧边导航图标变色
    $(".list-group-item").mouseover(function () {
        $(this).children("i").css('color', '#f34541');
    }).mouseout(function () {
        $(this).children("i").css('color', '');
    });

    //点击表格收缩
    $(".nav_btn").click(function () {
        var span = $(".list-group-item span");
        var a = $(".list a");
        var center = $(".twopage_center");
        var content =  $(".twopage_content");
        var bread = $(".bread");

        if(span.css('visibility')== 'visible' || a.css('width')=='18%' ||
                center.css('left') == '18%' ||
                center.css('width') == '82%'||
                content.css('left') =='18%' ||
                bread.css('left') =='68%'
           ){
            span.css('visibility','hidden');
            a.css('width','3%');
            center.css({
                'left':'3%',
                'width':'97%'
            });
            content.css({
                'left':'3%'
            });
            bread.css({
                'left':'83%'
            });
        }else{
           span.css('visibility','visible');
            a.css('width','18%');
            center.css({
                'left':'18%',
                'width':'82%'
            });
            content.css({
                'left':'18%'
            });
            bread.css({
                'left':'68%'
            });
        }
    });
});
