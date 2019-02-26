/**
 * Created by 林光亮 on 2017/7/16.
 */
$(document).ready(function () {
    var dropdn=$(".dropdn");
    var dropdn1=$(".dropdn1");
    var dropdn2=$(".dropdn2");
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
        var test = $(".twopage_test,.twopage_test2,.twopage_test3,.twopage_test4,.twopage_test6");
        var content =  $(".twopage_content");
        var bread = $(".bread");

        if(span.css('visibility')== 'visible' || a.css('width')=='18%' ||
           test.css('width') == '80%' ||
            test.css('left') == '19%' ||
            content.css('left') =='18%' ||
            bread.css('left') =='68%'
        ){
            span.css('visibility','hidden');
            a.css('width','3%');
            a.css('height','1.8%');
            test.css({
                'left':'3%',
                'width':'97%'
            });
            content.css({
                'left':'3%'
            });
            bread.css({
                'left':'90%'
            });
        }else{
            span.css('visibility','visible');
            a.css('width','18%');
            a.css('height','');
            test.css({
                'left':'19%',
                'width':'80%'
            });
            content.css({
                'left':'18%'
            });
            bread.css({
                'left':'75%'
            });
        }
    });


    $("#button2").click(function () {
        var height = $('.daohan').height();
        var table =  $("#table1,#div1");
        var test =  $(".twopage_test");
        if(table.css('visibility')=='visible'){
            table.css('visibility','hidden');
            test.css('height',height);
        }else{
            table.css('visibility','visible');
            test.css('height','302px');
        }
    });
    $('#button1').click(function () {
        var test =  $(".twopage_test");
        test.css('display','none');
    });

    $("#button4").click(function () {
        var height = $('.daohan').height();
        var table =  $("#table2");
        var test =  $(".twopage_test2");
        if(table.css('visibility')=='visible'){
            table.css('visibility','hidden');
            test.css('height',height);
        }else{
            table.css('visibility','visible');
            test.css('height','302px');
        }
    });
    $('#button3').click(function () {
        var test =  $(".twopage_test2");
        test.css('display','none');
    });

    $('#button5').click(function () {
        var test =  $(".twopage_test3");
        test.css('display','none');
    });
    $("#button6").click(function () {
        var height = $('.daohan').height();
        var table =  $("#table3,#div3");
        var test =  $(".twopage_test3");
        if(table.css('visibility')=='visible'){
            table.css('visibility','hidden');
            test.css('height',height);
        }else{
            table.css('visibility','visible');
            test.css('height','302px');
        }
    });

    $('#button7').click(function () {
        var test =  $("#twopage_test4");
        test.css('display','none');
    });
    $("#button8").click(function () {
        var height = $('.daohan').height();
        var table =  $("#table4,#div4");
        var test =  $("#twopage_test4");
        if(table.css('visibility')=='visible'){
            table.css('visibility','hidden');
            test.css('height',height);
        }else{
            table.css('visibility','visible');
            test.css('height','302px');
        }
    });

    $('#button9').click(function () {
        var test =  $("#twopage_test5");
        test.css('display','none');
    });
    $("#button10").click(function () {
        var height = $('.daohan5').height();
        var table =  $("#table5,#div5,#row,#row2");
        var test =  $("#twopage_test5");
        if(table.css('visibility')=='visible'){
            table.css('visibility','hidden');
            test.css('height',height);
        }else{
            table.css('visibility','visible');
            test.css('height','');
        }
    });

    $('#button11').click(function () {
        var test =  $(".twopage_test6");
        test.css('display','none');
    });
    $("#button12").click(function () {
        var height = $('.daohan6').height();
        var table =  $("#table6,#div6,#row-fiuld1,#row-fiuld2");
        var test =  $(".twopage_test6");
        if(table.css('visibility')=='visible'){
            table.css('visibility','hidden');
            test.css('height',height);
        }else{
            table.css('visibility','visible');
            test.css('height','');
        }
    });
});


