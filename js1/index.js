$(function(){

	// 导航1
	// $(".nav ul li:gt(0)").mouseover(function() {
	// 	$(this).css("backgroundColor","#303035")
	// });
	// $(".nav ul li:gt(0)").mouseout(function() {
	// 	$(this).css("backgroundColor","#3e3d43")
	// });


// 导航2
$(".nav ul li").mouseover(function() {
 $(this).children("ul").stop().slideDown();
      });

$(".nav ul li").mouseleave(function() {
$(this).children("ul").stop().slideUp();
      });

});


myFocus.set({
  id:'lb',//书写最外层id名

  pattern:'mF_fscreen_tb',//书写风格名

   loadIMGTimeout:'0',//网站一打开就有轮播图，延迟时间为0

   time:3,//图片切换时间间隔(秒)

    txtHeight:'0',//文字层高度设置(像素),'default'为默认高度，0为隐藏图片文字(包括标题内容),null的出现跟该属性有关

	width:630,//设置图片区域宽度(像素)

	 height:318,//设置图片区域高度(像素)

	  trigger:'click',//触发切换模式:'click'(点击)/'mouseover'(悬停)

});


 $(".ranking p").mouseenter(function () {
        $(this).children("span").stop().animate({top:0});
        
        
      }).mouseleave(function () {
        $(this).children("span").stop().animate({top:100});
      });




$(".pic").mouseover(function() {
      $(this).children("p").stop().fadeIn(600);
    });
    $(".pic").mouseleave(function() {
      $(this).children("p").stop().fadeOut();
    });





    setTimeout(function(){
    $('.mysite').animate({bottom:'0'});
   
}, 3000);