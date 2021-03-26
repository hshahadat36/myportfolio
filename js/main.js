$(document).ready(function(){
    var $logo = $('#logo');
    
     if(location.href.indexOf("#") != -1){
         $logo.show();
     }
    $('.menu .tabs a').click(function() {
        $logo.fadeIn('slow');
    });
    $('.tab-profile').click(function() {
        $logo.fadeOut('slow');
    });
    var $content = $("#content");
    $content.easytabs({
        animate : true,
        updateHash : false,
        transitionIn : 'slideDown',
        transitionOut : 'slideUp',
        animationSpeed : 600,
        tabs : ".tmenu",
        tabActiveClass : 'active',
    });
    $content.find('.tabs li a').hover(
        function(){
            $(this).stop().animate({marginTop: "-7px"},200);
        },function(){
            $(this).stop().animate({marginTop: "0px"},300);
        }
    );
    $('#setting_icon').click(function() {
        $('.color_box').toggle('slow');
    });
    $('#red_color').click(function () {
        $('.text_color').addClass('red');
        $('.experience').addClass('background_red');
        $('.all_skills').addClass('background_red');
        $('.sn').addClass('border_red');
        $('.text_color').removeClass('yellow');
        $('.experience').removeClass('background_yellow');
        $('.all_skills').removeClass('background_yellow');
        $('.sn').removeClass('border_yellow');
        
        $('.text_color').removeClass('blue');
        $('.experience').removeClass('background_blue');
        $('.all_skills').removeClass('background_blue');
        $('.sn').removeClass('border_blue');
        $('.text_color').removeClass('green');
        $('.experience').removeClass('background_green');
        $('.all_skills').removeClass('background_green');
        $('.sn').removeClass('border_green');
        
    });
    $('#yellow_color').click(function () {
        $('.text_color').addClass('yellow');
        $('.experience').addClass('background_yellow');
        $('.all_skills').addClass('background_yellow');
        $('.sn').addClass('border_yellow');
        $('.text_color').removeClass('red');
        $('.experience').removeClass('background_red');
        $('.all_skills').removeClass('background_red');
        $('.sn').removeClass('border_red');
        
        $('.text_color').removeClass('blue');
        $('.experience').removeClass('background_blue');
        $('.all_skills').removeClass('background_blue');
        $('.sn').removeClass('border_blue');
        $('.text_color').removeClass('green');
        $('.experience').removeClass('background_green');
        $('.all_skills').removeClass('background_green');
        $('.sn').removeClass('border_green');
    });
    $('#blue_color').click(function () {
        $('.text_color').addClass('blue');
        $('.experience').addClass('background_blue');
        $('.all_skills').addClass('background_blue');
        $('.sn').addClass('border_blue');
        
        $('.text_color').removeClass('red');
        $('.experience').removeClass('background_red');
        $('.all_skills').removeClass('background_red');
        $('.sn').removeClass('border_red');
        
        $('.text_color').removeClass('yellow');
        $('.experience').removeClass('background_yellow');
        $('.all_skills').removeClass('background_yellow');
        $('.sn').removeClass('border_yellow');
        $('.text_color').removeClass('green');
        $('.experience').removeClass('background_green');
        $('.all_skills').removeClass('background_green');
        $('.sn').removeClass('border_green');
    });
    $('#green_color').click(function () {
        $('.text_color').addClass('green');
        $('.experience').addClass('background_green');
        $('.all_skills').addClass('background_green');
        $('.sn').addClass('border_green');
        
        $('.text_color').removeClass('red');
        $('.experience').removeClass('background_red');
        $('.all_skills').removeClass('background_red');
        $('.sn').removeClass('border_red');
        $('.text_color').removeClass('yellow');
        $('.experience').removeClass('background_yellow');
        $('.all_skills').removeClass('background_yellow');
        $('.sn').removeClass('border_yellow');
        $('.text_color').removeClass('blue');
        $('.experience').removeClass('background_blue');
        $('.all_skills').removeClass('background_blue');
        $('.sn').removeClass('border_blue');
    });
});