
$(function(){

	// 主导航
	
	$('.nav>li').eq(1).find('a').addClass('act');
	$('.nav>li').eq(1).find('a').css('color','white');
	$('.nav>li').eq(1).find('a').before('<img src="images/shape1.png"/>');

	$('.nav>li').click(function(){
		var n=$(this).index();
		$('.nav>li').find('a').removeClass('act');
		$(this).find('a').addClass('act');
		$(this).find('a').before('<img src="images/shape1.png"/>');
		$(this).siblings().find("img").remove();
		

		$('.nav>li').find('a').css('color','');
		$(this).find('a').css('color','white');

		$('.content .con').hide();
		$('.content .con').eq(n-1).show();
	})


	// 分页导航
	$('.about .menu>li').eq(0).addClass('act');
	$('.about .menu').on('click','li',function(){
		var a=$(this).index();
		$('.about .menu>li').removeClass('act');
		$(this).addClass('act');
		
		$('.about .con-box .chapter').hide();
		$('.about .con-box .chapter').eq(a).show();

	})

	$('.job .menu>li').eq(0).addClass('act');
	$('.job .menu').on('click','li',function(){
		var a=$(this).index();
		$('.job .menu>li').removeClass('act');
		$(this).addClass('act');
		
		$('.job .con-box .chapter').hide();
		$('.job .con-box .chapter').eq(a).show();

	})

	$('.welfare .menu>li').eq(0).addClass('act');
	$('.welfare .menu').on('click','li',function(){
		var a=$(this).index();
		$('.welfare .menu>li').removeClass('act');
		$(this).addClass('act');
		
		$('.welfare .con-box .chapter').hide();
		$('.welfare .con-box .chapter').eq(a).show();

	})

	$('.wish .menu>li').eq(0).addClass('act');
	$('.wish .menu').on('click','li',function(){
		var a=$(this).index();
		$('.wish .menu>li').removeClass('act');
		$(this).addClass('act');
		
		$('.wish .con-box .chapter').hide();
		$('.wish .con-box .chapter').eq(a).show();

	})





})



//回到页面顶部
$('.top').click(function(){
    $('html,body').animate({'scrollTop':'0'});
});


















