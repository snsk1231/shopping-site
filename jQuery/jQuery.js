$(function(){
   $('.page_top').click(function(){
       $('body,html').animate({
           scrollTop:0
       },500);
       return false;
   }) ;
   $(window).load(function(){
  $(".pro_list img").click(function(){
    var img_src = $(this).attr("src");
    $(".main_product img").attr("src", img_src);
  });
});
});