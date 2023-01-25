jQuery(function(){
    var menuOffset = jQuery('.container_menu')[0].offsetTop;
    jQuery(document).bind('ready scroll',function() {
      var docScroll = jQuery(document).scrollTop();
      if(docScroll >= menuOffset) {
        jQuery('.container_menu').addClass('sticky').css('width',jQuery('#masthead').width());
      } else {
        jQuery('.container_menu').removeClass('sticky').removeAttr("width");
      }
     });
  });