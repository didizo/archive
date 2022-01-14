$(function () {
  // let con01Top = $('.con02').offset().top;

  // $(window).on('scroll', function(){
  //   let scrollTop =$(window).scrollTop() ;

  //   console.log(scrollTop,con01Top);
  //   if(scrollTop>con01Top /2) {
  //     $('.con02').addClass('on');
  //   }else{
  //     $('.con02').removeClass('on');
  //   }
  // });
  $(window).on('scroll', function () {
    let sct =$(window).scrollTop();
    $('.section').each(function(idx,item){
      // console.log(idx,item);
      let secTop =$(this).offset().top;
      if(sct >secTop -300) {
        $(this).addClass('on');
      }else {
        $(this).removeClass('on');
      }
    })
  })
})

// const section =document.querySelectorAll('.section');