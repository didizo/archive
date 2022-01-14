$(function () {
  //----------------------------------------------
  $('#TabContent li').on('click', function (){
    // $('.tab div').toggleClass('on');

    let i = $(this).index();
    console.log(i)
    $(this).addClass('on').siblings().removeClass('on');
    $('#TabContent .tab>div').eq(i).addClass('on').siblings().removeClass('on');
  });


  //---------------------------------------------------
});
 

    //$(this) 이벤트가 적용되는 대상
    //$(this).index() 대상의 인덱스 번호 0,1,2
    //변수 값을 넣어놓는 저장소 메모리
    //함수 어떤일을 저장해놓는 저장소