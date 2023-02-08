$('#menu-movil').on('click', function(){
    $('.container_menu_wrap').toggleClass('bg_menu');
    $('.nav_ul').toggleClass('active');
});

$('.nav_li').on('click', function(){
    $('.container_menu_wrap').removeClass('bg_menu');
    $('.nav_ul').removeClass('active');
});
