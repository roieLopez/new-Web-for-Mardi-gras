$(document).on('scroll', function() {
  // console.log($(this).scrollTop());

  if ($(this).scrollTop() == 0) { //if(document == 0){}
      $('.titleWeOffer').removeClass('title');
      $('.containerMenu').removeClass('animationMenu');
      $('.containerIframeRight').removeClass('animationIframeRight');
      $('.containerIframe').removeClass('animationIframeLeft');
      $('.testRoie').removeClass('animationMenuAbout');
      $('.video').removeClass('videoAnim');
      
      // $('#btt').addClass('display-none');
  } else {
      $('.titleWeOffer').addClass('title');
      $('.titleWeOffer').css("display","block");
      $('.containerMenu').addClass('animationMenu');
      $('.containerIframeRight').addClass('animationIframeRight');
      $('.containerIframe').addClass('animationIframeLeft');
      $('.testRoie').addClass('animationMenuAbout');
      $('.video').addClass('videoAnim');
      // $('#btt').removeClass('display-none');
  }
});

console.log($(document));