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
        var test = $(".twopage_test");
        var h2 = $(".twopage_h2");
        var content =  $(".twopage_content");
        var bread = $(".bread");

        if(span.css('visibility')== 'visible' || a.css('width')=='18%' ||
            test.css('width') == '80%' ||
            test.css('left') == '19%' ||
            h2.css('width') == '80%' ||
            h2.css('left') == '19%' ||
            content.css('left') =='18%' ||
            bread.css('left') =='68%'
        ){
            span.css('visibility','hidden');
            a.css('width','3%');
            a.css('height','4%');
            test.css({
                'left':'3%',
                'width':'97%'
            });
            h2.css({
                'left':'3%',
                'width':'97%'
            });
            content.css({
                'left':'3%'
            });
            bread.css({
                'left':'85%'
            });
        }else{
            span.css('visibility','visible');
            a.css('width','18%');
            a.css('height','');
            test.css({
                'left':'19%',
                'width':'80%'
            });
            h2.css({
                'left':'19%',
                'width':'80%'
            });
            content.css({
                'left':'18%'
            });
            bread.css({
                'left':'70%'
            });
        }
    });

    $('#button1').click(function () {
        var test =  $("#twopage_test1");
        test.css('display','none');
    });
    $("#button2").click(function () {
        var height = $('.daohan').height();
        var table =  $("#form1,#box1");
        var test =  $("#twopage_test1");
        if(table.css('visibility')=='visible'){
            table.css('visibility','hidden');
            test.css('height','53px');
            $('.daohan2').css('height',height);
        }else{
            table.css('visibility','visible');
            test.css('height','auto');
        }
    });

    $('#button3').click(function () {
        var test =  $("#twopage_test2");
        test.css('display','none');
    });
    $("#button4").click(function () {
        var height = $('.daohan2').height();
        var table =  $("#form2,#box2");
        var test =  $("#twopage_test2");
        if(table.css('visibility')=='visible'){
            table.css('visibility','hidden');
            test.css('height',height);
        }else{
            table.css('visibility','visible');
            test.css('height','auto');
        }
    });

});

//js表单验证
window.onload = function () {
    var ainput = document.getElementsByTagName("input");
    var ap = document.getElementsByTagName("p");
    var Name = ainput[1];
    var name_msg = ap[0];
    var email = ainput[2];
    var e_msg = ap[1];
    var pwd = ainput[3];
    var pwd_msg = ap[2];
    var pwd2 = ainput[4];
    var pwd2_msg = ap[3];
    var bdy = ainput[6];
    var bdy_msg = ap[4];
    var ok1=false;
    var ok2=false;
    var ok3=false;
    var ok4=false;
    var ok5=false;

    var ok6=false;
    var ok7=false;
    var ok8=false;
    var ok9=false;
    var ok10=false;
    var ok11=false;
    var ok12=false;

    var secret = ainput[7];
    var sec_msg = ap[5];
    var num = ainput[8];
    var num_msg = ap[6];
    var ip = ainput[9];
    var ip_msg = ap[7];
    var url = ainput[10];
    var url_msg = ap[8];
    var phe = ainput[11];
    var phe_msg = ap[9];
    var IBAN = ainput[12];
    var IBAN_msg = ap[10];
    var VIN = ainput[13];
    var VIN_msg = ap[11];


    //用户名验证
    Name.onblur = function () {
        if(this.value == ""){
            name_msg.style.display = 'block';
            name_msg.innerHTML = 'This field is required.';
        }else{
            ok1 = true;
    }
    };
    //邮箱验证
    email.onblur = function () {
        var re=/^\w+((-\w+) (\.\w+))*\@[A-Za-z0-9]+((\. -)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if(this.value == ""){
            e_msg.style.display = 'block';
            e_msg.innerHTML = 'Please enter a valid email address.';
        }else if(!(re.test(this.value))){
            e_msg.style.display = 'block';
            e_msg.innerHTML = 'Please enter a valid email address.';
        }else{
            e_msg.style.display = 'none';
            ok2=true;
        }
    };

    //密码验证
    pwd.onblur = function () {
        //不能为空
        if (this.value == "") {
            pwd_msg.style.display = 'block';
            pwd_msg.innerHTML = 'This field is required.';
        }
        //长度应为6个以上字符
        else if (this.value.length < 6) {
            pwd_msg.style.display = 'block';
            pwd_msg.innerHTML = 'Please enter at least 6 characters.';
        }else{
            pwd_msg.style.display = 'none';
            ok3=true;
        }
    };

    //重复密码验证
    pwd2.onblur = function () {
        //不能为空
        if (this.value == "") {
            pwd2_msg.style.display = 'block';
            pwd2_msg.innerHTML = 'This field is required.';
        }

        else if (this.value !=pwd.value) {
            pwd2_msg.style.display = 'block';
            pwd2_msg.innerHTML = 'Please enter the same value again.';
        }else{
            pwd2_msg.style.display = 'none';
            ok4=true;
        }
    };

    //生日验证
    bdy.onblur = function () {
        //不能为空
        if (this.value == "") {
            bdy_msg.style.display = 'block';
            bdy_msg.innerHTML = 'Please enter a valid date (ISO).';
        }
        //长度应在0-6之间
        else if (this.value.length <=0 || this.value.length >6) {
            bdy_msg.style.display = 'block';
            bdy_msg.innerHTML = 'Please enter a valid date (ISO).';
        }
        else{
            bdy_msg.style.display = 'none';
            ok5=true;
        }
    };

    $('.submit').click(function () {
       if(ok2 && ok5 && ok3 && ok4 && ok1){
           $('#form1').submit();
       }else{
           if(this.value == ""){
               name_msg.style.display = 'block';
               name_msg.innerHTML = 'This field is required.';
           }
           if(this.value == ""){
               e_msg.style.display = 'block';
               e_msg.innerHTML = 'Please enter a valid email address.';
           }else if(!(re.test(this.value))){
               e_msg.style.display = 'block';
               e_msg.innerHTML = 'Please enter a valid email address.';
           }
           if (this.value == "") {
               pwd_msg.style.display = 'block';
               pwd_msg.innerHTML = 'This field is required.';
           }
           //长度应为6个以上字符
           else if (this.value.length < 6) {
               pwd_msg.style.display = 'block';
               pwd_msg.innerHTML = 'Please enter at least 6 characters.';
           }
           if (this.value == "") {
               pwd2_msg.style.display = 'block';
               pwd2_msg.innerHTML = 'This field is required.';
           }

           else if (this.value !=pwd.value) {
               pwd2_msg.style.display = 'block';
               pwd2_msg.innerHTML = 'Please enter the same value again.';
           }
           if (this.value == "") {
               bdy_msg.style.display = 'block';
               bdy_msg.innerHTML = 'Please enter a valid date (ISO).';
           }
           //长度应在0-6之间
           else if (this.value.length <=0 || this.value.length >6) {
               bdy_msg.style.display = 'block';
               bdy_msg.innerHTML = 'Please enter a valid date (ISO).';
           }
           return false;
       }
    });

    //secret验证
    secret.onblur = function () {
        if(this.value == ""){
            sec_msg.style.display = 'block';
            sec_msg.innerHTML = 'This field is required.';
        }else if (this.value != "buga"){
            sec_msg.style.display = 'block';
            sec_msg.innerHTML = 'Please enter "buga"!';
        }else{
            sec_msg.style.display = 'none';
            ok6=true;
        }
    };
    var ref = /[^\w\u4e00-\u9fa5]/g;
    var re_t = /[^a-zA-Z]/g;
    //number验证
    num.onblur = function () {
        if(this.value == ""){
            num_msg.style.display = 'block';
            num_msg.innerHTML = 'This field is required.';
        }else if (this.value.length <=0 || this.value.length >11){
            num_msg.style.display = 'block';
            num_msg.innerHTML = 'Please enter a valid number.';
        }else if(ref.test(this.value) || !re_t.test(this.value)){
            num_msg.style.display = 'block';
            num_msg.innerHTML = 'Please enter a valid number.';
        }
        else{
            num_msg.style.display = 'none';
            ok7=true;
        }
    };

    //IP验证
    ip.onblur = function () {
        var re=/(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))$/;
        if(this.value == ""){
            ip_msg.style.display = 'block';
            ip_msg.innerHTML = 'This field is required.';
        }else if(!re.test(this.value)){
            ip_msg.style.display = 'block';
            ip_msg.innerHTML = 'Please enter a valid IP v4 address.';
        }else {
            ip_msg.style.display = 'none';
            ok8=true;
        }
    };

    //URL验证
    url.onblur = function () {
        if(this.value == ""){
            url_msg.style.display = 'block';
            url_msg.innerHTML = 'This field is required.';
        }else {
            url_msg.style.display = 'none';
            ok9=true;
        }
    };

    //USnumber验证
    phe.onblur = function () {
        var re=/((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        if(this.value == ""){
            phe_msg.style.display = 'block';
            phe_msg.innerHTML = 'This field is required.';
        }else if(!re.test(this.value)){
            phe_msg.style.display = 'block';
            phe_msg.innerHTML = 'Please specify a valid phone number.';
        }
        else {
            phe_msg.style.display = 'none';
            ok10=true;
        }
    };

    //IBAN验证
    IBAN.onblur = function () {
        var re_n = /[^\d]/g;
        var re_t = /[^a-zA-Z]/g;
        var re_h = /[^\w\u4e00-\u9fa5]/g;
        //不能为空
        if (this.value == "") {
            IBAN_msg.style.display = 'block';
            IBAN_msg.innerHTML = 'This field is required.';
        }
        //不能有特殊字符
        else if (re_h.test(this.value)) {
            IBAN_msg.style.display = 'block';
            IBAN_msg.innerHTML = 'Please specify a valid IBAN';
        }
        //不能全为数字
        else if (!re_n.test(this.value)) {
            IBAN_msg.style.display = 'block';
            IBAN_msg.innerHTML = 'Please specify a valid IBAN';
        }
        //不能全为字母
        else if (!re_t.test(this.value)) {
            IBAN_msg.style.display = 'block';
            IBAN_msg.innerHTML = 'Please specify a valid IBAN';
        }
        //OK
        else {
            IBAN_msg.style.display = 'none';
            ok11=true;
        }
    };
    //VIN验证
    VIN.onblur = function () {
      var re=/\d[A-Z]\d[A-Z]{3}\d[A-Z]{4}\d{6}$/g;
        //不能为空
        if (this.value == "") {
            VIN_msg.style.display = 'block';
            VIN_msg.innerHTML = 'This field is required.';
        }
        //必须是十七位码
        else if(this.value.length != 17){
            VIN_msg.style.display = 'block';
            VIN_msg.innerHTML = 'The specified vehicle identification number (VIN) is invalid.';
        }
        //VIN码格式
        else if(!re.test(this.value)){
            VIN_msg.style.display = 'block';
            VIN_msg.innerHTML = 'The specified vehicle identification number (VIN) is invalid.';
        }
        else {
            VIN_msg.style.display = 'none';
            ok12=true;
        }
    };


    $('.subcheck').click(function () {
        if(ok6 && ok7 && ok8 && ok9 && ok10 && ok11 && ok12){
            $('#form2').submit();
        }else{
            if(this.value == ""){
                sec_msg.style.display = 'block';
                sec_msg.innerHTML = 'This field is required.';
            }else if (this.value != "buga"){
                sec_msg.style.display = 'block';
                sec_msg.innerHTML = 'Please enter "buga"!';
            }
            if(this.value == ""){
                num_msg.style.display = 'block';
                num_msg.innerHTML = 'This field is required.';
            }else if (this.value.length <=0 || this.value.length >11){
                num_msg.style.display = 'block';
                num_msg.innerHTML = 'Please enter a valid number.';
            }else if(ref.test(this.value) || !re_t.test(this.value)){
                num_msg.style.display = 'block';
                num_msg.innerHTML = 'Please enter a valid number.';
            }
            if(this.value == ""){
                ip_msg.style.display = 'block';
                ip_msg.innerHTML = 'This field is required.';
            }else if(!re.test(this.value)){
                ip_msg.style.display = 'block';
                ip_msg.innerHTML = 'Please enter a valid IP v4 address.';
            }
            if(this.value == ""){
                url_msg.style.display = 'block';
                url_msg.innerHTML = 'This field is required.';
            }
            if(this.value == ""){
                phe_msg.style.display = 'block';
                phe_msg.innerHTML = 'This field is required.';
            }else if(!re.test(this.value)){
                phe_msg.style.display = 'block';
                phe_msg.innerHTML = 'Please specify a valid phone number.';
            }
            if (this.value == "") {
                IBAN_msg.style.display = 'block';
                IBAN_msg.innerHTML = 'This field is required.';
            }
            //不能有特殊字符
            else if (re_h.test(this.value)) {
                IBAN_msg.style.display = 'block';
                IBAN_msg.innerHTML = 'Please specify a valid IBAN';
            }
            //不能全为数字
            else if (!re_n.test(this.value)) {
                IBAN_msg.style.display = 'block';
                IBAN_msg.innerHTML = 'Please specify a valid IBAN';
            }
            //不能全为字母
            else if (!re_t.test(this.value)) {
                IBAN_msg.style.display = 'block';
                IBAN_msg.innerHTML = 'Please specify a valid IBAN';
            }
            if (this.value == "") {
                VIN_msg.style.display = 'block';
                VIN_msg.innerHTML = 'This field is required.';
            }
            //必须是十七位码
            else if(this.value.length != 17){
                VIN_msg.style.display = 'block';
                VIN_msg.innerHTML = 'The specified vehicle identification number (VIN) is invalid.';
            }
            //VIN码格式
            else if(!re.test(this.value)){
                VIN_msg.style.display = 'block';
                VIN_msg.innerHTML = 'The specified vehicle identification number (VIN) is invalid.';
            }
            return false;
        }
    });
};

