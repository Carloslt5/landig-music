$('#menu-movil').on('click', function(){
    $('.wrap-menu').toggleClass('bg_menu');
    $('.nav_ul').toggleClass('active');
});

$('.nav_li').on('click', function(){
    $('.wrap-menu').removeClass('bg_menu');
    $('.nav_ul').removeClass('active');
});
