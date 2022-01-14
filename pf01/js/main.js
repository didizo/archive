

$(function(){

 
 

//collection slider
$('#collection .pr_slider').slick({
  arrows:false,
  autoplay:true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 500,
});
$('#collection .pr_slider').on('afterChange', function(e,s,c){
  console.log(c)  //0--0 3--1 6--2
  $('.slider_line ul li').eq(c/3).addClass('on').siblings().removeClass('on');

});
$('.slider_line ul li').on('click', function(){
  var idx=$(this).index();
  $('#collection .pr_slider').slick("slickGoTo", idx)
});

//youtube video preview
$("#mv01").YTPlayer({ 
  videoURL:'https://youtu.be/2I8URrTqObI',
  containment:'self',
  autoPlay:true,
  mute: true,
  startAt:0,
  opacity:1,
  showControls: false, 
  playOnlyIfVisible:true,
  optimizeDisplay:false,
 })
 $("#mv02").YTPlayer({ 
   videoURL:'https://youtu.be/A0M718N40_Q',
   containment:'self',
   autoPlay:true,
   mute: true,
   startAt:0,
   opacity:1,
   showControls: false, 
   playOnlyIfVisible:true,
   //optimizeDisplay:false,
  })
  
  $("#mv03").YTPlayer({ 
    videoURL:'https://youtu.be/csR9tvWTXCs',
    containment:'self',
    autoPlay:true,
    mute: true,
  startAt:0,
  opacity:1,
  showControls: false, 
  playOnlyIfVisible:true,
  //optimizeDisplay:false,
});


$('#iconic_item .pr_slider').slick({
  arrows:false,
  autoplay:true,
  slidesToShow: 4,
  dots:true,
});
 

//--------------
});

//javascript
const header = document.querySelector('#header');
const headerHeight = header.getBoundingClientRect().height; 

window.addEventListener('scroll', ()=>{
  if (window.scrollY > headerHeight) { 
    // header.classList.add('on'); 
    header.setAttribute('style','padding: 5px; background: #fff; width:100%')
  }else if(window.scrollY <headerHeight) {
    // header.classList.remove('on'); 
    header.setAttribute('style','padding: 0;')
  }
})