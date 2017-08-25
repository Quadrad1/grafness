$(document).ready(function() {
  //кнопка меню и адаптивное меню.
  $(".mobile-menu_btn").click(function(){
    $("#item-1").toggleClass("switch-1");
    $("#item-2").toggleClass("switch-2");
    $("#item-3").toggleClass("switch-3");
    $(".header-menu").slideToggle(300);
  });
  //popup окна
  $('.gallery-link').magnificPopup({
		type : 'image',
    gallery: {
			enabled: true,
			navigateByImgClick: true,

		},
	});

  //якоря н сайте
  $(".slide-down").on("click", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 1000);
   });

   $(".question").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});