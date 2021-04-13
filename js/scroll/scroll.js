$(document).on('scroll', function() {
  // console.log($(this).scrollTop());

  if ($(this).scrollTop() == 0) { //if(document == 0){}
      $('.titleWeOffer').removeClass('title');
      $('.containerMenu').removeClass('animationMenu');
      $('.containerIframeRight').removeClass('animationIframeRight');
      $('.containerIframe').removeClass('animationIframeLeft');
      $('.animationMenuA').removeClass('animationMenuAbout');
      $('.video').removeClass('videoAnim');
  } else {
      $('.titleWeOffer').addClass('title');
      $('.titleWeOffer').css("display","block");
      $('.containerMenu').addClass('animationMenu');
      $('.containerIframeRight').addClass('animationIframeRight');
      $('.containerIframe').addClass('animationIframeLeft');
      $('.animationMenuA').addClass('animationMenuAbout');
      $('.video').addClass('videoAnim');
  }
});

// console.log($(document));