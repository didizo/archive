$(function () {
  //-------------

  //스크롤할때 헤드변경 addClass
  $(window).on('scroll', function () {
    var sct = $(window).scrollTop();
    console.log(sct);
    if (sct > 0) {
      $('#header').addClass('on');
    } else {
      $('#header').removeClass('on');
    }
  })

  //메인슬라이드
  $('.main_slider').slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: true,

  });

  //제품슬라이드
  $('.pr_slider').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    dots: true,
  });

  $('#content01 .btn i.xi-arrow-left').on('click', function () {
    $('.pr_slider').slick('slickPrev');
  })
  $('#content01 .btn i.xi-arrow-right').on('click', function () {
    $('.pr_slider').slick('slickNext');
  })
  //----------
})