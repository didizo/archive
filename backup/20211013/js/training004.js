// $(function() {


//     $(".mopen").on('click', function(){
//       $('nav').toggleClass('on');
//     });
//     $('nav>ul>li>a').on('click', function(){
//       if($('nav').hasClass('on')){
//         $(this).next().slideToggle();
//       }
//     });

//     $(window).on('resize', function(){
//       $('nav>ul>li .submenu').removeAttr('style');
//     });
// })

 
const mopen = document.querySelector(".mopen");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");
const submenu = document.querySelector(".submenu");

mopen.addEventListener("click",() => {
  // console.log('click!');
  nav.classList.toggle("on");
});
